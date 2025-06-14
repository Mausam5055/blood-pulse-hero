
import React from 'react';
import { Moon, Sun, Droplets } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Droplets className="w-4 h-4" />;
    }
    return actualTheme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
  };

  const getTooltip = () => {
    if (theme === 'system') return 'System theme';
    return actualTheme === 'dark' ? 'Dark mode' : 'Light mode';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`
        relative overflow-hidden transition-all duration-500 ease-in-out
        ${actualTheme === 'dark' 
          ? 'hover:bg-neon-pink/20 text-electric-cyan hover:text-neon-pink' 
          : 'hover:bg-deep-coral/20 text-soft-teal hover:text-deep-coral'
        }
        ${theme === 'system' ? 'animate-glow' : ''}
      `}
      title={getTooltip()}
    >
      <div className={`
        transform transition-transform duration-500 ease-in-out
        ${actualTheme === 'dark' ? 'rotate-180' : 'rotate-0'}
        ${theme === 'system' ? 'animate-heartbeat' : ''}
      `}>
        {getIcon()}
      </div>
      
      {/* Animated background */}
      <div className={`
        absolute inset-0 opacity-0 transition-opacity duration-300
        ${actualTheme === 'dark' 
          ? 'bg-gradient-to-r from-neon-pink/10 to-electric-cyan/10' 
          : 'bg-gradient-to-r from-deep-coral/10 to-soft-teal/10'
        }
        hover:opacity-100
      `} />
    </Button>
  );
};

export default ThemeToggle;
