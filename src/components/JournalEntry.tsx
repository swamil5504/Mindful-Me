import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mic, Save, Sparkles } from 'lucide-react';

// Available journaling modes
type JournalMode = 'therapist' | 'quiet' | 'selfhelp' | 'scheduler';

export const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mode, setMode] = useState<JournalMode>('therapist');

  // Speech-to-text (Web Speech API)
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setEntry((prev) => (prev ? prev + ' ' : '') + transcript.trim());
      };

      recognition.onend = () => setIsRecording(false);
      recognition.onerror = () => setIsRecording(false);

      recognitionRef.current = recognition;
    }
  }, []);

  const handleSave = () => {
    if (entry.trim()) {
      console.log('Saving journal entry:', { entry, mode });
      // TODO: Implement save functionality with Supabase
      setEntry('');
    }
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const modeHint: Record<JournalMode, string> = {
    therapist: "What's coming up for you right now? What might this feeling be trying to tell you?",
    quiet: 'Write freely. No prompts—just space to breathe.',
    selfhelp: 'Try reframing the situation. What small action could help right now?',
    scheduler: 'What activity would feel nourishing? When might you do it?'
  };

  const quickPrompts: Record<JournalMode, string[]> = {
    therapist: ['What feels heavy?', 'When did this start?', 'What do you need?'],
    quiet: ['…', '…', '…'],
    selfhelp: ['One thing I can do is…', 'A kind thought to myself…', 'If a friend felt this…'],
    scheduler: ['Walk outside', 'Call a friend', 'Block 15 mins to read']
  };

  const applyPrompt = (text: string) => setEntry((prev) => (prev ? prev + '\n' : '') + text);

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50 overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5 text-accent" />
          Journal Entry
        </CardTitle>
        <CardDescription>
          Choose a mode for the kind of support you want today.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Mode Switcher */}
        <Tabs value={mode} onValueChange={(v: any) => setMode(v)}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="therapist">Therapist</TabsTrigger>
            <TabsTrigger value="quiet">Quiet</TabsTrigger>
            <TabsTrigger value="selfhelp">Self-help</TabsTrigger>
            <TabsTrigger value="scheduler">Scheduler</TabsTrigger>
          </TabsList>
          <TabsContent value={mode} className="space-y-3">
            <p className="text-sm text-muted-foreground animate-fade-in">{modeHint[mode]}</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts[mode].map((p) => (
                <Button key={p} variant="secondary" size="sm" onClick={() => applyPrompt(p)}>
                  {p}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="relative">
          {/* Cozy background blobs */}
          <div className="pointer-events-none absolute -top-6 -left-4 h-16 w-16 bg-gradient-to-tr from-primary/15 to-accent/15 blur-xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 bg-gradient-to-tr from-secondary/15 to-primary/15 blur-xl rounded-full" />
          <Textarea
            placeholder={modeHint[mode]}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="min-h-40 resize-none bg-background/60 border-border/50 focus:border-primary/50 transition-colors relative"
          />
        </div>

        <div className="flex gap-3 justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleRecording}
            className={`
              flex items-center gap-2 transition-all
              ${isRecording 
                ? 'bg-accent text-accent-foreground shadow-gentle' 
                : 'hover:bg-accent-soft'
              }
            `}
          >
            <Mic className={`h-4 w-4 ${isRecording ? 'animate-pulse' : ''}`} />
            {isRecording ? 'Stop Recording' : 'Voice Entry'}
          </Button>

          <Button
            variant="default"
            onClick={handleSave}
            disabled={!entry.trim()}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Save Entry
          </Button>
        </div>

        {entry.length > 0 && (
          <div className="text-sm text-muted-foreground text-right animate-fade-in">
            {entry.length} characters
          </div>
        )}
      </CardContent>
    </Card>
  );
};