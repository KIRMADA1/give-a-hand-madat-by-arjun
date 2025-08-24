import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone, Mail, Users, Heart } from "lucide-react";

const NGOs = () => {
  // Mock NGO data
  const ngos = [
    {
      id: 1,
      name: "Hope Foundation",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviews: 156,
      focus: ["Food", "Education"],
      description: "Dedicated to providing food and education to underprivileged children.",
      contact: "+91 98765 43210",
      email: "info@hopefoundation.org",
      served: "10,000+",
      established: 2010
    },
    {
      id: 2,
      name: "Care & Share NGO",
      location: "Delhi, India",
      rating: 4.9,
      reviews: 203,
      focus: ["Clothes", "Healthcare"],
      description: "Working towards healthcare accessibility and clothing distribution.",
      contact: "+91 87654 32109",
      email: "contact@carenshare.org",
      served: "15,000+",
      established: 2008
    },
    {
      id: 3,
      name: "Bright Future Society",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      reviews: 89,
      focus: ["Books", "Education"],
      description: "Promoting literacy and education through book distribution programs.",
      contact: "+91 76543 21098",
      email: "hello@brightfuture.org",
      served: "8,000+",
      established: 2015
    },
    {
      id: 4,
      name: "Smile Foundation",
      location: "Chennai, Tamil Nadu",
      rating: 4.6,
      reviews: 127,
      focus: ["Toys", "Child Welfare"],
      description: "Bringing smiles to children through toys and recreational activities.",
      contact: "+91 65432 10987",
      email: "support@smilefoundation.org",
      served: "12,000+",
      established: 2012
    },
    {
      id: 5,
      name: "Green Earth Initiative",
      location: "Pune, Maharashtra",
      rating: 4.8,
      reviews: 94,
      focus: ["Environment", "Education"],
      description: "Environmental conservation and awareness through education.",
      contact: "+91 54321 09876",
      email: "info@greenearth.org",
      served: "6,000+",
      established: 2018
    },
    {
      id: 6,
      name: "Helping Hands Trust",
      location: "Hyderabad, Telangana",
      rating: 4.9,
      reviews: 178,
      focus: ["Food", "Healthcare"],
      description: "Comprehensive support including food distribution and medical aid.",
      contact: "+91 43210 98765",
      email: "connect@helpinghands.org",
      served: "20,000+",
      established: 2005
    }
  ];

  const getFocusColor = (focus: string) => {
    const colors: { [key: string]: string } = {
      "Food": "bg-orange-100 text-orange-800",
      "Clothes": "bg-blue-100 text-blue-800",
      "Books": "bg-green-100 text-green-800",
      "Toys": "bg-pink-100 text-pink-800",
      "Education": "bg-purple-100 text-purple-800",
      "Healthcare": "bg-red-100 text-red-800",
      "Environment": "bg-emerald-100 text-emerald-800",
      "Child Welfare": "bg-yellow-100 text-yellow-800"
    };
    return colors[focus] || "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Partner NGOs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover verified NGOs working tirelessly to make a difference. 
            Connect with organizations that align with your donation goals.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-card rounded-xl p-6 mb-12 shadow-soft">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{ngos.length}</div>
              <div className="text-sm text-muted-foreground">Verified NGOs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">15+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>

        {/* NGO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngos.map((ngo) => (
            <Card key={ngo.id} className="hover-lift h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{ngo.name}</CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{ngo.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(ngo.rating)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {ngo.rating} ({ngo.reviews} reviews)
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Focus Areas */}
                <div>
                  <div className="text-sm font-medium mb-2">Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {ngo.focus.map((area) => (
                      <Badge
                        key={area}
                        variant="secondary"
                        className={getFocusColor(area)}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">{ngo.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">{ngo.served}</div>
                      <div className="text-xs text-muted-foreground">Served</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <div>
                      <div className="text-sm font-medium">{ngo.established}</div>
                      <div className="text-xs text-muted-foreground">Established</div>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(`tel:${ngo.contact}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(`mailto:${ngo.email}`)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-primary rounded-xl p-8 text-primary-foreground">
          <h2 className="text-2xl font-bold mb-4">
            Want to List Your NGO?
          </h2>
          <p className="mb-6 opacity-90">
            Join our platform to connect with generous donors and expand your impact.
          </p>
          <Button variant="warm" size="lg">
            Register Your NGO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NGOs;