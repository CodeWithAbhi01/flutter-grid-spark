
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "PG Management Platform",
      description: "A comprehensive platform for PG listings with multi-role functionality, RESTful APIs, and JWT authentication.",
      image: "https://picsum.photos/id/26/800/600",
      tags: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhishek-kumar/pg-management",
      featured: true
    },
    {
      id: 2,
      title: "LIVE Result Software",
      description: "A dynamic result management system with responsive design for enhanced user experience and automated testing workflows.",
      image: "https://picsum.photos/id/180/800/600",
      tags: ["React.js", "JavaScript", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhishek-kumar/live-result"
    },
    {
      id: 3,
      title: "Tournament Management System",
      description: "System for tournament registration and result tracking, optimized for performance and user engagement.",
      image: "https://picsum.photos/id/342/800/600",
      tags: ["HTML", "CSS", "PHP", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhishek-kumar/tournament-management"
    },
    {
      id: 4,
      title: "Tracknplay Mobile App",
      description: "Flutter app for managing tournaments with slot creation, point tables, and user performance tracking.",
      image: "https://picsum.photos/id/237/800/600",
      tags: ["Flutter", "Dart", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.abhishek.tracknplay",
      githubUrl: "https://github.com/abhishek-kumar/tracknplay"
    },
  ];

  return (
    <section id="projects" className="py-24 section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">My Projects</h2>
        <h3 className="text-3xl font-bold mb-12">Featured Work</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
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
