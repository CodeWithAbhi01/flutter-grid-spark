
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
      <ParticleBackground />
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
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
