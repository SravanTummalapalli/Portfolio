import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, Github, ExternalLink, Search } from "lucide-react";

export const projects = [
        {
            title: "Marketing Campaign Analysis",
            description: "This project analyzes customer demographics and campaign data to evaluate the effectiveness of marketing strategies. It explores customer segmentation, purchasing behavior, and responses to campaigns. The notebook includes data cleaning, exploratory data analysis (EDA), and visualization to uncover key patterns. Machine learning models are applied to predict campaign responses, helping businesses optimize future campaigns and target the right audience.",
            category: "Data Analysis & Machine Learning",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "EDA", "Classification Models"],
            githubUrl: "https://github.com/SravanTummalapalli/Marketing-campaign",
            // liveUrl: "N/A"
        },
        {
            title: "House Price Prediction",
            description: "A machine learning project to predict house prices based on multiple features such as area, number of bedrooms, bathrooms, location, and amenities. The notebook covers data preprocessing, exploratory data analysis (EDA), feature engineering, and training regression models. It evaluates performance using metrics like RMSE and R², showcasing how ML can be applied to real estate price forecasting.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Linear Regression", "Feature Engineering"],
            githubUrl: "https://github.com/SravanTummalapalli/House-Price-Prediction-Using-Flask",
            // liveUrl: "N/A"
        },
        {
            title: "Stock Market Analysis",
            description: "A financial data analysis project that explores stock market trends using historical stock price data. The notebook covers data preprocessing, visualization of stock performance, moving averages, and volatility analysis. It also applies predictive modeling techniques to forecast future stock prices and evaluate investment strategies.",
            category: "Financial Data Analysis",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Time Series Analysis"],
            githubUrl: "https://github.com/SravanTummalapalli/Stock-Market-Analysis-and-Time-Series-Forecasting-with-ARIMA",
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
            title: "Weather Forecasting using Python",
            description: "A data science project that predicts weather conditions using historical meteorological data. The notebook covers data preprocessing, feature engineering, and training machine learning models for forecasting temperature, humidity, and rainfall patterns. Visualizations are included to analyze trends and model performance.",
            category: "Time Series Forecasting",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Time Series Analysis"],
            githubUrl: "https://github.com/SravanTummalapalli/Weather-Forecasting-using-Python",
            // liveUrl: "N/A"
        },
        {
            title: "Delhi Metro Network Analysis",
            description: "A graph analytics project that explores the Delhi Metro network using Python. The notebook leverages graph theory to analyze routes, shortest paths, centrality measures, and connectivity within the metro system. It applies NetworkX for visualization and computation, offering insights into the efficiency and structure of the metro network.",
            category: "Graph Analytics",
            technologies: ["Python", "Pandas", "NumPy", "NetworkX", "Matplotlib", "Graph Theory"],
            githubUrl: "https://github.com/SravanTummalapalli/Delhi-Metro-Network-Analysis",
            // liveUrl: "N/A"
        },
        {
            title: "SQL Sample Queries",
            description: "A collection of SQL queries demonstrating fundamental to intermediate database operations. The notebook covers data retrieval, filtering, aggregation, joins, subqueries, and window functions. It serves as a practical reference for learning SQL concepts and applying them to real-world datasets.",
            category: "Database Management",
            technologies: ["SQL", "SQLite/MySQL/PostgreSQL", "Data Analysis"],
            githubUrl: "https://github.com/SravanTummalapalli/SQL-Queries-on-IMDB",
            // liveUrl: "N/A"
        },
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
            title: "Recommendation Systems with Truncated SVD and SGD",
            description: "A machine learning project implementing a recommendation system using matrix factorization techniques. The notebook applies Truncated Singular Value Decomposition (SVD) and Stochastic Gradient Descent (SGD) to predict user-item ratings. It demonstrates collaborative filtering, model training, and evaluation of prediction accuracy, highlighting how dimensionality reduction and optimization improve recommendation quality.",
            category: "Recommender Systems",
            technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matrix Factorization", "SVD", "SGD"],
            githubUrl: "https://github.com/SravanTummalapalli/Recommendation-Systems-and-Truncated-SVD-SGD-algorithm-to-predict-ratings",
            // liveUrl: "N/A"
        },
        {
            title: "Clustering on Graph Dataset",
            description: "A machine learning project focused on applying clustering techniques to graph-structured data. The notebook explores community detection and clustering algorithms to identify patterns and group nodes based on connectivity. It demonstrates data preprocessing, visualization of clusters, and evaluation of graph-based clustering performance.",
            category: "Unsupervised Learning",
            technologies: ["Python", "NumPy", "Pandas", "NetworkX", "Matplotlib", "Scikit-learn", "Graph Clustering", "Community Detection"],
            githubUrl: "https://github.com/SravanTummalapalli/Clustering-on-Graph-Dataset",
            // liveUrl: "N/A"
        },
        {
            title: "Gradient Boosted Decision Trees on DonorsChoose Dataset",
            description: "A machine learning project applying Gradient Boosted Decision Trees (GBDT) to the DonorsChoose dataset for classifying project proposals. The workflow includes data preprocessing, feature selection, model training, and hyperparameter tuning. The project demonstrates the use of boosting techniques to improve accuracy compared to a single decision tree.",
            category: "Ensemble Learning",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Gradient Boosting", "XGBoost/LightGBM"],
            githubUrl: "https://github.com/SravanTummalapalli/Apply-GBDT-on-Donors-Choose-dataset",
            // liveUrl: "N/A"
        },
        {
            title: "Application of Bootstrap Sampling in Random Forest",
            description: "A project demonstrating the role of bootstrap sampling in building Random Forest models. The notebook explains how bootstrap samples are generated, how multiple decision trees are trained on different subsets of data, and how aggregation improves generalization. It provides hands-on implementation, visualization, and performance comparison with and without bootstrapping.",
            category: "Ensemble Learning",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Random Forest", "Bootstrap Sampling"],
            githubUrl: "https://github.com/SravanTummalapalli/Application-of-Bootstrap-samples-in-Random-Forest",
            // liveUrl: "N/A"
        },
        {
            title: "Decision Tree Classification on DonorsChoose Dataset",
            description: "A machine learning project applying Decision Tree algorithms to the DonorsChoose dataset to classify project proposals. The workflow includes data preprocessing, feature engineering, and training decision trees for prediction. The project demonstrates tree visualization, interpretation of splits, and evaluation using accuracy and other performance metrics.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Decision Trees"],
            githubUrl: "https://github.com/SravanTummalapalli/Apply-Decision-Trees-on-Donors-Choose-dataset",
            // liveUrl: "N/A"
        },
        {
            title: "Behavior-of-Linear-Models",
            description: "A comprehensive study of linear models, including their mathematical foundations, implementation details, and practical applications. The project covers various linear algorithms, their behavior under different conditions, and provides visualizations to aid understanding.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
            githubUrl: "https://github.com/SravanTummalapalli/Behavior-of-Linear-Models",
            //  liveUrl: "N/A",
        },
        {
            title: "SGD Classifier with Log Loss and L2 Regularization (from Scratch)",
            description: "A machine learning project implementing a Stochastic Gradient Descent (SGD) classifier from scratch without using Scikit-learn. The model is trained using the logistic loss function with L2 regularization. It includes gradient derivations, manual parameter updates, and evaluation of the classifier's performance on a dataset, providing a clear understanding of SGD mechanics.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Pandas", "Logistic Regression", "SGD", "L2 Regularization"],
            githubUrl: "https://github.com/SravanTummalapalli/Implement-SGD-Classifier-with-Logloss-and-L2-regularization-Using-SGD-without-using-sklearn",
            //liveUrl: "N/A"
        },
        {
            title: "Naive Bayes Classifier Implementation",
            description: "A machine learning project implementing the Naive Bayes classification algorithm for text and numerical datasets. The notebook covers probability calculations, likelihood estimation, and classification steps from scratch, reinforcing the mathematical foundations of Naive Bayes. It includes preprocessing, model training, prediction, and evaluation.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Pandas", "Probability Theory", "Naive Bayes"],
            githubUrl: "https://github.com/SravanTummalapalli/Apply-Naive-Bayes-on-Donors-Choose-dataset",
            //liveUrl: "N/A"
        },
        {
            title: "Compute Performance Metrics without Scikit-learn",
            description: "A machine learning utility project that implements classification performance metrics from scratch, without relying on Scikit-learn. The project calculates accuracy, precision, recall, F1-score, confusion matrix, and other evaluation metrics manually using Python and NumPy, providing a deeper understanding of their mathematical foundations.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Pandas", "Statistics", "Machine Learning Evaluation"],
            githubUrl: "https://github.com/SravanTummalapalli/Compute-Performance-metrics-without-Sklearn",
            // liveUrl: "N/A"
        },
        {
            title: "Implementing TF-IDF Vectorizer",
            description: "An NLP project demonstrating the implementation of Term Frequency–Inverse Document Frequency (TF-IDF) from scratch. The project processes a text corpus, computes term frequencies, inverse document frequencies, and TF-IDF scores, and applies the technique for feature extraction in text analysis. It also compares the custom implementation with scikit-learn's TF-IDF Vectorizer.",
            category: "Natural Language Processing",
            technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Text Preprocessing", "TF-IDF"],
            githubUrl: "https://github.com/SravanTummalapalli/Implementing-TFIDF-vectorizer",
            //   liveUrl: "N/A"
        },
        {
            title: "Exploratory Data Analysis on Haberman Dataset",
            description: "A statistical and visual analysis project exploring the Haberman's Survival Dataset, which contains information about breast cancer patients who underwent surgery. The analysis investigates the relationship between patient age, year of operation, number of positive axillary nodes, and survival status. Various EDA techniques such as univariate, bivariate, and multivariate analysis are applied to discover trends and patterns.",
            category: "Data Analysis",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "EDA", "Statistics"],
            githubUrl: "https://github.com/SravanTummalapalli/Exploratory-Data-Analysis-on-Haberman-Dataset",
            //   liveUrl: "N/A"
        },
        {
            title: "Spoken Digit Recognition",
            description: "A deep learning project to classify spoken digit audio recordings (0–9) using LSTM networks. The system processes raw audio data, generates spectrograms, and applies data augmentation to improve accuracy. It includes steps for dataset preprocessing, feature extraction, and training with both raw waveforms and spectrograms.",
            category: "Deep Learning",
            technologies: ["Python", "Librosa", "NumPy", "Pandas", "Matplotlib", "LSTM", "TensorFlow/Keras", "Audio Signal Processing"],
            githubUrl: "https://github.com/yourusername/spoken-digit-recognition",
            //  liveUrl: "N/A"
        },
        {
            title: "Document Classification with CNN",
            description: "Implementation of a deep learning model for classifying documents using Convolutional Neural Networks with both word-level and character-level embeddings, including TensorBoard visualizations and performance evaluation.",
            category: "Natural Language Processing",
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "Word Embeddings", "Character Embeddings", "TensorBoard"],
            githubUrl: "https://github.com/SravanTummalapalli/Document-Classification-with-CNN",
            //   liveUrl: "https://document-classification-demo.com",
        },
        {
            title: "Backpropagation and Gradient Checking",
            description: "This project implements the complete mathematical pipeline of a neural network from scratch, focusing on understanding and validating the backpropagation algorithm. It covers the construction of the forward propagation process, cost computation, and manual weight updates without relying on high-level deep learning frameworks. Gradient checking is integrated as a debugging mechanism to verify the correctness of the backpropagation implementation by comparing analytical gradients with numerical approximations.",
            category: "Machine Learning",
            technologies: ["Python", "NumPy", "Matplotlib", "Scikit-learn"],
            githubUrl: "https://github.com/SravanTummalapalli/Backpropagation-and-Gradient-Checking",
            //   liveUrl: "https://backpropagation-demo.com",
        },
        {
            title: "Article Recommendation System",
            description: "This project builds a recommendation system to suggest articles to users based on their reading history and preferences. It explores collaborative filtering and content-based approaches to improve personalization. The notebook covers data preprocessing, exploratory analysis, feature engineering, and recommendation algorithms. The final system helps deliver tailored content, enhancing user engagement and experience.",
            category: "Machine Learning & Recommender Systems",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Surprise", "Recommender Systems", "Collaborative Filtering", "Content-based Filtering"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/tree/main/Article%20Recommendation%20System",
            //liveUrl: "N/A"
        },
        {
            title: "Breast Cancer Survival Prediction",
            description: "This project predicts patient survival outcomes based on clinical and genetic features using machine learning models. It involves data preprocessing, feature selection, exploratory data analysis, and model building with classifiers like Logistic Regression, Random Forest, and XGBoost. The goal is to identify important predictors and improve survival prediction accuracy, supporting better medical decision-making.",
            category: "Machine Learning & Healthcare",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "ML Classification"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/tree/main/Breast%20Cancer%20Survival%20Prediction",
            //liveUrl: "N/A"
        },
        {
            title: "Classification with Neural Networks",
            description: "This project demonstrates how neural networks can be applied to classification problems. It covers data preprocessing, splitting datasets, building feedforward neural network architectures, training with backpropagation, and evaluating performance using accuracy and confusion matrices. The project showcases the power of deep learning in solving supervised classification tasks.",
            category: "Deep Learning",
            technologies: ["Python", "TensorFlow/Keras", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Neural Networks"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Classification%20with%20Neural%20Networks/Classification%20with%20Neural%20Networks.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Covid-19 Death Prediction",
            description: "This project focuses on predicting Covid-19 related deaths using machine learning techniques. It includes data cleaning, feature engineering, and building regression and classification models to forecast fatalities based on demographic, medical, and regional data. The project highlights how data science can support public health decision-making during pandemics.",
            category: "Machine Learning",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Regression", "Classification"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Covid-19%20Death%20Prediction/Covid-19%20Death%20Prediction.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Cryptocurrency Price Prediction",
            description: "This project builds predictive models to forecast cryptocurrency price movements. It uses historical market data to train regression and time series models, analyzing volatility and patterns in the crypto market. The project demonstrates the application of machine learning for financial forecasting and investment decision support.",
            category: "Machine Learning",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Regression", "Time Series Analysis"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Cryptocurrency%20Price%20Prediction/Cryptocurrency_Price_Prediction.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Flipkart Reviews Sentiment Analysis",
            description: "This project performs sentiment analysis on Flipkart product reviews to classify customer feedback as positive, negative, or neutral. Using natural language processing (NLP) techniques, it applies text preprocessing, feature extraction, and machine learning models to understand customer sentiment and provide insights for businesses.",
            category: "Natural Language Processing",
            technologies: ["Python", "Pandas", "NumPy", "NLTK", "Scikit-learn", "Matplotlib", "Seaborn", "Sentiment Analysis", "NLP"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Flipkart%20Reviews%20Sentiment%20Analysis/Flipkart%20Reviews%20Sentiment%20Analysis.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Future Sales Prediction",
            description: "This project predicts future product sales using historical data, marketing spend, and seasonal effects. It applies feature engineering, time-series forecasting, and regression models to help businesses optimize inventory and plan marketing strategies effectively.",
            category: "Time Series Forecasting",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "XGBoost", "Time Series Analysis"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/tree/main/Future%20Sales%20Prediction",
            // liveUrl: "N/A"
        },
        {
            title: "Instagram Reach Analysis",
            description: "This project analyzes Instagram data to understand reach, impressions, and engagement. It applies data visualization, trend analysis, and machine learning models to predict content performance and provide strategies for improving audience engagement.",
            category: "Social Media Analytics",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Instagram_Reach_Analysis/Instagram%20Reach%20Analysis.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Netflix Stock Price Prediction",
            description: "This project focuses on predicting Netflix stock prices using historical data. It applies time series analysis and machine learning models such as ARIMA, LSTM, and regression to forecast future stock trends.",
            category: "Finance & Stock Market",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Netflix%20Stock%20Price%20Prediction/Netflix%20Stock%20Price%20Prediction.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Online Payments Fraud Detection",
            description: "This project identifies fraudulent online payment transactions using machine learning. It applies classification algorithms like Logistic Regression, Decision Trees, Random Forest, and XGBoost to detect anomalies in transaction data with high accuracy.",
            category: "Finance & Security",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Online_Payments_fraud_detection/Online%20Payments%20Fraud%20Detection.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Stock Price Prediction with LSTM",
            description: "Built a deep learning model using Long Short-Term Memory (LSTM) networks to predict stock prices based on historical time-series data. The project demonstrates the power of recurrent neural networks in financial forecasting.",
            category: "Deep Learning | Finance",
            technologies: ["Python", "TensorFlow/Keras", "Pandas", "NumPy", "Matplotlib"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Stock%20Price%20Prediction%20with%20LSTM%20Neural%20Network/Stock_Price_Prediction_with_LSTM_Neural_Network.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Stress Detection",
            description: "Developed a machine learning model to detect stress levels using physiological and behavioral data. The project applies feature engineering, classification algorithms, and model evaluation techniques to build a reliable stress detection system.",
            category: "Machine Learning | Healthcare",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Stress%20Detection/Stress%20Detection.ipynb",
            // liveUrl: "N/A"
        }
    ];

const AllProjects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const categories = [
        "all",
        ...Array.from(new Set(projects.map((project) => project.category)))
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

    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
    });

    return (
    <div className="min-h-screen bg-background">
      {/* Header */}
        <div className="border-b border-border sticky top-0 bg-background z-20">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Portfolio
                            </Button>
                        </Link>
            <div>
                <h1 className="text-3xl font-bold">All Projects</h1>
                <p className="text-muted-foreground">
                    Explore all {projects.length} projects across different categories
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>

      {/* Search and Filter Controls */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group glass shadow-card p-6 hover-glow transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
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
                      <Button variant="outline" size="sm" className="flex-1" asChild>
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;