import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Eye } from "lucide-react";
import { ProjectCard, projects } from "../pages/AllProjects";

const Projects = () => {
  const featuredProjectTitles = [
    "Data Science Job Scout (AI Agent)",
    "AI News Briefing Agent",
    "Predictive Equipment Failures using Sensor Data",
    "Microsoft Malware Detection",
    "Facebook Friend Recommendation",
    "Delhi Metro Network Analysis"
  ];

  const featuredProjects = projects.filter((project) => featuredProjectTitles.includes(project.title));

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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
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