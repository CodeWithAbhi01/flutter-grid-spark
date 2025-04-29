
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding grid-background">
      <div className="container mx-auto max-w-5xl">
        <div className="animate-fade-in">
          <p className="text-primary font-mono mb-6">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono text-balance">
            Abhishek Kumar
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 text-balance">
            Full Stack <span className="text-gradient">Web & Mobile</span> Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-12">
            Result-driven full stack developer specializing in React.js, Flutter, 
            and modern web technologies with expertise in creating scalable web 
            and mobile applications.
          </p>
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
              className="group"
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
    </section>
  );
};

export default Hero;
