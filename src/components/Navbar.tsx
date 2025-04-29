
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
        <a href="#" className="text-xl font-mono font-bold text-white">
          <span className="text-primary">&lt;</span>
          Abhishek
          <span className="text-primary">/&gt;</span>
        </a>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <Menu />
          </Button>
        </div>
        
        <nav className={`${
          mobileMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg p-4 border-t border-border/50' 
            : 'hidden'
        } md:block md:static md:bg-transparent md:shadow-none md:p-0 md:border-none`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button className="bg-primary hover:bg-primary/90">Resume</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
