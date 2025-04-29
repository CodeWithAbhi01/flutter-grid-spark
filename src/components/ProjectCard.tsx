
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <Card className={`glass-card overflow-hidden group transition-all duration-300 hover:translate-y-[-5px] ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <div 
            className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
        </AspectRatio>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          {featured && (
            <Badge variant="secondary" className="bg-primary text-white border-none px-3">
              Featured Project
            </Badge>
          )}
          
          <div className="flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="bg-black/50 backdrop-blur-sm border-white/10 text-white text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-white/10 text-white text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="font-mono text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-muted-foreground text-base">
          {description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono border-primary/30 text-primary text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="gap-4 pt-2 border-t border-border/30 mt-2">
        {githubUrl && (
          <Button variant="outline" size="sm" className="gap-2 glass" asChild>
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
