import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, ArrowRight, ExternalLink, Eye } from "lucide-react";
import { notes } from "../pages/AllNotes";
import projects from "./projects";

const Notes = () => {
  // Featured notes (first 6)
  const featuredNotes = notes.slice(0, 6);

  return (
    <section id="notes" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">
                Cheat Notes
              </h2>
            </div>
            <p className="text-foreground/70 max-w-2xl">
              Quick reference guides and cheat sheets I've created for various technologies and concepts
            </p>
          </div>
        </div>

        {/* Featured Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredNotes.map((note, index) => (
            <Card
              key={index}
              className="group glass shadow-card p-6 hover-glow transition-smooth flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {note.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit mt-2">
                  {note.category}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="mb-4 line-clamp-3 flex-1">
                  {note.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {note.tags.slice(0, 2).map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {note.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{note.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <a href={note.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button variant="outline" size="sm" className="btn-neural-outline w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Note
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button size="lg" className="px-8" asChild>
            <Link to="/notes">
              <Eye className="w-4 h-4 mr-2" />
              View All Notes ({notes.length})
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Notes;
