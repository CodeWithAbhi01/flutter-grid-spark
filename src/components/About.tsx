
import React from 'react';
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">About Me</h2>
        <h3 className="text-3xl font-bold mb-12">Professional Background</h3>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                I'm a passionate full stack developer with experience in both web and mobile development. 
                Currently working as a <span className="text-primary">Technical Support Advisor at Concentrix Services India Private Limited</span> in Bangalore, 
                where I provide technical support and resolve customer issues in the Operations department.
              </p>
              <p>
                Previously, I worked as a <span className="text-primary">Software Development Intern at Biztechnosys Infotech Pvt Ltd</span>, 
                where I developed mobile and web applications using React.js, Flutter, and Node.js, and implemented 
                automated CI/CD pipelines that reduced deployment time by 40%.
              </p>
              <p>
                I'm focused on creating high-performance, user-friendly applications that solve real-world problems.
                My expertise spans across the full development stack, from designing intuitive front-end interfaces 
                to building robust back-end systems.
              </p>
              
              <Card className="bg-primary/10 p-8 border-primary/20">
                <h3 className="text-xl font-bold mb-4 font-mono">Core Technologies</h3>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["React.js", "Flutter", "Node.js", "MongoDB", "HTML5", "CSS3", "JavaScript", "Dart", "Git", "API Design"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
