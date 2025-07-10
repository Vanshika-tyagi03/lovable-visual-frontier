import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-professionals.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary-light rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent-light rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-success rounded-full animate-pulse delay-1500"></div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Empowering
                <br />
                Businesses with
                <br />
                <span className="text-accent">Cutting-Edge</span>
                <br />
                Mobile Apps & IT
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg">
                Build. Scale. Succeed.
              </p>
            </div>

            {/* Email Input & CTA */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                placeholder="Enter Your Email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
              />
              <Button className="gradient-accent text-primary font-semibold px-8 py-3 glow-accent hover:scale-105 transition-all duration-300">
                Get a Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="IT Professionals collaborating" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto glow-primary"
              />
              
              {/* Innovation Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-primary px-6 py-3 rounded-full font-semibold shadow-lg glow-accent">
                Innovation Driven
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;