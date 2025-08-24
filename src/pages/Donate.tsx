import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
    location: "",
  });
  const { toast } = useToast();

  const categories = [
    {
      id: "food",
      title: "Food",
      emoji: "🍲",
      description: "Donate food items to feed the hungry",
      color: "bg-gradient-to-br from-orange-100 to-red-100 border-orange-200"
    },
    {
      id: "clothes",
      title: "Clothes",
      emoji: "👕",
      description: "Donate clothes to those in need",
      color: "bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200"
    },
    {
      id: "books",
      title: "Books",
      emoji: "📚",
      description: "Donate books to support education",
      color: "bg-gradient-to-br from-green-100 to-emerald-100 border-green-200"
    },
    {
      id: "toys",
      title: "Toys",
      emoji: "🧸",
      description: "Donate toys to bring joy to children",
      color: "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200"
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    toast({
      title: "Donation Submitted Successfully!",
      description: "Thank you for your generous donation. An NGO will contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      contact: "",
      description: "",
      location: "",
    });
    setSelectedCategory("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Make a Donation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a category and help us connect your donations with those who need them most.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className={`hover-lift cursor-pointer transition-all duration-300 ${category.color}`}>
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{category.emoji}</div>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => setSelectedCategory(category.title)}
                    >
                      Donate {category.title}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <span className="text-2xl">{category.emoji}</span>
                        Donate {category.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="contact">Contact Number</Label>
                        <Input
                          id="contact"
                          name="contact"
                          type="tel"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Item Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder={`Describe the ${category.title.toLowerCase()} items you want to donate`}
                          rows={3}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Pickup Location</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Enter your address for pickup"
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" variant="default">
                        Submit Donation
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-card rounded-xl p-8 shadow-soft">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Category</h3>
              <p className="text-muted-foreground">Select what you want to donate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Fill Details</h3>
              <p className="text-muted-foreground">Provide item details and location</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Get Contacted</h3>
              <p className="text-muted-foreground">NGO will arrange pickup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;