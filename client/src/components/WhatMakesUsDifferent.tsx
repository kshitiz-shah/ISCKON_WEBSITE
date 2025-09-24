import { Card, CardContent } from "@/components/ui/card";
import { Heart, Book, Users, Compass, Star, Globe } from "lucide-react";

interface Differentiator {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

//todo: remove mock functionality - replace with real data
const differentiators: Differentiator[] = [
  {
    id: "1",
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Authentic Tradition",
    description: "Direct disciplic succession from ancient Vedic masters, preserving timeless spiritual wisdom in its purest form."
  },
  {
    id: "2",
    icon: <Book className="h-8 w-8 text-primary" />,
    title: "Practical Philosophy",
    description: "Time-tested teachings that provide practical solutions for modern life challenges and spiritual advancement."
  },
  {
    id: "3",
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Global Community",
    description: "Part of a worldwide network of devotees united in the practice of Krishna consciousness and service."
  },
  {
    id: "4",
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: "Personal Guidance",
    description: "Individual mentoring and spiritual counseling to support your unique path of self-realization."
  },
  {
    id: "5",
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Holistic Approach",
    description: "Comprehensive lifestyle that integrates spiritual practice with practical living and community service."
  },
  {
    id: "6",
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Universal Message",
    description: "Inclusive teachings that embrace all sincere seekers regardless of background, culture, or previous beliefs."
  }
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ISKCON stands apart through our commitment to authentic spiritual tradition, 
            practical philosophy, and genuine care for each individual's spiritual journey. 
            Discover what makes our community truly special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <Card key={item.id} className="hover-elevate text-center bg-card">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/10">
          <blockquote className="text-xl md:text-2xl font-accent italic text-foreground mb-4 leading-relaxed">
            "The goal of life is to attain the supreme destination, back to Godhead, 
            back to our original Krishna consciousness."
          </blockquote>
          <cite className="text-muted-foreground font-medium">
            — A.C. Bhaktivedanta Swami Prabhupada, Founder-Acharya of ISKCON
          </cite>
        </div>
      </div>
    </section>
  );
}