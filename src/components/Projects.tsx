
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "FlutterGram",
      description: "A social media application built with Flutter and Firebase with real-time chat, post sharing, and user profiles.",
      image: "https://picsum.photos/id/1/800/600",
      tags: ["Flutter", "Firebase", "Bloc"],
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/fluttergram",
      featured: true
    },
    {
      id: 2,
      title: "Weather App",
      description: "A clean and minimal weather app with beautiful UI animations and accurate forecasts.",
      image: "https://picsum.photos/id/64/800/600",
      tags: ["Flutter", "API", "Provider"],
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/weather-app"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A productivity app for managing daily tasks with notifications and cloud sync.",
      image: "https://picsum.photos/id/48/800/600",
      tags: ["Flutter", "Hive", "GetX"],
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      id: 4,
      title: "E-Commerce App",
      description: "A fully functional e-commerce application with payment integration and product tracking.",
      image: "https://picsum.photos/id/21/800/600",
      tags: ["Flutter", "Firebase", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/ecommerce-app"
    },
  ];

  return (
    <section id="projects" className="py-24 section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 font-mono text-gradient">My Projects</h2>
        <h3 className="text-3xl font-bold mb-12">Some Things I've Built</h3>
        
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
