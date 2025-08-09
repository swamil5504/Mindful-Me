import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Mic, Save, Sparkles } from 'lucide-react';

export const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSave = () => {
    if (entry.trim()) {
      console.log('Saving journal entry:', entry);
      // TODO: Implement save functionality with Supabase
      setEntry('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement speech-to-text functionality
  };

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5 text-accent" />
          Journal Entry
        </CardTitle>
        <CardDescription>
          Express your thoughts and feelings. Your entries are private and secure.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="How are you feeling today? What's on your mind?"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="min-h-32 resize-none bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
        />
        
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