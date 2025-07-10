import { Smartphone, Cloud, Shield, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Native and cross-platform mobile applications built for optimal performance"
  },
  {
    icon: Cloud,
    title: "Cloud Integration", 
    description: "Seamless cloud solutions for scalability and reliable data management"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security protocols ensuring data protection and compliance"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized applications delivering lightning-fast user experiences"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with deep technical expertise and industry knowledge"
  },
  {
    icon: Globe,
    title: "Global Support", 
    description: "24/7 worldwide support ensuring your business never stops running"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group-hover:border-primary/50 relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;