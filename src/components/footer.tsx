import { GithubIcon, LinkedinIcon, Mail, Heart, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GithubIcon,
      url: "https://github.com/SravanTummalapalli",
      label: "GitHub"
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/siva-ram-sravan-tummalapalli-272009157/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:sravan.tummalapalli@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-gradient-primary mb-4">
                Siva Ram Sravan Tummalapalli
              </h3>
              <p className="text-muted-foreground mb-4">
                Data Scientist passionate about solving real-world problems with AI and machine learning.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover-glow transition-smooth hover-scale"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Let's Connect
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 sravantummalapalli@gmail.com</p>
                <p>📍 Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Made by Sravan Tummalapalli</span>
              </div>
              
              <div className="text-muted-foreground text-sm">
                © {currentYear} All rights reserved
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-primary rounded-full opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;