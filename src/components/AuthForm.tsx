import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, User } from "lucide-react";

interface AuthFormProps {
  onAuthSuccess: (userType: 'customer' | 'admin') => void;
}

export function AuthForm({ onAuthSuccess }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, userType: 'customer' | 'admin') => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false);
      onAuthSuccess(userType);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-gradient-to-r from-appetizing to-warm rounded-full flex items-center justify-center mb-4">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to Mealy</CardTitle>
          <p className="text-muted-foreground">Fresh meals, delivered fresh</p>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={(e) => handleSubmit(e, 'customer')} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-appetizing to-warm hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    <User className="w-4 h-4 mr-2" />
                    {isLoading ? "Signing in..." : "Sign in as Customer"}
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full border-appetizing text-appetizing hover:bg-appetizing hover:text-white"
                    onClick={(e) => handleSubmit(e as any, 'admin')}
                    disabled={isLoading}
                  >
                    <ChefHat className="w-4 h-4 mr-2" />
                    {isLoading ? "Signing in..." : "Sign in as Admin"}
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={(e) => handleSubmit(e, 'customer')} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-signup">Email</Label>
                  <Input id="email-signup" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signup">Password</Label>
                  <Input id="password-signup" type="password" required />
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-appetizing to-warm hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    <User className="w-4 h-4 mr-2" />
                    {isLoading ? "Creating account..." : "Sign up as Customer"}
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full border-appetizing text-appetizing hover:bg-appetizing hover:text-white"
                    onClick={(e) => handleSubmit(e as any, 'admin')}
                    disabled={isLoading}
                  >
                    <ChefHat className="w-4 h-4 mr-2" />
                    {isLoading ? "Creating account..." : "Sign up as Admin"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}