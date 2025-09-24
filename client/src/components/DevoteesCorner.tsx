import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  date: string;
  author: string;
  category: "event" | "announcement" | "teaching";
  excerpt: string;
}

//todo: remove mock functionality - replace with real data
const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Janmashtami Festival Celebration",
    date: "2024-08-26",
    author: "Temple Committee",
    category: "event",
    excerpt: "Join us for the grand celebration of Lord Krishna's appearance day with special programs, kirtan, and prasadam distribution."
  },
  {
    id: "2", 
    title: "New Bhagavad Gita Study Group",
    date: "2024-08-20",
    author: "Prabhu Govinda Das",
    category: "teaching",
    excerpt: "Weekly study sessions every Sunday morning focusing on practical application of Krishna consciousness in daily life."
  },
  {
    id: "3",
    title: "Temple Renovation Update",
    date: "2024-08-15",
    author: "Construction Committee",
    category: "announcement",
    excerpt: "Progress update on the temple expansion project and how devotees can contribute to the sacred endeavor."
  }
];

export default function DevoteesCorner() {
  const handleReadMore = (announcementId: string) => {
    console.log(`Read more clicked for announcement: ${announcementId}`);
  };

  const handleViewAll = () => {
    console.log('View all announcements clicked');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "event": return "bg-accent/10 text-accent-foreground";
      case "teaching": return "bg-primary/10 text-primary";
      case "announcement": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Devotees Corner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our spiritual community through the latest updates, 
            announcements, and teachings from our temple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="hover-elevate">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className={getCategoryColor(announcement.category)}>
                    {announcement.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(announcement.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-lg font-serif leading-tight">
                  {announcement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {announcement.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    {announcement.author}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleReadMore(announcement.id)}
                    data-testid={`button-read-more-${announcement.id}`}
                    className="text-primary hover:text-primary/80"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleViewAll}
            variant="outline"
            data-testid="button-view-all-announcements"
            className="hover-elevate"
          >
            View All Announcements <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}