import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const moods = [
  { emoji: '😢', label: 'Very Sad', value: 1, color: 'bg-blue-100 hover:bg-blue-200' },
  { emoji: '😔', label: 'Sad', value: 2, color: 'bg-blue-50 hover:bg-blue-100' },
  { emoji: '😐', label: 'Neutral', value: 3, color: 'bg-muted hover:bg-muted/80' },
  { emoji: '😊', label: 'Happy', value: 4, color: 'bg-secondary-soft hover:bg-secondary/30' },
  { emoji: '😄', label: 'Very Happy', value: 5, color: 'bg-accent-soft hover:bg-accent/30' },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleMoodSelect = (mood: typeof moods[0]) => {
    setSelectedMood(mood.value);
  };

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold text-foreground">
          How are you feeling today?
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Select your current mood to start tracking your emotional journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <Button
              key={mood.value}
              variant="wellness"
              className={`
                h-20 flex-col gap-2 transition-all duration-300
                ${selectedMood === mood.value 
                  ? 'ring-2 ring-primary shadow-warm scale-105' 
                  : 'hover:scale-105'
                }
                ${mood.color}
              `}
              onClick={() => handleMoodSelect(mood)}
            >
              <span className="text-3xl">{mood.emoji}</span>
              <span className="text-xs font-medium">{mood.label}</span>
            </Button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-4">
              You selected: <span className="font-semibold text-foreground">
                {moods.find(m => m.value === selectedMood)?.label}
              </span>
            </p>
            <Button variant="default" size="lg">
              Log Mood Entry
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};