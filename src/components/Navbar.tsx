
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
        <a href="#home" className="text-xl font-mono font-bold">
          <span className="text-primary">&lt;</span>
          <span className="text-foreground">Abhishek Kumar</span>
          <span className="text-primary">/&gt;</span>
        </a>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-foreground hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="transition-colors font-medium text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button className="gap-2 transition-all duration-300 hover:scale-105" asChild>
                  <a href="/abhishek-kumar-resume.pdf" download="Abhishek_Kumar_Resume.pdf">
                    Resume <Download className="h-4 w-4" />
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col items-start space-y-4">
              {navItems.map((item) => (
                <li key={item.label} className="w-full">
                  <a 
                    href={item.href}
                    className="block w-full py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="w-full pt-2">
                <Button className="w-full gap-2" asChild>
                  <a href="/abhishek-kumar-resume.pdf" download="Abhishek_Kumar_Resume.pdf" onClick={() => setMobileMenuOpen(false)}>
                    Resume <Download className="h-4 w-4" />
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
