
import React from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const About: React.FC = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Flutter/Dart", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 70 },
    { name: "Git/GitHub", level: 85 },
    { name: "Java", level: 65 },
    { name: "C", level: 60 },
  ];
  
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
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["React.js", "Flutter", "Node.js", "MongoDB", "HTML5", "CSS3", "JavaScript", "Dart", "Git", "API Design"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5">
            <Card className="glass p-8 animate-float">
              <h3 className="text-xl font-bold mb-6 font-mono">Technical Proficiency</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
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
