
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Menu, Moon, Sun, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#home" className={`text-xl font-mono font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          <span className="text-primary">&lt;</span>
          Abhishek Kumar
          <span className="text-primary">/&gt;</span>
        </a>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`rounded-full ${theme === 'light' ? 'text-gray-800 hover:bg-gray-200' : 'text-muted-foreground hover:text-primary'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={theme === 'light' ? 'text-gray-900' : 'text-white'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        <nav className={`${
          mobileMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg p-4 border-t border-border/50 animate-fade-in' 
            : 'hidden'
        } md:block md:static md:bg-transparent md:shadow-none md:p-0 md:border-none`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className={`transition-colors font-medium ${
                    theme === 'light' 
                      ? 'text-gray-800 hover:text-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button className="gap-2 transition-all duration-300 hover:scale-105" onClick={(e) => e.preventDefault()}>
                Resume <Download className="h-4 w-4" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
