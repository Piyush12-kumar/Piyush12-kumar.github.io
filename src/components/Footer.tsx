import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Piyush12-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/piyush-kumar-a365342a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Piyush Kumar.</span>
          </div>

          {/* Additional Info */}
          <p className="text-muted-foreground text-xs text-center max-w-md">
            Backend Developer | AI Enthusiast | Building the future, one line of code at a time
          </p>
        </div>
      </div>
    </footer>
  );
};
