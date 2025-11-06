import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Building, Book, Utensils, Users, Gift, CreditCard } from "lucide-react";

interface DonationCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  suggested: number[];
}

//todo: remove mock functionality - replace with real data
const donationCategories: DonationCategory[] = [
  {
    id: "temple",
    icon: <Building className="h-6 w-6" />,
    title: "Temple Construction",
    description: "Support the expansion and beautification of our sacred temple space",
    suggested: [500, 1000, 2500, 5000]
  },
  {
    id: "prasadam",
    icon: <Utensils className="h-6 w-6" />,
    title: "Daily Prasadam",
    description: "Sponsor meals for devotees and visitors to experience Krishna's mercy",
    suggested: [100, 250, 500, 1000]
  },
  {
    id: "books",
    icon: <Book className="h-6 w-6" />,
    title: "Book Distribution",
    description: "Help spread Krishna consciousness through sacred literature",
    suggested: [200, 500, 1000, 2000]
  },
  {
    id: "general",
    icon: <Heart className="h-6 w-6" />,
    title: "General Donation",
    description: "Support our overall mission and daily temple operations",
    suggested: [100, 500, 1000, 2500]
  }
];

export default function DonationSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleCategorySelect = (categoryId: string) => {
    console.log(`Donation category selected: ${categoryId}`);
    setSelectedCategory(categoryId);
    setSelectedAmount(null);
    setCustomAmount("");
  };

  const handleAmountSelect = (amount: number) => {
    console.log(`Donation amount selected: ${amount}`);
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    console.log(`Donate clicked - Category: ${selectedCategory}, Amount: ${amount}`);
  };

  const getCurrentCategory = () => {
    return donationCategories.find(cat => cat.id === selectedCategory);
  };

  const isValidAmount = () => {
    return selectedAmount || (customAmount && parseInt(customAmount) > 0);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-accent/5" data-donate-section>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Make a Donation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your generous contribution helps us continue our mission of spreading Krishna consciousness 
            and serving the spiritual needs of our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Choose a Cause
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {donationCategories.map((category) => (
                <Card 
                  key={category.id} 
                  className={`cursor-pointer transition-all hover-elevate ${
                    selectedCategory === category.id 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:bg-muted/30'
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                  data-testid={`card-donation-${category.id}`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2 rounded-md ${
                        selectedCategory === category.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Your Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {getCurrentCategory() && (
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {getCurrentCategory()?.title}
                    </Badge>
                    
                    {/* Suggested Amounts */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {getCurrentCategory()?.suggested.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAmountSelect(amount)}
                            data-testid={`button-amount-${amount}`}
                            className="hover-elevate"
                          >
                            ₹{amount.toLocaleString()}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Amount */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Or Enter Custom Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          placeholder="Enter amount"
                          className="w-full pl-8 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          data-testid="input-custom-amount"
                        />
                      </div>
                    </div>

                    {/* Donate Button */}
                    <Button
                      onClick={handleDonate}
                      disabled={!isValidAmount()}
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover-elevate"
                      data-testid="button-donate-submit"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Donate Now
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your donation is secure and helps support our spiritual mission
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 text-center bg-card rounded-lg p-6 border border-card-border">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
            Your Impact Makes a Difference
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">
                Supporting <strong>300+ devotees</strong> in their spiritual journey
              </p>
            </div>
            <div>
              <Utensils className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">
                Providing <strong>1000+ meals</strong> monthly as prasadam
              </p>
            </div>
            <div>
              <Book className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">
                Distributing <strong>500+ books</strong> spreading Krishna consciousness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}