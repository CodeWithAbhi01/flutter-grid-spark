
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const About: React.FC = () => {
  const technologies = [
    { name: "React.js", category: "frontend" },
    { name: "Flutter", category: "mobile" },
    { name: "Node.js", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "language" },
    { name: "Dart", category: "language" },
    { name: "Git", category: "tool" },
    { name: "API Design", category: "skill" },
  ];
  
  const experiences = [
    {
      title: "Technical Support Advisor",
      company: "Concentrix Services India Private Limited",
      duration: "Current Position",
      location: "Bangalore",
      description: [
        "Providing technical support and resolving customer issues in Operations department",
        "Working in Company Grade 12 as Technical Support Representative",
        "Demonstrating strong problem-solving and customer service skills"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Biztechnosys Infotech Pvt Ltd",
      duration: "Previous",
      location: "Bangalore",
      description: [
        "Developed mobile and web applications using React.js, Flutter, and Node.js",
        "Implemented automated CI/CD pipelines reducing deployment time by 40%",
        "Designed and debugged complex software solutions with focus on performance"
      ]
    }
  ];
  
  return (
    <section id="about" className="py-24 section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">About Me</h2>
          <h3 className="text-3xl font-bold mb-8">Professional Background</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-6 text-muted-foreground">
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
            </div>
            
            <div className="md:col-span-5">
              <Card className="glass-card p-8 h-full">
                <h3 className="text-xl font-bold mb-6 font-mono">Work Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l border-primary/30">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary"></div>
                      <h4 className="font-bold text-lg">{exp.title}</h4>
                      <p className="text-primary text-sm mb-1">{exp.company}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <Card className="glass p-8 border-primary/20">
              <h3 className="text-xl font-bold mb-6 font-mono">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech.name}
                    variant="outline" 
                    className="px-4 py-1.5 bg-primary/10 text-primary border-primary/20 text-sm"
                  >
                    {tech.name}
                    <span className="ml-2 text-xs opacity-60">#{tech.category}</span>
                  </Badge>
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
