import { MessageCircle, Settings, Search, Rocket } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consult & Understand Your Needs",
    description: "We start by deeply understanding your business goals, technical requirements, and user expectations through comprehensive consultation."
  },
  {
    number: "02", 
    icon: Settings,
    title: "Tailored Development & Design",
    description: "Our expert team crafts custom solutions using cutting-edge technologies, ensuring scalable and robust software architecture."
  },
  {
    number: "03",
    icon: Search,
    title: "Testing & Quality Assurance", 
    description: "Rigorous testing protocols ensure your application meets the highest standards of performance, security, and user experience."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Continuous Support",
    description: "We ensure smooth deployment and provide ongoing support, maintenance, and updates to keep your solution optimal."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures successful delivery of your technology solutions
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-sm text-accent font-semibold">Streamlined Process</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-success font-semibold">Quality Delivery</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-primary/50">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 glow-primary">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;