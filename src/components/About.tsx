
import React from 'react';
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  const skills = [
    "Flutter", "Dart", "Firebase", 
    "UI/UX Design", "REST APIs", 
    "State Management", "Git", 
    "Android", "iOS", "React"
  ];
  
  return (
    <section id="about" className="py-24 section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">About Me</h2>
            <h3 className="text-3xl font-bold mb-6">Flutter Developer with a passion for beautiful UI and clean code</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Abhishek, a Flutter developer who loves creating exceptional 
                mobile applications. My passion lies in building software that provides 
                pixel-perfect, smooth experiences.
              </p>
              <p>
                I started my journey in mobile development with Android, then discovered 
                Flutter and became passionate about building cross-platform applications. 
                I enjoy solving complex problems and turning them into simple, beautiful interface designs.
              </p>
              <p>
                When I'm not coding, you might find me exploring the latest tech trends, 
                contributing to open source, or playing video games.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <Card className="glass p-8 animate-float">
              <h3 className="text-xl font-bold mb-6 font-mono">Skills &amp; Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
