import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Globe, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of human kindness and empathy to create positive change."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger communities through collaborative efforts and shared responsibility."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Focused on creating measurable, lasting impact in the lives of those we serve."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making donation and help accessible to everyone, regardless of their background."
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Lives Impacted" },
    { number: "500+", label: "NGO Partners" },
    { number: "10,000+", label: "Donations Facilitated" },
    { number: "25+", label: "Cities Covered" }
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      description: "Passionate about social impact with 10+ years in nonprofit sector."
    },
    {
      name: "Priya Patel",
      role: "Director of Operations",
      description: "Expert in logistics and operations management for social causes."
    },
    {
      name: "Arun Kumar",
      role: "Technology Lead",
      description: "Building scalable tech solutions for social good."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About MADAT</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Making A Difference Through Donations - Connecting hearts, changing lives, building communities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                MADAT was born from a simple yet powerful idea: what if we could make donating as easy as ordering food online? 
                We believe that every person has something to give, and every act of kindness, no matter how small, can create ripples of positive change.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform bridges the gap between generous donors and verified NGOs, ensuring that help reaches those who need it most, when they need it most.
              </p>
              <div className="flex items-center gap-4 text-primary">
                <Lightbulb className="w-8 h-8" />
                <span className="text-xl font-semibold">Innovation for Good</span>
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-center">Why MADAT?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span>Verified and trusted NGO partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span>Simple and secure donation process</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span>Real-time tracking and certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span>24/7 support and emergency assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-card rounded-xl shadow-soft">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">The MADAT Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                MADAT began in 2024 when our founder, while volunteering at a local shelter, noticed how difficult it was for people to connect their desire to help with organizations that needed assistance. Despite living in a connected world, the process of donating was fragmented, time-consuming, and often unreliable.
              </p>
              <p className="mb-6">
                The idea was simple: create a platform that makes giving as easy as any other online transaction, while ensuring transparency, security, and real impact. We started with a small team of passionate individuals who believed that technology could amplify human generosity.
              </p>
              <p className="mb-6">
                Today, MADAT has grown into a nationwide platform, but our core mission remains the same: to make every act of giving count, to ensure no donation is too small, and to build a community where helping others is second nature.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold">Recognition</h4>
                <p className="text-muted-foreground">Winner of Social Impact Innovation Award 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-gradient-primary rounded-xl p-12 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to donate, volunteer, or partner with us, there are many ways to be part of the MADAT community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Donating
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;