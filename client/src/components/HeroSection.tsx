import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Book } from "lucide-react";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Krishna_Radha_temple_deities_d81c6210.png";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const handleLearnMore = () => {
    setLocation('/about');
  };

  const handleDonate = () => {
    const donateSection = document.querySelector('[data-donate-section]');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinUs = () => {
    setLocation('/contact');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Explore the history and teachings of{" "}
            <span className="text-accent font-accent">Lord Krishna & Guru Parampara</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our spiritual community to experience divine consciousness, ancient wisdom, 
            and the transformative power of Krishna's teachings in your daily life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={handleLearnMore}
              size="lg"
              className="bg-primary text-primary-foreground hover-elevate"
              data-testid="button-learn-more"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleJoinUs}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover-elevate"
              data-testid="button-join-us"
            >
              Join Our Community
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-white">300+</span>
              </div>
              <p className="text-white/80 text-sm">Active Devotees</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Book className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-white">70+</span>
              </div>
              <p className="text-white/80 text-sm">Weekly Programs</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-white">25</span>
              </div>
              <p className="text-white/80 text-sm">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}