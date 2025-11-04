import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Book, 
  Users, 
  Heart, 
  Music, 
  Utensils,
  GraduationCap,
  Calendar,
  Clock
} from "lucide-react";

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  schedule: string;
  category: string;
  isOngoing: boolean;
}

//todo: remove mock functionality - replace with real data
const programs: Program[] = [
  {
    id: "1",
    title: "Bhagavad Gita Classes",
    description: "Weekly in-depth study of the Bhagavad Gita with practical applications for modern life. Learn the timeless wisdom directly from Krishna's teachings to Arjuna.",
    icon: <Book className="h-6 w-6" />,
    schedule: "Every Sunday, 8:30 PM",
    category: "Spiritual Education",
    isOngoing: true
  },
  {
    id: "2",
    title: "Kirtan & Bhajans",
    description: "Congregational chanting of the holy names with traditional musical instruments. Experience the transcendental joy of devotional singing.",
    icon: <Music className="h-6 w-6" />,
    schedule: "Daily, 7:00 PM",
    category: "Devotional Practice",
    isOngoing: true
  },
  {
    id: "3",
    title: "Sunday Feast Program",
    description: "Weekly spiritual program including philosophy class, kirtan, arati ceremony, and sumptuous prasadam feast. Perfect for families and newcomers.",
    icon: <Utensils className="h-6 w-6" />,
    schedule: "Every Sunday, 5:00 PM - 9:00 PM",
    category: "Community Gathering",
    isOngoing: true
  },
  {
    id: "4",
    title: "Youth Forum",
    description: "Dynamic programs designed for young adults focusing on practical spirituality, leadership development, and building spiritual friendships.",
    icon: <Users className="h-6 w-6" />,
    schedule: "Every Saturday, 6:00 PM",
    category: "Youth Programs",
    isOngoing: true
  },
  {
    id: "5",
    title: "Bhakti Vriksha",
    description: "Small group spiritual gatherings in homes where devotees study, chant, and share prasadam together in an intimate setting.",
    icon: <Heart className="h-6 w-6" />,
    schedule: "Weekly, Various Locations",
    category: "Community Groups",
    isOngoing: true
  },
  {
    id: "6",
    title: "Vedic Studies Course",
    description: "Comprehensive course covering Vedic philosophy, history, and practical application. Perfect for those wanting deeper understanding.",
    icon: <GraduationCap className="h-6 w-6" />,
    schedule: "3-Month Course, Starts Quarterly",
    category: "Education",
    isOngoing: false
  }
];

export default function Programs() {
  const handleJoinProgram = (programId: string) => {
    console.log(`Join program clicked: ${programId}`);
  };

  const handleContactUs = () => {
    console.log('Contact us for programs clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Our Programs
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our diverse range of spiritual programs designed to help you grow in Krishna consciousness
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {programs.map((program) => (
                <Card key={program.id} className="hover-elevate flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {program.icon}
                      </div>
                      {program.isOngoing && (
                        <Badge className="bg-accent/10 text-accent-foreground">
                          Ongoing
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-serif">
                      {program.title}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit text-xs">
                      {program.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {program.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {program.schedule}
                      </div>
                      <Button
                        onClick={() => handleJoinProgram(program.id)}
                        className="w-full bg-primary text-primary-foreground hover-elevate"
                        data-testid={`button-join-${program.id}`}
                      >
                        Join Program
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Special Programs */}
            <div className="mt-16">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
                Special Programs & Festivals
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                          Festival Celebrations
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Grand celebrations of Janmashtami, Gaura Purnima, Ratha Yatra, and other 
                          Vaishnava festivals with special programs, cultural performances, and feasts.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Major Festivals:</strong> Janmashtami (August), Gaura Purnima (March), 
                          Ratha Yatra (July), Diwali (October)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Users className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                          Retreat Programs
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Spiritual retreats offering intensive training in devotional practices, 
                          meditation, and philosophical study in a peaceful, focused environment.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Duration:</strong> 3-7 days retreats held quarterly at our peaceful ashram
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Want to Learn More About Our Programs?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to learn more about our programs, schedule a visit, or speak with 
                one of our counselors about which program is right for you.
              </p>
              <Button
                onClick={handleContactUs}
                size="lg"
                className="bg-primary text-primary-foreground hover-elevate"
                data-testid="button-contact-programs"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}