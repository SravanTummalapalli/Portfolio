import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { getCategoryColor, getProjectBySlug } from "./AllProjects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card p-8 text-center shadow-card">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-3 text-muted-foreground">The project you are looking for is unavailable right now.</p>
          <Link to="/projects" className="mt-6 inline-flex">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const overview = project.overview || project.description;
  const challenge = project.problem || `The main challenge was turning ${project.title.toLowerCase()} into a clear and reliable solution that could be understood and applied in practice.`;
  const approach = project.solution || `The approach focused on cleaning the data, identifying the most relevant patterns, and building a workflow that balanced accuracy, interpretability, and usability.`;
  const outcome = project.outcome || `The outcome highlights a practical and reusable implementation that can serve as a strong foundation for further experimentation or deployment.`;
  const highlights = project.highlights || [
    "Built a strong end-to-end workflow for the problem domain.",
    "Used practical modeling and analysis to draw meaningful conclusions.",
    "Created a solution that is easy to understand and extend."
  ];
  const snippet = project.codeSnippet || {
    language: "python",
    code: `# Example workflow for ${project.title}\nimport pandas as pd\n\n# Clean, analyze, and model the data` 
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_24%),#0f1117] text-foreground">
      <div className="border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Link to="/projects">
              <Button variant="outline" size="sm" className="rounded-full border-white/15 bg-white/5 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Project Showcase</p>
              <h1 className="text-3xl font-semibold text-white">{project.title}</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.githubUrl && project.githubUrl !== "N/A" && (
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 hover:bg-white/10">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && project.liveUrl !== "N/A" && (
              <Button asChild className="rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:px-6">
        <div className="mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={`${getCategoryColor(project.category)} border-0`}>{project.category}</Badge>
                <Badge variant="outline" className="border-white/15 bg-white/5 text-white/80">Immersive Case Study</Badge>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Where ideas become a working experience.</h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">{overview}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.slice(0, 6).map((tech, index) => (
                  <span key={index} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-primary/20 via-slate-950/80 to-secondary/20 p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-slate-950/70 p-4">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
                  <span>System Overview</span>
                  <span>Live Preview</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[32, 54, 72, 46, 80, 60].map((bar, index) => (
                    <div key={index} className="flex items-end rounded-lg bg-white/5 p-2">
                      <div className="w-full rounded-md bg-gradient-to-t from-primary to-secondary" style={{ height: `${bar}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                  {project.title}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <Card className="border-white/10 bg-white/7 shadow-2xl shadow-black/15 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Challenge & Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p><span className="font-semibold text-white">Challenge:</span> {challenge}</p>
                <p><span className="font-semibold text-white">Approach:</span> {approach}</p>
                <p><span className="font-semibold text-white">Outcome:</span> {outcome}</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/7 shadow-2xl shadow-black/15 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">What made this special</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        <span className="font-medium text-white">Insight {index + 1}</span>
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-white/10 bg-white/7 shadow-2xl shadow-black/15 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-white/10 bg-white/5 text-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/7 shadow-2xl shadow-black/15 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Code Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-200">
                  <code>{snippet.code}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
