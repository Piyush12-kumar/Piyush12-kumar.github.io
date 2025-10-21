import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C', 'SQL'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Frameworks',
    skills: ['Spring Boot', 'Spring Security', 'Spring JPA'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Technologies',
    skills: ['RESTful APIs', 'Docker', 'Microservices', 'AWS', 'Linux'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'],
    color: 'from-orange-500 to-red-500',
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient animate-wave inline-block">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-pulse-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, secure, and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.category}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 card-glow animate-slide-up"
              style={{ animationDelay: `${0.1 * categoryIndex}s` }}
            >
              <div className="space-y-4">
                <div className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 group"
                      style={{ animationDelay: `${0.05 * skillIndex}s` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Tags Cloud */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[
            'Backend Development',
            'Web Security',
            'Cloud Computing',
            'Machine Learning',
            'API Design',
            'Database Design',
            'Problem Solving',
          ].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-110"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
