
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from 'lucide-react';

const Index: React.FC = () => {
  // Ensure the page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();
  
  // Back to top functionality
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Main background particles */}
      <ParticleBackground />
      
      <Navbar />
      
      <main className="w-full px-4 sm:px-6 md:px-0">
        <Hero />
        
        <div className="relative">
          {/* About section particles with different color */}
          <ParticleBackground 
            className="absolute top-0 left-0 w-full h-full z-0 opacity-30" 
            particleColor="rgba(180, 180, 255, 0.3)"
            connectionColor="rgba(180, 180, 255, 0.08)"
            density={30}
          />
          <About />
        </div>
        
        <div className="relative">
          {/* Projects section particles */}
          <ParticleBackground 
            className="absolute top-0 left-0 w-full h-full z-0 opacity-20" 
            particleColor="rgba(255, 180, 180, 0.25)"
            connectionColor="rgba(255, 180, 180, 0.06)"
            density={40}
          />
          <Projects />
        </div>
        
        <div className="relative">
          {/* Contact section particles */}
          <ParticleBackground 
            className="absolute top-0 left-0 w-full h-full z-0 opacity-25" 
            particleColor="rgba(180, 255, 180, 0.25)"
            connectionColor="rgba(180, 255, 180, 0.07)"
            density={35}
          />
          <Contact />
        </div>
      </main>
      
      <div className="relative">
        {/* Footer section particles */}
        <ParticleBackground 
          className="absolute top-0 left-0 w-full h-full z-0 opacity-10" 
          particleColor="rgba(200, 200, 250, 0.2)"
          connectionColor="rgba(200, 200, 250, 0.05)"
          density={25}
        />
        <Footer />
      </div>
      
      {/* Fixed elements */}
      <Badge 
        variant="outline" 
        className="fixed bottom-6 left-6 glass hover:bg-primary/20 cursor-pointer transition-all z-40"
      >
        <a 
          href="https://github.com/abhishek-kumar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-xs text-foreground">© {currentYear} Abhishek Kumar</span>
        </a>
      </Badge>
      
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary/90 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all z-40 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Index;

