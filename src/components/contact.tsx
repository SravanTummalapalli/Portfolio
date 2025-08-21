import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toasts";
import { Mail, MapPin, Send, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sravantummalapalli@gmail.com",
      link: "mailto:sravantummalapalli@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/siva-ram-sravan-tummalapalli-272009157/",
      color: "hover:text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/SravanTummalapalli",
      color: "hover:text-primary"
    },
    {
      icon: "medium",
      label: "Medium",
      url: "https://medium.com/@sravantummalapalli",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next data science project? Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass shadow-card p-8">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="mt-2 bg-muted/50 border-border focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="mt-2 bg-muted/50 border-border focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="mt-2 bg-muted/50 border-border focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-neural w-full"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="glass shadow-card p-8">
                <h3 className="text-2xl font-bold text-gradient-accent mb-8">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-primary transition-smooth font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass shadow-card p-8">
                <h3 className="text-xl font-bold text-gradient-primary mb-6">
                  Follow Me
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass rounded-full flex items-center justify-center hover-glow transition-smooth hover-scale ${social.color}`}
                    >
                      {social.icon === "medium" ? (
                        <svg className= "h-6 w-6 group-hover:scale-110 transition-transform" viewBox="0 0 1043.63 592.71" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d= "M588.67 296.31c0 163.67-131.98 296.3-294.33 296.3C131.98 592.61 0 459.98 0 296.31 0 132.65 131.98 0 294.34 0c162.35 0 294.33 132.65 294.33 296.31zM843.6 296.31c0 148.74-65.45 269.33-146.17 269.33-80.72 0-146.17-120.59-146.17-269.33 0-148.74 65.45-269.33 146.17-269.33 80.72 0 146.17 120.59 146.17 269.33zM1043.63 296.31c0 137.5-29.1 248.97-65.01 248.97-35.91 0-65.01-111.47-65.01-248.97 0-137.5 29.1-248.97 65.01-248.97 35.91 0 65.01 111.47 65.01 248.97z"/>
                          </g>
                        </svg>
                      ):(
                      <social.icon className="h-6 w-6" />
                      )}
                    </a>
                  ))}
                </div>

                {/* <div className="mt-8">
                  <Button 
                    variant="outline"
                    className="btn-neural-outline w-full"
                    onClick={() => {
                      toast({
                        title: "Resume Download",
                        description: "Resume download functionality to be implemented.",
                      });
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div> */}
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <img
              src= "https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark"
              alt= "Random Dev Quote"
              className="mx-auto mb-8"
            />
            <Card className="glass shadow-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient-accent mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you need data insights, ML solutions, or just want to chat about AI, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sravantummalapalli@gmail.com"
                  className="w-full sm:w-auto"
                >
                  <Button className="btn-neural">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;