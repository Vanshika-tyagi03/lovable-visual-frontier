import { Monitor, DollarSign, GraduationCap, Heart, ShoppingCart, Building } from "lucide-react";

const industries = [
  {
    icon: Monitor,
    title: "Information Technology",
    description: "Custom software solutions and system integrations"
  },
  {
    icon: DollarSign,
    title: "Finance & Banking", 
    description: "Secure financial applications and payment systems"
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    description: "Interactive learning platforms and educational tools"
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "HIPAA-compliant medical software and telemedicine solutions"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "Online stores and inventory management systems"
  },
  {
    icon: Building,
    title: "Real Estate & Property",
    description: "Property management and real estate platforms"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), 
                           linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, hsl(var(--accent)) 75%), 
                           linear-gradient(-45deg, transparent 75%, hsl(var(--accent)) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering specialized solutions across diverse sectors worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:border-primary/30 relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {industry.description}
                      </p>
                    </div>
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

export default IndustriesSection;