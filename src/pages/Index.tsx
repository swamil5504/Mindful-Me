import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoodTracker } from '@/components/MoodTracker';
import { JournalEntry } from '@/components/JournalEntry';
import { WellnessDashboard } from '@/components/WellnessDashboard';
import { Navigation } from '@/components/Navigation';
import { Sparkles, Brain, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-mental-health.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('mood');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-background">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Your Mental Health
                <span className="text-primary block">Companion</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
                Track your mood, journal your thoughts, and discover patterns in your emotional journey with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                <Button variant="default" size="lg" onClick={() => setIsAuthenticated(true)}>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Designed for Your Wellbeing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple, secure, and personalized tools to support your mental health journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-card rounded-lg shadow-gentle hover:shadow-soft transition-all">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  Get personalized recommendations and insights based on your mood patterns and journal entries.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-card rounded-lg shadow-gentle hover:shadow-soft transition-all">
                <div className="w-16 h-16 bg-secondary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
                <p className="text-muted-foreground">
                  Simple and intuitive mood tracking to help you understand your emotional patterns over time.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-card rounded-lg shadow-gentle hover:shadow-soft transition-all">
                <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
                <p className="text-muted-foreground">
                  Your data is encrypted and private. Only you have access to your personal wellness information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'mood':
        return <MoodTracker />;
      case 'journal':
        return <JournalEntry />;
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Your Wellness Dashboard</h2>
            <WellnessDashboard />
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Settings</h2>
            <p className="text-muted-foreground">Settings panel coming soon...</p>
          </div>
        );
      default:
        return <MoodTracker />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 min-h-screen bg-card/30 border-r border-border/50">
          <div className="p-6">
            <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
