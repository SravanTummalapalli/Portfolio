import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Cloud, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      category: "ML/DL Frameworks",
      icon: "🧠",
      skills: [
        { name: "scikit-learn", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 85 },
        { name: "XGBoost", level: 80 },
        { name: "Hugging Face", level: 75 }
      ]
    },
    {
      category: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MY SQL", level: 85 },
        { name: "Azure SQL", level: 80 },
        { name: "Cosmos DB", level: 58 }
      ]
    },
    {
      category: "Data Visualization",
      icon: "📊",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 88 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "🔧",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Azure", level: 80 },
        { name: "Jupyter", level: 95 }
      ]
    },
    {
      category: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Azure", level: 88 },
        { name: "GCP", level: 65 },
        { name: "AWS", level: 60 }
      ]
    },
    {
      category: "Data Libraries",
      icon: "📚",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Plotly", level: 85 },
        { name: "BeautifulSoup", level: 80 }
      ]
    }
  ];

  const certifications = [
    "Azure AI Fundamentals",
    "Coursera Machine Learning",
    "Data Science Specialization",
    "Deep Learning Specialization"
  ];

  return (
    <section id="skills" className="py-20 neural-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for data science and machine learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => (
              <Card key={category.category} className="glass shadow-card p-6 hover-glow transition-smooth">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-gradient-secondary">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient-accent mb-8">
              Certifications & Achievements
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <Badge 
                  key={cert}
                  variant="outline"
                  className="px-6 py-3 text-base border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
                >
                  🏆 {cert}
                </Badge>
              ))}
            </div>
          </div> */}

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: "Projects Completed", value: "15+" },
              { label: "ML Models Deployed", value: "8+" },
              { label: "Years Experience", value: "2+" },
              { label: "Technologies Mastered", value: "20+" }
            ].map((stat) => (
              <Card key={stat.label} className="glass shadow-card p-6 text-center hover-glow transition-smooth">
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;