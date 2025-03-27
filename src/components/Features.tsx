
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Shield, Zap, Layers, ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon, title, description, delay = '0ms' }: FeatureCardProps) => (
  <div 
    className="glass-card rounded-xl p-6 animate-on-scroll" 
    style={{ transitionDelay: delay }}
  >
    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-on-scroll">
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4 inline-block">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Designed with <span className="shimmer-text">precision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            Every feature has been carefully considered and implemented with attention to detail, 
            creating a seamless experience that delights users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Sparkles className="h-6 w-6 text-primary" />}
            title="Intuitive Design"
            description="A user interface that feels natural and effortless, guiding users through the experience."
            delay="100ms"
          />
          <FeatureCard 
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="Secure Platform"
            description="Built with security at its core, ensuring your data stays protected at all times."
            delay="200ms"
          />
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-primary" />}
            title="Lightning Fast"
            description="Optimized performance to provide a responsive experience with no waiting."
            delay="300ms"
          />
          <FeatureCard 
            icon={<Layers className="h-6 w-6 text-primary" />}
            title="Modular System"
            description="Flexible components that can be combined in countless ways to suit your needs."
            delay="400ms"
          />
          <FeatureCard 
            icon={<ArrowUpRight className="h-6 w-6 text-primary" />}
            title="Seamless Integration"
            description="Works perfectly with your existing tools and platforms without disruption."
            delay="500ms"
          />
          
          {/* Feature highlight card */}
          <div className="glass-card rounded-xl p-6 overflow-hidden relative animate-on-scroll" style={{ transitionDelay: '600ms' }}>
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of satisfied users who have transformed their experience.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Start Now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
