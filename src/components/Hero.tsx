import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
                Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient animate-slide-up glow-text" style={{ animationDelay: '0.1s' }}>
                Piyush Kumar
              </h1>
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  Computer Science Student
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Backend Developer | AI Enthusiast
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Building secure and scalable web applications with a passion for Backend Development, 
              Web Security, and Artificial Intelligence.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/50"
                asChild
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/Piyush12-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/piyush-kumar-a365342a7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
