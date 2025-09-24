import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Home, Calendar, Users, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

//todo: remove mock functionality - replace with real data
const services: Service[] = [
  {
    id: "1",
    icon: <Utensils className="h-6 w-6 text-primary" />,
    title: "Sacred Prasadam",
    description: "Enjoy spiritually blessed vegetarian meals prepared with love and offered to Lord Krishna.",
    action: "View Menu"
  },
  {
    id: "2",
    icon: <Home className="h-6 w-6 text-primary" />,
    title: "Guest Accommodation",
    description: "Comfortable lodging for visiting devotees and spiritual seekers in our peaceful ashram.",
    action: "Book Stay"
  },
  {
    id: "3",
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Spiritual Programs",
    description: "Daily morning and evening programs including kirtan, lectures, and meditation sessions.",
    action: "Join Program"
  },
  {
    id: "4",
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community Events",
    description: "Regular festivals, celebrations, and special occasions bringing devotees together in joy.",
    action: "View Events"
  }
];

export default function DivineHospitality() {
  const handleServiceAction = (serviceId: string, action: string) => {
    console.log(`${action} clicked for service: ${serviceId}`);
  };

  const handleVisitUs = () => {
    console.log('Visit us clicked');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Experience Divine Hospitality
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Welcome to our spiritual home where every guest is treated as a representative of the Divine. 
            Experience the warmth of our community and the joy of spiritual fellowship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="hover-elevate">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleServiceAction(service.id, service.action)}
                  data-testid={`button-${service.id}-action`}
                  className="hover-elevate"
                >
                  {service.action} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/10">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Visit Our Sacred Space
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Come experience the divine atmosphere of our temple. All are welcome to participate 
            in our programs and feel the peace that comes from Krishna consciousness.
          </p>
          <Button
            onClick={handleVisitUs}
            data-testid="button-visit-us"
            className="bg-primary text-primary-foreground hover-elevate"
          >
            Plan Your Visit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}