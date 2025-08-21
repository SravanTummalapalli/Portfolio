import { Button } from "../components/ui/button";
import { Download, ChevronDown, Github, Linkedin } from "lucide-react";
import heroBackground from "../assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // For now, just log - user can replace with actual resume URL
    console.log("Download resume functionality to be implemented");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center neural-bg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-glow-pulse animate-delay-75" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-glow-pulse animate-delay-150" />
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-secondary rounded-full animate-glow-pulse animate-delay-300" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-neural-accent rounded-full animate-glow-pulse animate-delay-500" />
        <div className="absolute bottom-48 right-1/3 w-2 h-2 bg-neural-secondary rounded-full animate-glow-pulse animate-delay-700" />
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary/30 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Main Content */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Name and Title with Enhanced Animations */}
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl font-bold text-gradient-primary transition-all duration-1000 ${
              isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
            }`}>
              Siva Ram Sravan Tummalapalli
            </h1>
            <div className="overflow-hidden w-full">
              <h2 className={`whitespace-nowrap text-2xl md:text-3xl font-semibold text-foreground/90 transition-all duration-1000 delay-300 ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
              }`}>
                Data Scientist | AI & ML Engineer | AI Enthusiast
              </h2>
            </div>
            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-95'
            }`}>
              Solving real-world problems with data-driven intelligence
            </p>
          </div>

          {/* Call to Action Buttons with Staggered Animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-bounce-in' : 'opacity-0 scale-90'
          }`}>
            <Button 
              onClick={scrollToProjects}
              className="btn-neural group hover:scale-105 transition-all duration-300"
              size="lg"
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 group-hover:animate-bounce transition-transform" />
            </Button>
              <a
                href="https://drive.google.com/file/d/18T-xCCIs6l17CRMAd1Ifn7j3uzI6qefT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neural-outline hover:scale-105 transition-all duration-300 animate-shimmer flex items-center justify-center px-6 py-3 rounded-lg border font-semibold text-base"
                style={{ textDecoration: "none" }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download Resume
              </a>
          </div>

          {/* Social Links with Enhanced Hover Effects */}
          <div className={`flex justify-center space-x-6 pt-8 transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="https://github.com/SravanTummalapalli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-smooth hover-scale hover:animate-spin-3d hover:bg-primary/20 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/siva-ram-sravan-tummalapalli-272009157/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-smooth hover-scale hover:animate-spin-3d hover:bg-primary/20 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://medium.com/@sravantummalapalli/conocophillips-predictive-equipment-failures-1c2c1913a6d8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-smooth hover-scale hover:animate-spin-3d hover:bg-primary/20 group"
            >
              {/* Replace with a generic link icon or Medium SVG */}
              <svg className="h-6 w-6 group-hover:scale-110 transition-transform" viewBox="0 0 1043.63 592.71" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M588.67 296.31c0 163.67-131.98 296.3-294.33 296.3C131.98 592.61 0 459.98 0 296.31 0 132.65 131.98 0 294.34 0c162.35 0 294.33 132.65 294.33 296.31zM843.6 296.31c0 148.74-65.45 269.33-146.17 269.33-80.72 0-146.17-120.59-146.17-269.33 0-148.74 65.45-269.33 146.17-269.33 80.72 0 146.17 120.59 146.17 269.33zM1043.63 296.31c0 137.5-29.1 248.97-65.01 248.97-35.91 0-65.01-111.47-65.01-248.97 0-137.5 29.1-248.97 65.01-248.97 35.91 0 65.01 111.47 65.01 248.97z"/>
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary/70" />
          </div>
        </div> */}
      </div>

      {/* Enhanced Floating Elements */}
      {/* <div className={`absolute top-1/4 left-8 animate-float hover:animate-spin-3d transition-all duration-500 ${
        isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
      }`}>
        <div className="w-20 h-20 glass rounded-lg flex items-center justify-center hover:animate-glow-pulse cursor-pointer">
          <span className="text-2xl">🤖</span>
        </div>
      </div>
      <div className={`absolute bottom-1/4 right-8 animate-float animate-delay-1000 hover:animate-spin-3d transition-all duration-500 ${
        isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'
      }`}>
        <div className="w-16 h-16 glass rounded-lg flex items-center justify-center hover:animate-glow-pulse cursor-pointer">
          <span className="text-xl">📊</span>
        </div>
      </div> */}
      
      {/* Additional floating tech icons */}
      {/* <div className={`absolute top-1/3 right-1/4 animate-float animate-delay-500 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-75'
      }`}>
        <div className="w-12 h-12 glass rounded-full flex items-center justify-center hover:animate-glow-pulse cursor-pointer">
          <span className="text-lg">⚡</span>
        </div>
      </div>
      <div className={`absolute bottom-1/3 left-1/4 animate-float animate-delay-700 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-75'
      }`}>
        <div className="w-12 h-12 glass rounded-full flex items-center justify-center hover:animate-glow-pulse cursor-pointer">
          <span className="text-lg">🚀</span>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;