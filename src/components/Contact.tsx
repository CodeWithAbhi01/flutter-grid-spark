
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:abhisheksingh@gmail.com",
      label: "abhisheksingh@gmail.com"
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
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+915487875421",
      label: "+91 548 787 5421"
    },
    {
      name: "Location",
      icon: <MapPin className="h-5 w-5" />,
      href: "https://maps.google.com/?q=Bangalore,India",
      label: "Bangalore, India"
    }
  ];
  
  return (
    <section id="contact" className="py-24 section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">Get In Touch</h2>
        <h3 className="text-3xl font-bold mb-6 text-center">Let's Work Together</h3>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto text-center">
          I'm currently available for freelance projects and full-time opportunities.
          Whether you have a project in mind or just want to connect, feel free to reach out!
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
          
          <div className="mt-8 text-center">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:abhisheksingh@gmail.com">Send Me a Message</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
