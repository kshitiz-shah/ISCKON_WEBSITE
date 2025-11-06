import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Clock, MapPin, Users, Calendar } from "lucide-react";
import { useLocation } from "wouter";
import templeImage from "@assets/generated_images/Hindu_temple_exterior_architecture_b0c750ac.png";

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  category: "prayer" | "class" | "service" | "festival";
}

//todo: remove mock functionality - replace with real data
const dailySchedule: ScheduleItem[] = [
  {
    id: "1",
    time: "4:30 AM",
    title: "Mangala Arati",
    description: "Morning worship ceremony with beautiful prayers and offerings to the deities",
    location: "Main Temple Hall",
    category: "prayer"
  },
  {
    id: "2",
    time: "7:00 AM",
    title: "Guru Puja",
    description: "Daily worship of the spiritual master with devotional songs",
    location: "Main Temple Hall", 
    category: "prayer"
  },
  {
    id: "3",
    time: "8:00 AM",
    title: "Srimad Bhagavatam Class",
    description: "Daily spiritual discourse on the pastimes and teachings of Lord Krishna",
    location: "Lecture Hall",
    category: "class"
  },
  {
    id: "4",
    time: "12:30 PM",
    title: "Raj Bhoga Arati",
    description: "Midday worship ceremony with elaborate food offerings",
    location: "Main Temple Hall",
    category: "prayer"
  },
  {
    id: "5",
    time: "7:00 PM",
    title: "Sandhya Arati", 
    description: "Evening worship with kirtan and community participation",
    location: "Main Temple Hall",
    category: "prayer"
  },
  {
    id: "6",
    time: "8:30 PM",
    title: "Bhagavad Gita Class",
    description: "Weekly study of Lord Krishna's teachings to Arjuna on the battlefield",
    location: "Lecture Hall",
    category: "class"
  }
];

export default function DailySchedule() {
  const [, setLocation] = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ScheduleItem | null>(null);
  const [isJoined, setIsJoined] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleJoinProgram = (programId: string) => {
    const program = dailySchedule.find(p => p.id === programId);
    if (program) {
      setSelectedProgram(program);
      setIsDialogOpen(true);
      setIsJoined(false);
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  const handleViewFullSchedule = () => {
    setLocation('/schedule');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoined(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProgram(null);
    setIsJoined(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "prayer": return "bg-primary/10 text-primary";
      case "class": return "bg-accent/10 text-accent-foreground"; 
      case "service": return "bg-secondary text-secondary-foreground";
      case "festival": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "prayer": return "Prayer";
      case "class": return "Class";
      case "service": return "Service";
      case "festival": return "Festival";
      default: return "Program";
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Daily Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join our daily spiritual programs and experience the rhythm of devotional life. 
            All programs are open to everyone, regardless of background or experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Schedule List */}
          <div className="lg:col-span-2 space-y-4">
            {dailySchedule.map((item, index) => (
              <Card key={item.id} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-primary/10 text-primary rounded-lg px-3 py-2 min-w-[80px]">
                        <Clock className="h-4 w-4 mx-auto mb-1" />
                        <div className="text-sm font-medium">{item.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <Badge className={getCategoryColor(item.category)}>
                            {getCategoryLabel(item.category)}
                          </Badge>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleJoinProgram(item.id)}
                          data-testid={`button-join-${item.id}`}
                          className="hover-elevate"
                        >
                          Join
                        </Button>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-4">
              <Button
                onClick={handleViewFullSchedule}
                variant="outline"
                data-testid="button-view-full-schedule"
                className="hover-elevate"
              >
                <Calendar className="mr-2 h-4 w-4" />
                View Full Weekly Schedule
              </Button>
            </div>
          </div>

          {/* Temple Image & Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                <img 
                  src={templeImage} 
                  alt="ISKCON Temple" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif font-bold text-lg mb-1">Our Sacred Space</h3>
                  <p className="text-sm text-white/90">Visit us daily for spiritual nourishment</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">ISKCON Temple</div>
                      <div className="text-sm text-muted-foreground">
                        1234 Spiritual Road, Pune, Maharashtra
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">All Welcome</div>
                      <div className="text-sm text-muted-foreground">
                        No prior experience needed
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Join our loving community in daily worship, learning, and service. 
                      Experience the joy of Krishna consciousness in a peaceful, welcoming environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Join Program Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isJoined ? "Successfully Joined!" : `Join ${selectedProgram?.title}`}
            </DialogTitle>
            <DialogDescription>
              {isJoined 
                ? `You have joined ${selectedProgram?.title}. We will notify you via email and add you to the WhatsApp group.`
                : `Fill in your details to join this program. We'll send you reminders and updates.`
              }
            </DialogDescription>
          </DialogHeader>

          {!isJoined ? (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  data-testid="input-join-name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  data-testid="input-join-email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 98765 43210"
                  data-testid="input-join-phone"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover-elevate"
                data-testid="button-join-submit"
              >
                Join Program
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-foreground font-medium mb-2" data-testid="text-joined-confirmation">Joined to the group</p>
              <p className="text-sm text-muted-foreground mb-4">
                We will notify you via email and add you to the WhatsApp group.
              </p>
              <Button onClick={handleCloseDialog} variant="outline" className="w-full" data-testid="button-close-dialog">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}