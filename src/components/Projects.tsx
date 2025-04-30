
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const projects = [
    {
      id: 1,
      title: "PG Management Platform",
      description: "A comprehensive platform for PG listings with multi-role functionality, RESTful APIs, and JWT authentication.",
      image: "https://i.pinimg.com/736x/cc/96/17/cc9617bf480c510217fec6fa3890617a.jpg", // Using placeholder since external URLs aren't allowed
      tags: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhishek-kumar/pg-management",
      featured: true,
      category: "web"
    },
    /*
    {
      id: 2,
      title: "LIVE Result Software",
      description: "A dynamic result management system with responsive design for enhanced user experience and automated testing workflows.",
      image: "/api/placeholder/800/600", // Using placeholder since external URLs aren't allowed
      tags: ["React.js", "JavaScript", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhishek-kumar/live-result",
      category: "web"
    },
    {
      id: 3,
      title: "Tournament Management System",
      description: "System for tournament registration and result tracking, optimized for performance and user engagement.",
      image: "/api/placeholder/800/600", // Using placeholder since external URLs aren't allowed
      tags: ["HTML", "CSS", "PHP", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhishek-kumar/tournament-management",
      category: "web"
    },
    */
    {
      id: 4,
      title: "Tracknplay Mobile App",
      description: "Flutter app for managing tournaments with slot creation, point tables, and user performance tracking.",
      image: "https://i.imgur.com/JRzS1nO.png", // Using placeholder since external URLs aren't allowed
      tags: ["Flutter", "Dart", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.abhishek.tracknplay",
      githubUrl: "https://github.com/abhishek-kumar/tracknplay",
      category: "mobile"
    },
  ];

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Web Apps", value: "web" },
    { label: "Mobile Apps", value: "mobile" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">My Projects</h2>
        <h3 className="text-3xl font-bold mb-6">Featured Work</h3>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              className={activeFilter === filter.value ? "" : "glass"}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
