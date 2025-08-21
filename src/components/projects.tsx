import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Github, ExternalLink, Eye } from "lucide-react";
import {projects} from "../pages/AllProjects"; // Assuming you have a data file with all projects

const Projects = () => {
  // Featured projects (first 6)
  const featuredProjects = [
    {
      title: "Predictive Equipment Failures using Sensor Data",
      description: "An industrial machine learning case study focused on predicting downhole equipment failures using sensor data. The notebook covers data preprocessing, feature engineering from time-series signals, and training machine learning models to classify potential failures. The project demonstrates predictive maintenance by reducing downtime and improving operational efficiency.",
      category: "Time Series / Predictive Maintenance",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Sensor Data Analysis", "Predictive Maintenance"],
      githubUrl: "https://github.com/SravanTummalapalli/Predictive-Equipment-Failures",
      liveUrl: "https://medium.com/@sravantummalapalli/conocophillips-predictive-equipment-failures-1c2c1913a6d8"
    },
    {
      title: "Facebook Friend Recommendation",
      description: "A graph-based machine learning project that implements a friend recommendation system similar to Facebook. The notebook leverages network analysis and link prediction techniques to recommend potential friends based on mutual connections, graph features, and similarity measures. It explores feature engineering on graph data, training models, and evaluating recommendation accuracy.",
      category: "Graph Machine Learning",
      technologies: ["Python", "NumPy", "Pandas", "NetworkX", "Scikit-learn", "Graph Analysis", "Link Prediction"],
      githubUrl: "https://github.com/SravanTummalapalli/Facebook-Friend-Recommendation",
      // liveUrl: "N/A"
    },
    {
      title: "Microsoft Malware Detection",
      description: "A machine learning project aimed at detecting malware in the Microsoft Malware dataset. The notebook includes data preprocessing, feature extraction, and model training using classification algorithms. It explores feature importance, evaluates models with metrics such as accuracy and F1-score, and demonstrates how ML can be applied in cybersecurity for threat detection.",
      category: "Cybersecurity / Machine Learning",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Classification"],
      githubUrl: "https://github.com/SravanTummalapalli/Microsoft-Malware-Detection",
      // liveUrl: "N/A"
    },
    {
      title: "Facebook Friend Recommendation",
      description: "A graph-based machine learning project that implements a friend recommendation system similar to Facebook. The notebook leverages network analysis and link prediction techniques to recommend potential friends based on mutual connections, graph features, and similarity measures. It explores feature engineering on graph data, training models, and evaluating recommendation accuracy.",
      category: "Graph Machine Learning",
      technologies: ["Python", "NumPy", "Pandas", "NetworkX", "Scikit-learn", "Graph Analysis", "Link Prediction"],
      githubUrl: "https://github.com/SravanTummalapalli/Facebook-Friend-Recommendation",
      // liveUrl: "N/A"
    },
    {
      title: "Marketing Campaign Analysis",
      description: "This project analyzes customer demographics and campaign data to evaluate the effectiveness of marketing strategies. It explores customer segmentation, purchasing behavior, and responses to campaigns. The notebook includes data cleaning, exploratory data analysis (EDA), and visualization to uncover key patterns. Machine learning models are applied to predict campaign responses, helping businesses optimize future campaigns and target the right audience.",
      category: "Data Analysis & Machine Learning",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "EDA", "Classification Models"],
      githubUrl: "https://github.com/SravanTummalapalli/Marketing-campaign",
      // liveUrl: "N/A"
    },
    {
      title: "Delhi Metro Network Analysis",
      description: "A graph analytics project that explores the Delhi Metro network using Python. The notebook leverages graph theory to analyze routes, shortest paths, centrality measures, and connectivity within the metro system. It applies NetworkX for visualization and computation, offering insights into the efficiency and structure of the metro network.",
      category: "Graph Analytics",
      technologies: ["Python", "Pandas", "NumPy", "NetworkX", "Matplotlib", "Graph Theory"],
      githubUrl: "https://github.com/SravanTummalapalli/Delhi-Metro-Network-Analysis",
      // liveUrl: "N/A"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Machine Learning": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Deep Learning": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "Data Analytics": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "Web Development": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      "Healthcare": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      "Computer Vision": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
      "Time Series": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      "Natural Language Processing": "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions across machine learning, data analytics, and web development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group glass shadow-card p-6 hover-glow transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getCategoryColor(project.category)} transition-colors duration-300`}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10 transition-colors duration-300" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button size="lg" className="px-8" asChild>
            <Link to="/projects">
              <Eye className="w-4 h-4 mr-2" />
              View All Projects ({projects.length})
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;