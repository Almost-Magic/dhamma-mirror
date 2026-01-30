import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  MessageCircle, 
  Lock, 
  BookOpen, 
  Languages, 
  Calendar, 
  Settings, 
  Info,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/mirror', label: 'Mirror', icon: MessageCircle },
  { path: '/vault', label: 'Vault', icon: Lock },
  { path: '/suttas', label: 'Suttas', icon: BookOpen },
  { path: '/pali', label: 'Pāli', icon: Languages },
  { path: '/practice', label: 'Practice', icon: Calendar },
  { path: '/about', label: 'About', icon: Info },
];

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-serif text-lg font-medium text-foreground"
          >
            <span className="text-2xl">◐</span>
            <span className="hidden sm:inline">dhamma mirror</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Theme toggle & Settings */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/settings" className="hidden md:flex">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Settings className="h-4 w-4 text-foreground/70" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors",
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/settings"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
