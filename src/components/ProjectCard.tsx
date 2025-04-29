
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false
}) => {
  return (
    <Card className={`glass overflow-hidden group transition-all hover:border-primary/50 ${
      featured ? 'col-span-full md:col-span-2' : ''
    }`}>
      <div className="relative h-56 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
        <div className="absolute bottom-4 left-4">
          {featured && (
            <Badge variant="secondary" className="bg-primary text-white border-none">
              Featured Project
            </Badge>
          )}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-mono text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono border-primary/30 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="gap-4 pt-2">
        {githubUrl && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" className="gap-2" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
