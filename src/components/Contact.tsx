
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:abhishek@example.com",
      label: "abhishek@example.com"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/abhishek-kumar",
      label: "linkedin.com/in/abhishek-kumar"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/abhishek-kumar",
      label: "github.com/abhishek-kumar"
    },
    {
      name: "Phone",
      icon: <Smartphone className="h-5 w-5" />,
      href: "tel:+1234567890",
      label: "+123 456 7890"
    }
  ];
  
  return (
    <section id="contact" className="py-24 section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">Get In Touch</h2>
        <h3 className="text-3xl font-bold mb-6">Let's Create Something Amazing Together</h3>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          I'm currently open for freelance projects and full-time opportunities.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <Card className="glass p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-primary/20 rounded-full">
                  {link.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">{link.name}</div>
                  <div className="text-sm text-muted-foreground">{link.label}</div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:abhishek@example.com">Send Message</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
