import { GraduationCap, Code, Shield, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Tech in Computer Science',
  },
  {
    icon: Code,
    title: 'Backend Dev',
    description: 'Spring Boot & RESTful APIs',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Web Security Expert',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    description: 'Reinforcement Learning',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Hi, I'm <span className="text-primary">Piyush Kumar</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student at <span className="text-primary font-semibold">IIIT Guwahati</span> with 
              a passion for building secure and scalable web applications. My interests lie in backend development, 
              cloud deployment, and artificial intelligence.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Bachelor of Technology</span> in Computer Science and Engineering
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Indian Institute of Information Technology, Guwahati</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Expected Graduation:</span> April 2027
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a backend developer specializing in Spring Boot, focused on building robust and scalable server-side applications.
              My goal is to create efficient, maintainable systems that deliver reliable performance and exceptional user experiences.
            </p>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 group card-glow"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
