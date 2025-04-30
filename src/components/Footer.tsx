
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/30 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <a href="#home" className="text-2xl font-mono font-bold mb-4 block">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Abhishek Kumar</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full stack developer specializing in React.js, Flutter, and modern web technologies.
              Based in Bangalore, India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/codewithabhi001" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhishek-kumar-76b9a924b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:abhisheksingh9709844475@gmail.com"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-bold mb-4 text-foreground">Contact Info</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>Bangalore, India</p>
              <p>
                <a href="mailto:abhisheksingh@gmail.com" className="hover:text-primary transition-colors">
                  abhisheksingh9709844475@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919304514787" className="hover:text-primary transition-colors">
                  +91 9304514787
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8 opacity-30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="text-foreground">Abhishek Kumar</span>. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Built with React, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
