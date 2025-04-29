
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";

const Index: React.FC = () => {
  // Ensure the page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Fixed elements */}
      <Badge 
        variant="outline" 
        className="fixed bottom-6 right-6 glass hover:bg-primary/20 cursor-pointer transition-all"
      >
        <a 
          href="https://github.com/abhishek-kumar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-xs">© {currentYear} Abhishek Kumar</span>
        </a>
      </Badge>
    </div>
  );
};

export default Index;
