
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding grid-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary px-4 py-1 text-xs font-mono">
                WELCOME TO MY PORTFOLIO
              </Badge>
              
              <p className="text-primary font-mono mb-2">Hi, my name is</p>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 font-mono text-balance">
                Abhishek Kumar
              </h1>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 text-balance">
                Full Stack <span className="text-gradient">Web & Mobile</span> Developer
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Passionate about building responsive web applications and mobile apps with modern frameworks and libraries.
                Currently working as a Technical Support Advisor, developing my skills in Flutter, React, and Node.js.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10">
                <a 
                  href="mailto:abhisheksingh@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>abhisheksingh@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+915487875421" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>+91 548 787 5421</span>
                </a>
                
                <a 
                  href="https://github.com/abhishek-kumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/abhishek-kumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="group"
                  asChild
                >
                  <a href="#projects">
                    View my projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group glass"
                  asChild
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Download Resume
                    <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl animate-pulse-slow glass"></div>
              <div className="absolute inset-4 glass rounded-xl animate-float flex items-center justify-center overflow-hidden">
                <div className="text-3xl font-mono font-bold text-gradient">
                  &lt;/&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
