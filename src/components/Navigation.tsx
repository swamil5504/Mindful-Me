import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, BarChart3, Settings, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'mood', label: 'Mood Tracker', icon: Heart },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button variant="wellness" size="icon" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-background border-r border-border/50 shadow-soft z-40 transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-auto md:w-full md:bg-transparent md:border-0 md:shadow-none
      `}>
        <div className="p-6 md:p-0">
          <div className="mb-8 md:mb-6">
            <h1 className="text-2xl font-bold text-primary">MindfulMe</h1>
            <p className="text-sm text-muted-foreground">Your wellness companion</p>
          </div>
          
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  className={`
                    w-full justify-start gap-3 h-12 text-left
                    ${activeSection === item.id 
                      ? 'shadow-gentle' 
                      : 'hover:bg-primary-soft hover:text-primary'
                    }
                  `}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};