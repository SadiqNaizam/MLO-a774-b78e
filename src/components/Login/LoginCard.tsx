import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Plus, UserCircle } from 'lucide-react';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const handleUserLogin = React.useCallback(() => {
    // Placeholder for actual login logic with the pre-filled user
    console.log('Attempting login for michaelscott@ascendion.com');
    // Example: window.location.href = '/sso/login?user=michaelscott@ascendion.com';
  }, []);

  const handleDifferentAccount = React.useCallback(() => {
    // Placeholder for navigating to a different login flow or form
    console.log('Signing in with a different account');
    // Example: window.location.href = '/login';
  }, []);

  // Stop event propagation for dropdown menu item clicks
  const onDropdownItemClick = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    // Add specific action for dropdown item if needed, e.g. opening a modal or navigating
    const target = e.target as HTMLElement;
    console.log(`Dropdown item "${target.textContent}" clicked`);
  }, []);

  return (
    <Card className={cn("w-full max-w-md shadow-lg rounded-lg bg-background overflow-hidden", className)}>
      <CardHeader className="text-center pt-8 pb-6">
        <CardTitle className="text-3xl font-bold text-foreground">Login with SSO</CardTitle>
        <CardDescription className="text-sm text-muted-foreground pt-1">
          Login with Company Account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pb-8 px-6 md:px-8">
        {/* User Info Block */}
        <div
          className="flex items-center justify-between p-3 sm:p-4 bg-secondary rounded-md hover:bg-muted cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={handleUserLogin}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { 
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault(); // Prevent page scroll on space
              handleUserLogin();
            }
          }}
          aria-label="Login as michaelscott@ascendion.com"
        >
          <div className="flex items-center space-x-3 overflow-hidden">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src="https://i.pravatar.cc/40?u=michaelscott" alt="Michael Scott" />
              <AvatarFallback>
                <UserCircle className="h-6 w-6 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
            <div className="text-sm overflow-hidden">
              <p className="font-medium text-card-foreground truncate" title="michaelscott@ascendion.com">michaelscott@ascendion.com</p>
              <p className="text-xs text-muted-foreground tracking-widest">••••••••••••</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground hover:bg-transparent focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 h-8 w-8 flex-shrink-0 ml-2"
                onClick={(e) => e.stopPropagation()} // Prevent parent div click
                aria-label="More options for michaelscott@ascendion.com"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onDropdownItemClick}>Remove account</DropdownMenuItem>
              <DropdownMenuItem onClick={onDropdownItemClick}>Account settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* "OR" Separator */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <Separator className="bg-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>

        {/* Alternative Login Button */}
        <Button
          variant="secondary"
          className="w-full py-3 text-base font-medium"
          onClick={handleDifferentAccount}
        >
          <Plus className="mr-2 h-5 w-5" />
          Sign in with different account
        </Button>

        {/* Help Link */}
        <div className="text-center text-sm pt-2">
          <span className="text-muted-foreground">Still have trouble signing in? </span>
          <a 
            href="#" 
            className="font-medium text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            aria-label="Get help signing in"
          >
            Click Here
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
