import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Backend system featuring product catalog, shopping cart, and order management with secure payment integration.',
    tech: ['Spring Boot', 'Spring Security', 'JPA', 'MySQL', 'Docker', 'AWS EC2'],
    github: 'https://github.com/Piyush12-kumar/E-Commerce_Platform-Backend',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Secure Notepad Application',
    description:
      'Multi-user application with JWT authentication and role-based access control. Built with security-first principles.',
    tech: ['Spring Boot', 'Spring Security', 'MySQL', 'RESTful APIs', 'JWT'],
    github: 'https://github.com/Piyush12-kumar/Secure_Notepad_Application',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Lunar Lander Project',
    description:
      'AI agent trained using Cross-Entropy Method for Lunar Lander environment, achieving high performance scores.',
    tech: ['Python', 'TensorFlow', 'OpenAI Gym', 'Reinforcement Learning'],
    github: 'https://github.com/Piyush12-kumar/Lunar-Lander-Project',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Chess Engine with AI',
    description:
      'Intelligent chess engine built with Minimax algorithm and Alpha-Beta Pruning for optimal move decisions.',
    tech: ['Python', 'AI Algorithms', 'Game Theory', 'Optimization'],
    github: 'https://github.com/Piyush12-kumar/Chess_Engine',
    gradient: 'from-orange-500 to-red-500',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-relaxed py-2" style={{ lineHeight: '1.4', paddingBottom: '8px' }}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full my-2" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed py-2" style={{ lineHeight: '1.8' }}>
            A showcase of my recent work in backend development and AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden relative card-glow animate-slide-up h-full flex flex-col"
              style={{ animationDelay: `${0.15 * index}s`, minHeight: '400px' }}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8 pb-10 space-y-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-relaxed">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed min-h-[5rem] pb-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default leading-relaxed"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 pb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn py-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">Want to see more?</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/50"
            asChild
          >
            <a
              href="https://github.com/Piyush12-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
