import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Book, Users, Globe } from "lucide-react";
import communityImage from "@assets/generated_images/Hindu_devotees_spiritual_ceremony_68859b55.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                About ISKCON Pune
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                International Society for Krishna Consciousness - Spreading the timeless wisdom of Vedic culture
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ISKCON Pune is dedicated to propagating the teachings of Lord Krishna as found in the 
                  Bhagavad-gita and Srimad-Bhagavatam. We strive to create a spiritual community where 
                  people can learn and practice the science of Krishna consciousness.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, ISKCON has grown 
                  into a worldwide movement with centers in major cities across the globe. Our Pune 
                  center serves as a beacon of spiritual light for the local community and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through daily programs, festivals, prasadam distribution, and educational initiatives, 
                  we aim to help people discover their eternal spiritual nature and develop love for God.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={communityImage} 
                  alt="ISKCON Community" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover-elevate">
                <CardContent className="pt-8 pb-6">
                  <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Devotion
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Cultivating pure love and devotion to Lord Krishna through bhakti yoga
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-elevate">
                <CardContent className="pt-8 pb-6">
                  <Book className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Knowledge
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Sharing Vedic wisdom and spiritual knowledge through authentic scriptures
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-elevate">
                <CardContent className="pt-8 pb-6">
                  <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Community
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Building a loving spiritual family dedicated to service and growth
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-elevate">
                <CardContent className="pt-8 pb-6">
                  <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Service
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Serving humanity through prasadam distribution and spiritual education
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
              Our History
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Foundation of ISKCON
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ISKCON was founded in 1966 in New York City by His Divine Grace A.C. Bhaktivedanta 
                  Swami Prabhupada. At the age of 69, Srila Prabhupada traveled from India to America 
                  with the mission to spread Krishna consciousness throughout the world.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  ISKCON in Pune
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Pune center was established to serve the spiritual needs of the local community. 
                  Over the years, it has grown into a vibrant hub of spiritual activities, attracting 
                  thousands of devotees and visitors who come to experience Krishna consciousness.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Today's Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue Srila Prabhupada's mission by conducting daily worship, classes, 
                  festivals, and outreach programs. We distribute spiritual books, serve prasadam, 
                  and provide a welcoming space for anyone seeking spiritual guidance and community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}