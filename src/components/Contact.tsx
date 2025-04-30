
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:abhisheksingh9709844475@gmail.com",
      label: "abhisheksingh@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/abhishek-kumar-76b9a924b/",
      label: "linkedin.com/in/abhishek-kumar"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/codewithabhi001",
      label: "github.com/abhishek-kumar"
    },
    {
      name: "Phone",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+91 9304514787",
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
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">Get In Touch</h2>
        <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
        <p className="text-muted-foreground mb-12 max-w-md">
          I'm currently available for freelance projects and entry-level opportunities.
          Whether you have a project in mind or just want to connect, feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Card className="glass p-4 sm:p-6">
              <h4 className="font-bold text-lg mb-4">Send Me a Message</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" className="glass" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input id="email" placeholder="john@example.com" type="email" className="glass" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project Inquiry" className="glass" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Hello Abhishek, I'd like to discuss a project opportunity..." 
                    rows={5}
                    className="glass"
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="glass p-4 sm:p-6 h-full">
              <h4 className="font-bold text-lg mb-6">Contact Information</h4>
              <div className="grid grid-cols-1 gap-4">
                {contactLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors overflow-hidden"
                  >
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                      {link.icon}
                    </div>
                    <div className="text-left overflow-hidden">
                      <div className="text-sm font-medium truncate">{link.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{link.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
