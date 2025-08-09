import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Heart, BookOpen, Calendar } from 'lucide-react';

export const WellnessDashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const mockStats = {
    weeklyMoodAverage: 3.8,
    journalEntriesThisWeek: 5,
    consecutiveDays: 12,
    topEmotion: 'Calm'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-gradient-card shadow-gentle border-border/50 hover:shadow-soft transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Mood Average</CardTitle>
          <TrendingUp className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {mockStats.weeklyMoodAverage}/5
          </div>
          <p className="text-xs text-muted-foreground">
            +0.3 from last week
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-gentle border-border/50 hover:shadow-soft transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Journal Entries</CardTitle>
          <BookOpen className="h-4 w-4 text-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {mockStats.journalEntriesThisWeek}
          </div>
          <p className="text-xs text-muted-foreground">
            This week
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-gentle border-border/50 hover:shadow-soft transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
          <Calendar className="h-4 w-4 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {mockStats.consecutiveDays}
          </div>
          <p className="text-xs text-muted-foreground">
            Consecutive days
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-gentle border-border/50 hover:shadow-soft transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Emotion</CardTitle>
          <Heart className="h-4 w-4 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground mb-1">
            {mockStats.topEmotion}
          </div>
          <Badge variant="secondary" className="text-xs">
            Most frequent
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};