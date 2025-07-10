const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary-light to-accent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold mb-4">
            <span className="text-white">Stac</span>
            <span className="text-accent">X</span>
          </div>
          
          {/* Tagline */}
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge mobile apps and IT solutions. 
            Your success is our mission.
          </p>
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">
              © 2024 StacX. All rights reserved. Built with ❤️ for innovation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-4 w-3 h-3 bg-primary-light rounded-full animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;