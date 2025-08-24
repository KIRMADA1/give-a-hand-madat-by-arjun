import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Clock, MapPin, AlertCircle, Heart } from "lucide-react";

const Helpline = () => {
  const [emergencyForm, setEmergencyForm] = useState({
    name: "",
    contact: "",
    location: "",
    emergency: "",
    details: "",
  });
  const { toast } = useToast();

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Emergency Request Submitted",
      description: "Our team will contact you within 15 minutes. Stay safe!",
    });
    setEmergencyForm({
      name: "",
      contact: "",
      location: "",
      emergency: "",
      details: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEmergencyForm({
      ...emergencyForm,
      [e.target.name]: e.target.value,
    });
  };

  const emergencyTypes = [
    "Food Emergency",
    "Medical Emergency",
    "Shelter Emergency",
    "Child Safety",
    "Elder Care",
    "Natural Disaster",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            24/7 Helpline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help whenever you need us. Get immediate assistance or request emergency pickup services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Emergency Contact Section */}
          <div className="space-y-6">
            {/* Direct Call Card */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-red-700">
                  <AlertCircle className="w-6 h-6" />
                  Emergency Helpline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For immediate assistance in case of emergencies
                </p>
                <Button 
                  variant="destructive" 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => window.open("tel:+1555123911")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency: +1 (555) 123-911
                </Button>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Available 24/7 - Response time: &lt; 5 minutes
                </div>
              </CardContent>
            </Card>

            {/* Regular Helpline Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700">
                  <Phone className="w-6 h-6" />
                  General Helpline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For general inquiries and donation support
                </p>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => window.open("tel:+15551234567")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +1 (555) 123-4567
                </Button>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Mon-Fri: 9 AM - 6 PM | Sat-Sun: 10 AM - 4 PM
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-700">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Chat with our support team on WhatsApp
                </p>
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => window.open("https://wa.me/15551234567?text=Hi, I need help with MADAT platform")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Response time: Usually within 30 minutes
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Pickup Request Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Emergency Pickup Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmergencySubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={emergencyForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    value={emergencyForm.contact}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={emergencyForm.location}
                    onChange={handleInputChange}
                    placeholder="Enter detailed address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="emergency">Emergency Type *</Label>
                  <select
                    id="emergency"
                    name="emergency"
                    value={emergencyForm.emergency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select emergency type</option>
                    {emergencyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="details">Details *</Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={emergencyForm.details}
                    onChange={handleInputChange}
                    placeholder="Describe the emergency situation and what help you need"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" variant="destructive" size="lg">
                  Submit Emergency Request
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-warning" />
                  Important Information
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Emergency requests are processed within 15 minutes</li>
                  <li>• Our team will call you to confirm details</li>
                  <li>• Pickup will be arranged as soon as possible</li>
                  <li>• For life-threatening emergencies, call 911 first</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Our emergency helpline is available round the clock</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-muted-foreground">We provide support across all major cities in the country</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground">Trained professionals ready to help in any situation</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Helpline;