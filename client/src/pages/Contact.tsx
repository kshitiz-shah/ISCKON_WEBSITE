import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
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
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We'd love to hear from you. Reach out with any questions or to plan your visit
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your name"
                          data-testid="input-name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                          data-testid="input-email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+91 98765 43210"
                          data-testid="input-phone"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          required
                          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="How can we help?"
                          data-testid="input-subject"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tell us more about your inquiry..."
                          data-testid="input-message"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover-elevate"
                        data-testid="button-submit-contact"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                        <p className="text-muted-foreground">
                          ISKCON Temple<br />
                          1234 Spiritual Road<br />
                          Koregaon Park<br />
                          Pune, Maharashtra 411001<br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                        <p className="text-muted-foreground mb-2">
                          Temple Office: +91 98765 43210<br />
                          Guest House: +91 98765 43211<br />
                          Book Store: +91 98765 43212
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Available: 9:00 AM - 6:00 PM (Mon-Sat)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                        <p className="text-muted-foreground">
                          General Inquiries: info@iskconpune.org<br />
                          Programs: programs@iskconpune.org<br />
                          Donations: donate@iskconpune.org
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Temple Hours</h3>
                        <p className="text-muted-foreground">
                          Morning Darshan: 4:30 AM - 1:00 PM<br />
                          Evening Darshan: 4:00 PM - 9:00 PM<br />
                          Open every day of the year
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('Facebook')}
                        data-testid="button-facebook"
                        className="hover-elevate"
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('Instagram')}
                        data-testid="button-instagram"
                        className="hover-elevate"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('Youtube')}
                        data-testid="button-youtube"
                        className="hover-elevate"
                      >
                        <Youtube className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('Twitter')}
                        data-testid="button-twitter"
                        className="hover-elevate"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
              Find Us on the Map
            </h2>
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Map integration would be displayed here
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