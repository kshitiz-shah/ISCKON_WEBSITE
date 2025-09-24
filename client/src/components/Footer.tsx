import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} social media clicked`);
  };

  const handleContactClick = (type: string) => {
    console.log(`Contact ${type} clicked`);
  };

  const handleLinkClick = (section: string) => {
    console.log(`Footer link clicked: ${section}`);
  };

  const handleNewsletterSignup = () => {
    console.log('Newsletter signup clicked');
  };

  return (
    <footer className="bg-card border-t border-card-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About ISKCON */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">ॐ</span>
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-primary">ISKCON</div>
                <div className="text-xs text-muted-foreground">Pune</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Dedicated to spreading Krishna consciousness through authentic spiritual teachings, 
              community service, and devotional practice.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('Facebook')}
                data-testid="button-facebook"
                className="hover-elevate"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('Instagram')}
                data-testid="button-instagram"
                className="hover-elevate"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('Youtube')}
                data-testid="button-youtube"
                className="hover-elevate"
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('Twitter')}
                data-testid="button-twitter"
                className="hover-elevate"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About ISKCON
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('philosophy')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('programs')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('events')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Events & Festivals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('books')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sacred Books
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('prasadam')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Daily Prasadam
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('accommodation')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Guest House
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('counseling')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Spiritual Counseling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('education')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Vedic Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('volunteer')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Volunteer
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleContactClick('address')}
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                data-testid="button-address"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>1234 Spiritual Road, Koregaon Park, Pune, Maharashtra 411001</span>
              </button>
              
              <button
                onClick={() => handleContactClick('phone')}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                data-testid="button-phone"
              >
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </button>
              
              <button
                onClick={() => handleContactClick('email')}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                data-testid="button-email"
              >
                <Mail className="h-4 w-4" />
                <span>info@iskconpune.org</span>
              </button>
              
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Temple Hours:</div>
                  <div className="text-xs">4:30 AM - 9:00 PM Daily</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground mb-2 text-sm">Stay Connected</h4>
              <Button
                onClick={handleNewsletterSignup}
                variant="outline"
                size="sm"
                data-testid="button-newsletter"
                className="w-full hover-elevate"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 ISKCON Pune. All rights reserved.
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => handleLinkClick('privacy')}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleLinkClick('terms')}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleLinkClick('sitemap')}
                className="hover:text-primary transition-colors"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}