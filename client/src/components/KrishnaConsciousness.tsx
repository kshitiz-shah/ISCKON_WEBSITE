import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Compass, Star } from "lucide-react";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

//todo: remove mock functionality - replace with real data
const features: Feature[] = [
  {
    id: "1",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Ancient Wisdom",
    description: "Discover timeless teachings from the Bhagavad Gita and Srimad Bhagavatam that provide practical guidance for modern living."
  },
  {
    id: "2", 
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Devotional Practice",
    description: "Experience the transformative power of bhakti yoga through chanting, meditation, and loving service to Krishna."
  },
  {
    id: "3",
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: "Spiritual Guidance",
    description: "Receive mentorship from experienced devotees and qualified spiritual teachers on your path of self-realization."
  },
  {
    id: "4",
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Community Support",
    description: "Join a loving community of like-minded souls dedicated to spiritual growth and service to humanity."
  }
];

export default function KrishnaConsciousness() {
  const handleLearnMore = () => {
    console.log('Learn more about Krishna Consciousness clicked');
  };

  const handleJoinProgram = () => {
    console.log('Join program clicked');
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Spreading the Science of Krishna Consciousness
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our mission is to share the eternal wisdom of Krishna consciousness with everyone, 
            helping souls reconnect with their spiritual nature and find lasting happiness through 
            devotional service and divine love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.id} className="text-center hover-elevate bg-card">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-lg p-8 border border-card-border">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Begin Your Spiritual Journey Today
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take the first step towards a life of purpose, peace, and divine connection. 
            Join our programs and discover the joy of Krishna consciousness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleLearnMore}
              data-testid="button-learn-more-consciousness"
              className="bg-primary text-primary-foreground hover-elevate"
            >
              Learn More
            </Button>
            <Button
              onClick={handleJoinProgram}
              variant="outline"
              data-testid="button-join-program"
              className="hover-elevate"
            >
              Join Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}