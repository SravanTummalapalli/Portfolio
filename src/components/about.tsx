import { Card } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import profilePhoto from "../assets/profile-photo.jpg";

const About = () => {
  const journey = [
    {
      year: "2021",
      title: "Started Data Science Journey",
      Company: "Applied AI Course",
      description: "Began and completed the Applied Machine Learning course on Applied AI Course"
    },
    {
      year: "2022",
      title: "Software Engineer",
      Company: "SageIT",
      description: "Gained industry experience while transitioning to tech"
    },
  ];

  const interests = [
    "python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "Data Visualization",
    "Data Analysis",
    "Data Science",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning", 
    "Data Engineering",
    "Natural Language Processing",
    "Tableau",
    "Power BI",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming data into actionable insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center mb-8 min-h-[200px]">
                <Avatar className="w-48 h-48 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                  <AvatarImage src={profilePhoto} alt="Sravan Tummalapalli" className="object-cover" />
                  <AvatarFallback className="text-3xl font-bold bg-gradient-primary text-primary-foreground">
                    ST
                  </AvatarFallback>
                </Avatar>
              </div>
              <Card className="glass shadow-card p-8 hover-glow transition-smooth">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  I'm a Data Scientist with <span className="text-primary font-semibold">3+ years of experience</span> in building 
                  ML/DL solutions for domains like finance, retail, and healthcare. I specialize in 
                  <span className="text-accent font-semibold"> data storytelling</span>, 
                  <span className="text-secondary font-semibold"> model development</span>, and 
                  <span className="text-primary font-semibold"> production deployment</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/90">
                  My journey from a Process Associate to a Data Scientist has given me a unique perspective 
                  on solving real-world business problems with data-driven approaches. I'm passionate about 
                  leveraging cutting-edge AI technologies to create meaningful impact.
                </p>
              </Card>

              {/* Interests */}
              <Card className="glass shadow-card p-6 hover-glow transition-smooth">
                <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                  Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <span 
                      key={interest}
                      className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover-scale transition-smooth"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Journey Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
                My Journey
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-secondary"></div>
                
                {journey.map((item, index) => (
                  <div key={index} className="relative flex items-start mb-8 last:mb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background glow-primary"></div>
                    
                    {/* Content */}
                    <div className="ml-16">
                      <Card className="glass shadow-card p-6 hover-glow transition-smooth">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-2xl font-bold text-primary">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.Company}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;