import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'Piyush12-kumar',
    link: 'https://github.com/Piyush12-kumar',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'piyush-kumar',
    link: 'https://linkedin.com/in/piyush-kumar-a365342a7',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'IIIT Guwahati, India',
    link: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up">
              <Card className="p-8 bg-card border-border card-glow">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 group"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-foreground font-medium hover:text-primary transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-8 bg-card border-border card-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Quick Connect
                </h3>
                <div className="flex gap-4">
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all shadow-lg shadow-primary/50"
                    asChild
                  >
                    <a
                      href="https://github.com/Piyush12-kumar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all shadow-lg shadow-primary/50"
                    asChild
                  >
                    <a
                      href="https://linkedin.com/in/piyush-kumar-a365342a7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all shadow-lg shadow-primary/50"
                    onClick={() => {
                      const nameInput = document.querySelector('form input[name="name"]') as HTMLInputElement;
                      nameInput?.focus();
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/50 card-glow h-full flex flex-col">
                <h3 className="text-3xl font-bold text-gradient mb-6">
                  Send Me a Message
                </h3>
                <form 
                  className="space-y-4"
                  action="https://formspree.io/f/xpwyejbe" 
                  method="POST"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full p-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  {/* Hidden field for subject line */}
                  <input type="hidden" name="_subject" value="New contact from Portfolio Website" />
                  
                  {/* Anti-spam honeypot field */}
                  <div style={{ position: "absolute", left: "-9999px" }}>
                    <label htmlFor="hp">Leave this field empty if you're human:</label>
                    <input type="text" name="_gotcha" id="hp" />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/50"
                  >
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    Response time: Usually within 24 hours
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
