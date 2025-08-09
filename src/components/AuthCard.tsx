import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AuthCardProps {
  onSuccess: () => void;
}

export const AuthCard = ({ onSuccess }: AuthCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50 animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle>Welcome to MindfulMe</CardTitle>
        <CardDescription>Sign up or sign in to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-in">Email</Label>
              <Input id="email-in" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pass-in">Password</Label>
              <Input id="pass-in" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" onClick={onSuccess}>Continue</Button>
          </TabsContent>
          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-up">Email</Label>
              <Input id="email-up" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pass-up">Password</Label>
              <Input id="pass-up" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" onClick={onSuccess}>Create account</Button>
          </TabsContent>
        </Tabs>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          For real authentication and secure storage, please connect Supabase in the top-right (green button).
        </p>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
