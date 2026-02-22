import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, Github, ExternalLink, Search } from "lucide-react";

export const notes = [
  {
    title: "Covariance Vs Correlation Coefficients and their Significance",
    description: "A concise yet in-depth cheat sheet explaining covariance and correlation coefficients, their mathematical intuition, differences, interpretation, limitations, and real-world significance in statistics and data science.",
    category: "Statistics",
    tags: ["Covariance", "Correlation", "Pearson Correlation", "Statistical Measures", "Feature Relationship", "Data Analysis", "Statistics Basics"],
    content: "Explanation of covariance and correlation coefficients, including formulas, interpretation of sign and magnitude, key differences, practical examples, use cases in data science, and when to use each measure.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Covariance_Vs_Correlation_Coefficients_and_their_Significance.ipynb",
  },
  {
    title: "Log-Normal Distribution and Its Significance",
    description: "A concise statistical note explaining the Log-Normal distribution, its definition, characteristics, right-skewed behavior, mathematical intuition, and visualization using Python. Useful for understanding real-world phenomena like income, stock prices, and biological measurements.",
    category: "Statistics",
    tags: ["Log-Normal Distribution", "Probability Distribution", "Right-Skewed Distribution", "Statistics Basics", "Continuous Random Variables", "Data Science", "Python Visualization"],
    content: "Introduction to the Log-Normal distribution, explanation of its heavy-tailed and right-skewed nature, relationship with the normal distribution, mathematical formulation of the PDF, and Python code for generating and visualizing the distribution using NumPy and Matplotlib.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Log-Normal%20Distribution.ipynb",
  },
  {
    title: "Normal or Gaussian Distribution in Statistics",
    description: "A beginner-friendly explanation of the Normal (Gaussian) distribution, covering its bell-shaped curve, symmetry around the mean, key properties, and why it is fundamental in statistics and data science. Includes intuitive explanations and visual illustrations.",
    category: "Statistics",
    tags: ["Normal Distribution", "Gaussian Distribution", "Probability Distribution", "Bell Curve", "Statistics Basics", "Data Science Foundations", "Python"],
    content: "Explanation of the Normal (Gaussian) distribution, its bell-shaped and symmetric nature, importance in real-world data, role of mean and standard deviation, probability behavior across the curve, and visual examples to build strong statistical intuition.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Normal%20or%20Gaussian%20Distribution%20in%20Statistics.ipynb",
  },
  {
    title: "Quantiles",
    description: "A clear and intuitive explanation of quantiles, including percentiles, quartiles, and their role in understanding data distribution. This note helps build intuition on how data is divided into equal parts and why quantiles are crucial in exploratory data analysis.",
    category: "Statistics",
    tags: ["Quantiles", "Percentiles", "Quartiles", "Exploratory Data Analysis", "Statistics Basics", "Data Distribution", "Data Analysis"],
    content: "Explanation of quantiles and their types such as percentiles and quartiles, how they divide data into equal parts, interpretation of Q1, Q2 (median), and Q3, and their importance in summarizing data distribution and detecting spread and skewness.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Quantiles.ipynb",
  },
  {
    title: "Introduction to Statistics for Data Analysis",
    description: "A foundational overview of statistics covering core concepts such as data types, descriptive and inferential statistics, measures of central tendency, variability, and the role of statistics in data analysis and decision-making.",
    category: "Statistics",
    tags: ["Statistics Basics", "Descriptive Statistics", "Inferential Statistics", "Data Analysis", "Mean Median Mode", "Variance and Standard Deviation", "Data Science Foundations"],
    content: "Introduction to statistics with explanations of key concepts including types of data, descriptive vs inferential statistics, measures of central tendency, measures of dispersion, and why statistics is essential for analyzing and interpreting data.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Statistics.ipynb",
  },
  {
    title: "Uniform Distribution in Statistics",
    description: "An intuitive explanation of the Uniform distribution, where all outcomes have equal probability. This note covers its definition, properties, probability density function, and practical understanding through simple examples and visualizations.",
    category: "Statistics",
    tags: ["Uniform Distribution", "Probability Distribution", "Continuous Distribution", "Statistics Basics", "Equal Probability", "Data Science Foundations"],
    content: "Explanation of the Uniform distribution, its assumption of equal likelihood for all values within a given range, mathematical formulation of the probability density function, key properties, and visual illustrations to build intuition.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Uniform_distribution.ipynb",
  },
  {
    title: "Z-Test for Proportions in Statistics",
    description: "A practical explanation of the Z-test for proportions, covering its purpose, assumptions, hypothesis formulation, test statistic, and decision-making using p-values. Useful for comparing population proportions in statistical inference.",
    category: "Statistics",
    tags: ["Z-Test", "Proportion Test", "Hypothesis Testing", "Inferential Statistics", "Statistical Significance", "P-Value", "Data Analysis"],
    content: "Explanation of the Z-test for proportions including null and alternative hypotheses, assumptions, formula for the test statistic, interpretation of p-values, and step-by-step reasoning for deciding whether to reject the null hypothesis.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Z-test%20for%20Proportions.ipynb"
  },
  {
    title: "Z-Test in Statistics",
    description: "A clear explanation of the Z-test used for hypothesis testing when population variance is known or sample size is large. Covers assumptions, hypothesis setup, test statistic calculation, and decision-making using critical values and p-values.",
    category: "Statistics",
    tags: ["Z-Test", "Hypothesis Testing", "Inferential Statistics", "Statistical Significance", "P-Value", "Large Sample Test", "Data Science Basics"],
    content: "Explanation of the Z-test for population means, including assumptions, null and alternative hypotheses, formula for the Z-statistic, interpretation using p-values or critical regions, and practical understanding for statistical decision-making.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/Z-test.ipynb"
  },
  {
    title: "Skewness and Kurtosis in Statistics",
    description: "An intuitive explanation of skewness and kurtosis, focusing on data distribution shape, asymmetry, and tail behavior. This note helps understand how data deviates from normality and why these measures matter in exploratory data analysis.",
    category: "Statistics",
    tags: ["Skewness", "Kurtosis", "Data Distribution", "Exploratory Data Analysis", "Statistics Basics", "Normality", "Data Science Foundations"],
    content: "Explanation of skewness and kurtosis, interpretation of positive and negative skew, concepts of heavy and light tails, comparison with normal distribution, and practical understanding of why these measures are important in data analysis.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/skewness_kurtosis.ipynb"
  },
  {
    title: "T-Test in Statistics",
    description: "A clear and practical explanation of the t-test, used for hypothesis testing when sample size is small and population variance is unknown. Covers assumptions, types of t-tests, and interpretation of results using p-values.",
    category: "Statistics",
    tags: ["T-Test", "Hypothesis Testing", "Inferential Statistics", "Small Sample Test", "Statistical Significance", "P-Value", "Data Analysis"],
    content: "Explanation of the t-test, including why it is used instead of the Z-test, assumptions behind the test, different types of t-tests (one-sample, two-sample, paired), and how to interpret test results for statistical decision-making.",
    url: "https://github.com/SravanTummalapalli/Statistics-Cheatcodes/blob/main/t-test.ipynb"
   },
   {
    title: "Simplified Attention Mechanism Explained",
    description: "A beginner-friendly explanation of the attention mechanism in deep learning, focusing on intuition rather than heavy math. This note breaks down how attention works, why it is needed, and how it helps models focus on relevant information.",
    category: "Deep Learning",
    tags: ["Attention Mechanism", "Deep Learning", "Neural Networks", "Sequence Models", "NLP Basics", "Transformer Foundations", "Machine Learning"],
    content: "Simplified explanation of the attention mechanism, covering the motivation behind attention, the concept of focusing on important inputs, basic working principles, and intuitive understanding useful for NLP and transformer-based models.",
    url: "https://github.com/SravanTummalapalli/LLM-Cheat-notes/blob/main/Attention-Mechanism/Simplified_Attention_Mechanism.ipynb"
},
{
    title: "Self-Attention Mechanism Explained",
    description: "A clear and intuitive explanation of the self-attention mechanism, showing how a model relates different elements within the same sequence. This note explains why self-attention is powerful and how it enables contextual understanding in modern deep learning models.",
    category: "Deep Learning",
    tags: ["Self-Attention", "Attention Mechanism", "Deep Learning", "Transformer Models", "NLP Fundamentals", "Sequence Modeling", "Machine Learning"],
    content: "Explanation of the self-attention mechanism, including how queries, keys, and values interact within a single sequence, why self-attention captures contextual relationships, and how it forms the foundation of transformer-based architectures.",
    url: "https://github.com/SravanTummalapalli/LLM-Cheat-notes/blob/main/Attention-Mechanism/Self_Attention_Mechanism.ipynb"
}
];

const AllNotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  // Get unique categories
  const categories = ["All", ...new Set(notes.map(note => note.category))];

  useEffect(() => {
    const filtered = notes.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || note.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredNotes(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-2">
              Cheat Notes
            </h1>
            <p className="text-foreground/70">
              Quick reference guides and cheat sheets for development
            </p>
          </div>
          <Link to="/">
            <Button variant="outline" size="icon" className="btn-neural-outline">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
            <Input
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="btn-neural-outline">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <Card
              key={index}
              className="group glass shadow-card p-6 hover-glow transition-smooth flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">
                      {note.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {note.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="mb-4 line-clamp-3">
                  {note.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {note.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-4 border-t">
                  <a href={note.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="btn-neural-outline w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Note
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70 text-lg">
              No notes found matching your criteria.
            </p>
          </div>
        )}

        {/* Results count */}
        <div className="mt-12 text-center text-foreground/70">
          <p>Showing {filteredNotes.length} of {notes.length} notes</p>
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
