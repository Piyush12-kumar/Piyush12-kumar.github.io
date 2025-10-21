import { Card } from '@/components/ui/card';
import { Server, Globe, Brain } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Backend API Development',
    description:
      'Design and deploy secure, scalable RESTful APIs using Java and Spring. Expert in building robust backend systems with proper authentication, authorization, and data management.',
    features: ['RESTful API Design', 'Database Optimization', 'Security Implementation', 'Microservices Architecture'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    description:
      'Build and train AI models for specific tasks, including Reinforcement Learning and game AI. Experience with neural networks and intelligent systems.',
    features: ['Reinforcement Learning', 'Neural Networks', 'Model Training', 'Algorithm Optimization'],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
            Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services to bring your technical ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 group overflow-hidden relative card-glow animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-border">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
