import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    agreeToPrivacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToPrivacy) {
      toast({
        title: "Privacy Policy Required",
        description: "Please agree to the privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      agreeToPrivacy: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@ksvengineering.com",
      subtitle: "info@ksvengineering.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      subtitle: "24/7 Support Available"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "3600 sq ft Campus",
      subtitle: "Advanced Technical Facilities"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
      subtitle: "Emergency: 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Work With Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us more about your project requirements and get a detailed quote 
            from our engineering experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get A Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Your Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Company Name
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.agreeToPrivacy}
                      onCheckedChange={(checked) => handleInputChange("agreeToPrivacy", checked === true)}
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                      Yes, I am OK to receive further communication over my details shared here. 
                      Refer privacy policy for more info.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-professional"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-professional transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Global Reach */}
            <Card className="shadow-card bg-gradient-hero text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                <p className="text-primary-foreground/90 mb-4">
                  We serve customers in over 15 countries including USA, Europe & Middle East
                </p>
                <div className="text-3xl font-bold">15+ Countries</div>
                <div className="text-sm opacity-90">Worldwide Coverage</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;