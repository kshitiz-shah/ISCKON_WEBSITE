import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DailySchedule from "@/components/DailySchedule";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Info } from "lucide-react";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Daily Schedule
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us for our daily spiritual programs and experience the rhythm of devotional life
              </p>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-8 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-accent-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Visitor Information
                    </h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• All programs are free and open to everyone</li>
                      <li>• No prior experience or registration required</li>
                      <li>• Modest dress appreciated (covering shoulders and knees)</li>
                      <li>• Prasadam (sanctified vegetarian food) is served after evening programs</li>
                      <li>• Please arrive 10-15 minutes early for your first visit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Daily Schedule Component */}
        <DailySchedule />

        {/* Weekly Highlights */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
              Weekly Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        Sunday Feast Program
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Time:</strong> 5:00 PM - 9:00 PM
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Our most popular weekly program featuring spiritual discourse, ecstatic kirtan, 
                        deity darshan, and a sumptuous vegetarian feast. Perfect for families and 
                        first-time visitors.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Program includes:</strong> Philosophy class, Group kirtan, Arati ceremony, 
                        Prasadam feast
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        Saturday Youth Program
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Time:</strong> 6:00 PM - 8:30 PM
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Dynamic program designed for young adults (ages 18-35) with interactive 
                        discussions, devotional activities, and social connection. Build lasting 
                        friendships with like-minded spiritual seekers.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Activities:</strong> Group discussions, Kirtan, Games, Prasadam
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Temple Timings */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
              Temple Timings
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Temple Darshan</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Morning:</span>
                        <span className="font-medium">4:30 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening:</span>
                        <span className="font-medium">4:00 PM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Book Store</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Daily:</span>
                        <span className="font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">9:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Closed:</strong> No closure days - Temple is open every day of the year
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}