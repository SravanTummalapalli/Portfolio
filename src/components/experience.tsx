import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "SAGEIT INC.",
      location: "Hyderabad, India",
      period: "08/2022 - Present",
      type: "Full-time",
      description: "Software Engineer with 3+ years of expertise in Machine Learning and AI-driven enterprise integration platforms. Led development of SHIP-AI, an intelligent platform that automates migration of legacy integration systems (TIBCO 5x/6x) to modern platforms like MuleSoft and Boomi using advanced AI technologies. Skilled in LLM training and fine-tuning (Mistral 7B), Azure cloud architecture, and optimizing integration workflows through comprehensive DevOps practices. Proven track record of delivering scalable solutions that optimize enterprise workflows, including achieving 20% improvement in batch processing performance while maintaining high system reliability. Strong background in full-stack development and agile methodologies with demonstrated success in improving system performance and reducing processing times.",
      achievements: [
        "Enhanced Model Performance: Successfully trained and fine-tuned Mistral 7B using real-world scenario data, significantly improving model accuracy for integration platform code conversion",
        "Process Optimization: Achieved a 20% reduction in batch file processing time through strategic optimization initiatives",
        "AI Integration Excellence: Successfully integrated LLM copilot functionality that enhanced platform efficiency and system reliability",
        "Automated Workflow Creation: Developed sophisticated metadata generation and conversion processes for multiple integration platforms (MuleSoft, TIBCO, Boomi)",
        "Reliable Production Support: Maintained high system availability through proactive monitoring and rapid issue resolution during on-call support",
        "Cross-Platform Expertise: Successfully authored and optimized metadata across three major integration platforms, demonstrating versatility in enterprise integration technologies"
      ],
      technologies: ["Python", "MySQL", "React", "JavaScript", "HTML", "CSS", "Azure", "Git", "Docker"]
    },
    {
      title: "Intern Data Scientist",
      company: "Transpoze Labs.",
      location: "Hyderabad, India",
      period: "01/2022 - 06/2024",
      type: "Internship",
      description: "Intern Data Scientist with hands-on experience in developing an advanced license plate recognition system using WPOD-NET algorithm for accurate text extraction from vehicle license plates in both static images and dynamic video streams. Designed and fine-tuned deep learning models to detect and localize license plate regions across diverse visual environments with varying lighting conditions, angles, and backgrounds. Achieved high accuracy and robustness through extensive testing, optimization, and performance tuning, demonstrating practical expertise in computer vision and image processing applications.",
      achievements: [
        "Implemented WPOD-NET algorithm for automated license plate text extraction from images and video streams with high precision",
        "Designed and fine-tuned deep learning models for efficient license plate detection and localization across diverse visual environments",
        "Achieved superior accuracy and robustness in real-world scenarios through comprehensive testing, optimization, and performance tuning",
        "Demonstrated expertise in computer vision and image processing techniques with focus on practical automotive applications"
      ],
      technologies: [ "Python", "Power BI", "OpenCV", "TensorFlow", "Keras", "scikit-learn", "Git", "Docker", "Deep Learning", "Computer Vision"]
    }
  ];

  const achievements = [
    {
      title: "Applied Machine Learning Course",
      organization: "Applied AI Course",
      date: "2022",
      icon: "🎓",
      url: "https://www.appliedaicourse.com/certificate/9ab87b11b0"
    },
    {
      title: "Python Course: Mastering the Essentials",
      organization: "Scalar Academy",
      date: "2025",
      icon: "🏆",
      url: "https://moonshot.scaler.com/s/sl/hfGBT1A6-s?_gl=1*1lo9oxy*FPAU*MjMzOTAzNTIzLjE3NDYxNjE3Nzk.*_ga*MTc0MjY3MTQxNy4xNzQ2MTYxNzc4*_ga_53S71ZZG1X*MTc0NjE2MTc3OC4xLjEuMTc0NjE2MTgyNS4wLjAuMTE5NjkxOTMw"
    },
    // {
    //   title: "Best Process Improvement Award",
    //   organization: "Business Process Corp.",
    //   date: "2023",
    //   icon: "🌟"
    // },
    {
      title: "Complete Cyber Security Course for Beginners Using Kali O.S",
      organization: "Udemy",
      date: "2018",
      icon: "📊",
      url: "https://www.udemy.com/certificate/UC-N2DTAVTV/"
    }
  ];

  return (
    <section id="experience" className="py-20 neural-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">
              Experience & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on experience and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gradient-primary mb-8">
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="glass shadow-card p-8 hover-glow transition-smooth">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold mb-3 text-accent">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/90">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold mb-3 text-muted-foreground">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className="bg-muted/50 hover:bg-muted transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements Sidebar */}
            <div>
              <h3 className="text-2xl font-bold text-gradient-accent mb-8">
                Achievements
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="glass shadow-card p-6 hover-glow transition-smooth">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mb-1">
                          {achievement.organization}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {achievement.date}
                        </p>
                        {achievement.url && (
                          <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium">
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Stats
              <Card className="glass shadow-card p-6 mt-8">
                <h4 className="text-lg font-semibold text-gradient-primary mb-4">
                  Quick Stats
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "Years in Industry", value: "2+" },
                    { label: "Projects Delivered", value: "15+" },
                    { label: "Certifications", value: "4" },
                    { label: "Success Rate", value: "99.5%" }
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;