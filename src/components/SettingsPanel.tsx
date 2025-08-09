import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export const SettingsPanel = () => {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [privateMode, setPrivateMode] = useState(true);

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Personalize your experience</p>
      </header>

      <div className="relative">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-12 -left-10 h-40 w-40 bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 bg-gradient-to-tr from-secondary/20 to-primary/20 blur-2xl rounded-full" />

        <Card className="bg-gradient-card shadow-soft border-border/50 relative">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your basic information</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="display">Display name</Label>
              <Input id="display" placeholder="How you want to appear" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <Button variant="default">Save profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-card shadow-soft border-border/50">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Choose your theme</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Theme</Label>
            <Select value={theme} onValueChange={(v: any) => setTheme(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-soft border-border/50">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Control how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email updates</p>
              <p className="text-sm text-muted-foreground">Tips, summaries, and reminders</p>
            </div>
            <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push notifications</p>
              <p className="text-sm text-muted-foreground">Real-time mood and journal nudges</p>
            </div>
            <Switch checked={pushEnabled} onCheckedChange={setPushEnabled} />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-soft border-border/50">
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
          <CardDescription>Your data stays yours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Private mode</p>
              <p className="text-sm text-muted-foreground">Hide sensitive suggestions in public spaces</p>
            </div>
            <Switch checked={privateMode} onCheckedChange={setPrivateMode} />
          </div>
          <div className="flex justify-end">
            <Button variant="default">Save preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPanel;
