import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/data/contactData";
import { ContactInfoCard } from "@/components/ui/ContactInfoCard";
import { ContactForm } from "@/components/ui/ContactForm";

interface ContactProps {
  headingLevel?: "h1" | "h2";
}

const Contact = ({ headingLevel = "h2" }: ContactProps) => {
  const Heading = headingLevel;
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          {/* Main page heading for Contact */}
          <Heading className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Work With Us?</span>
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us more about your project requirements and get a detailed
            quote from our engineering experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Get A Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you
                  within 24 hours. We will contact you via mail for further
                  discussions.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} info={info} />
            ))}

            {/* Global Reach */}
            <Card className="shadow-card bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                <p className="text-primary-foreground/90 mb-4">
                  We serve customers in over 15 countries including USA, Europe
                  & Middle East
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
