
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            I build exceptional mobile experiences with <span className="text-gradient">Flutter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-12">
            I'm a Flutter developer specializing in building beautiful, 
            performance-optimized mobile applications. Currently focused on delivering 
            seamless cross-platform experiences that users love.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="group"
              asChild
            >
              <a href="#projects">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
