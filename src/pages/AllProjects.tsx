import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, Github, ExternalLink, Search } from "lucide-react";

export const projects: Project[] = [
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
            overview: "This project focused on building a reliable malware classification pipeline using structured system data. The workflow was designed to turn raw telemetry into actionable signals, making threat detection more practical and explainable for security use cases.",
            problem: "Security teams need fast and reliable ways to identify suspicious files without relying entirely on manual analysis.",
            solution: "I cleaned and engineered useful features from the dataset, trained multiple classifiers, and compared their performance to find the strongest detection approach.",
            outcome: "The project delivered a strong baseline for malware detection and demonstrated how careful feature engineering can significantly improve classifier quality.",
            highlights: ["Built a complete end-to-end ML pipeline from data cleaning to evaluation.", "Compared multiple classification models using precision-oriented metrics.", "Showed how machine learning can support modern cybersecurity workflows."],
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
            overview: "This project modeled the Delhi Metro system as a graph to uncover connectivity, route efficiency, and network importance. It turned transit infrastructure into a visual and analytical problem that could be explored programmatically.",
            problem: "Urban transport networks are complex, and simple route planning does not reveal structural bottlenecks or central hubs.",
            solution: "I represented stations and lines as nodes and edges, then used graph algorithms to study shortest paths, connectivity, and centrality measures.",
            outcome: "The analysis produced a deeper understanding of the network’s structure and demonstrated how graph-based thinking can reveal hidden transportation insights.",
            highlights: ["Modeled a real-world transit system as a graph structure.", "Used centrality and pathfinding algorithms for network insight.", "Created visualizations that made network behavior easier to interpret."],
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
            overview: "This project tackled predictive maintenance by converting sensor streams into meaningful features and using those signals to predict likely failures before they happened. The goal was to move maintenance planning from reactive to preventive.",
            problem: "Equipment failures can be expensive, disruptive, and difficult to anticipate with traditional monitoring alone.",
            solution: "I prepared time-series features from sensor data, trained classifiers to detect failure patterns, and framed the workflow around industrial decision support.",
            outcome: "The project showed how data-driven monitoring can reduce downtime and support smarter maintenance planning in high-stakes environments.",
            highlights: ["Applied feature engineering to industrial sensor data for predictive maintenance.", "Built a classification workflow tailored to failure-risk detection.", "Turned raw monitoring signals into useful operational insight."],
            category: "Time Series / Predictive Maintenance",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Sensor Data Analysis", "Predictive Maintenance"],
            githubUrl: "https://github.com/SravanTummalapalli/Predictive-Equipment-Failures",
            liveUrl: "https://medium.com/@sravantummalapalli/conocophillips-predictive-equipment-failures-1c2c1913a6d8"
        },
        {
            title: "Facebook Friend Recommendation",
            description: "A graph-based machine learning project that implements a friend recommendation system similar to Facebook. The notebook leverages network analysis and link prediction techniques to recommend potential friends based on mutual connections, graph features, and similarity measures. It explores feature engineering on graph data, training models, and evaluating recommendation accuracy.",
            overview: "This project explored how graph-based machine learning can power social recommendations by learning from relationships and shared neighbors. The solution was built around the idea that meaningful recommendations often emerge from network structure.",
            problem: "Recommendation systems need to surface relevant future connections without relying on simple popularity metrics alone.",
            solution: "I used graph features and link prediction methods to estimate which new friendships were most likely to form based on existing relationships.",
            outcome: "The project demonstrated a practical approach to recommendation systems for social networks and highlighted the value of network-aware features.",
            highlights: ["Applied link prediction techniques to a social graph dataset.", "Used graph topology and similarity features for recommendation ranking.", "Explained how network structure can improve personalization."],
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
        },
        {
            title: "Time Series Analysis and Prediction",
            description: "Performed time series analysis and forecasting using statistical and machine learning techniques. Applied ARIMA, SARIMA, and LSTM models to predict future trends based on historical time-dependent data.",
            category: "Time Series | Forecasting",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Statsmodels", "TensorFlow/Keras"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Time%20Series%20Analysis%20and%20Prediction/Time%20Series%20Analysis%20and%20Prediction.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Ukraine-Russia War Twitter Sentiment Analysis",
            description: "Analyzed public sentiment on Twitter regarding the Ukraine-Russia war. Collected and preprocessed tweets, performed sentiment classification, and visualized insights to understand global opinions and trends.",
            category: "NLP | Sentiment Analysis",
            technologies: ["Python", "Pandas", "NumPy", "NLTK", "Scikit-learn", "Matplotlib", "Seaborn"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Ukraine%20Russia%20War%20Twitter%20Sentiment%20Analysis/Ukraine%20Russia%20War%20Twitter%20Sentiment%20Analysis.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "Waiter Tips Prediction",
            description: "Built a predictive model to estimate waiter tips based on factors like bill amount, gender, smoking preference, time of day, and party size. Applied regression analysis and feature engineering for insights.",
            category: "Machine Learning | Regression",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
            githubUrl: "https://github.com/SravanTummalapalli/Machine_Learning_Projects/blob/main/Waiter%20Tips%20Prediction/Waiter%20Tips%20Prediction.ipynb",
            // liveUrl: "N/A"
        },
        {
            title: "AI News Briefing Agent",
            description: "Developed an AI-powered agent that curates and summarizes the latest developments in Artificial Intelligence. The agent filters relevant news, generates concise briefings, and delivers structured updates, helping users stay informed without information overload. Designed for real-time insights and productivity.",
            overview: "This project built an AI agent that transforms the news stream into a personalized briefing experience. It focuses on reducing noise and giving users a fast, structured summary of what matters most.",
            problem: "Professionals and researchers often struggle to keep up with fast-moving AI news without spending too much time filtering content.",
            solution: "I designed a workflow that gathers relevant updates, summarizes them into concise briefs, and packages the results in a digestible format using LLM-driven reasoning.",
            outcome: "The agent creates a more efficient way to stay informed and demonstrates how AI can automate knowledge curation in daily workflows.",
            highlights: ["Used prompt engineering to generate concise, useful summaries.", "Focused on content filtering and information compression.", "Created a practical assistant for staying updated with less effort."],
            category: "AI / LLM Applications",
            technologies: ["OpenAI GPT", "AI Agents", "Prompt Engineering", "Automation", "Content Summarization"],
            // githubUrl: "N/A",
            liveUrl: "https://chatgpt.com/g/g-69da05dea22c819185470cca2bd208d0-ai-news-briefing-agent"
        },
        {
            title: "Data Science Job Scout (AI Agent)",
            description: "Built a custom AI-powered agent to discover and track relevant Data Science job opportunities. The agent intelligently searches for roles based on user preferences, filters job listings, and provides curated recommendations. It demonstrates the application of LLM-based agents for real-world automation, improving job search efficiency and personalization.",
            overview: "This project created a smart career assistant that turns job discovery into a guided, personalized experience. Instead of browsing manually, users receive tailored job suggestions aligned with their background and interests.",
            problem: "Finding the right data science roles can be time-consuming, especially when requirements vary across companies and job boards.",
            solution: "I designed an AI agent that interprets user preferences, filters relevant opportunities, and presents curated recommendations in a focused and structured way.",
            outcome: "The agent demonstrates how LLM-powered workflows can make job search more efficient and much more personalized.",
            highlights: ["Built an AI agent tailored for career discovery and role matching.", "Used prompt-driven logic to filter jobs based on user intent.", "Created a workflow that feels more like a smart assistant than a static search tool."],
            category: "AI / LLM Applications",
            technologies: ["LLMs", "AI Agents", "Automation", "Prompt Engineering"],
            // githubUrl: "N/A",
            liveUrl: "https://chatgpt.com/g/g-69da3cbfe20c8191b1e2a42d7067771e-data-science-job-scout"
        },
    ];

export type Project = {
    title: string;
    description: string;
    category: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    overview?: string;
    problem?: string;
    solution?: string;
    outcome?: string;
    highlights?: string[];
    readme?: string;
    codeSnippet?: {
        language: string;
        code: string;
    };
};

export const toProjectSlug = (value: string) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

export const getProjectBySlug = (slug: string) =>
    projects.find((project) => toProjectSlug(project.title) === slug);

export const getCategoryColor = (category: string) => {
    const normalized = category.toLowerCase();

    if (normalized.includes("machine learning") || normalized.includes("ml") || normalized.includes("classification") || normalized.includes("regression")) {
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    }
    if (normalized.includes("deep") || normalized.includes("neural") || normalized.includes("lstm") || normalized.includes("cnn")) {
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
    }
    if (normalized.includes("data") || normalized.includes("analysis") || normalized.includes("analytics") || normalized.includes("eda")) {
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    }
    if (normalized.includes("web") || normalized.includes("development")) {
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
    }
    if (normalized.includes("health") || normalized.includes("medical") || normalized.includes("survival")) {
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    }
    if (normalized.includes("vision") || normalized.includes("image") || normalized.includes("computer")) {
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400";
    }
    if (normalized.includes("time") || normalized.includes("forecast") || normalized.includes("stock") || normalized.includes("series")) {
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    }
    if (normalized.includes("nlp") || normalized.includes("language") || normalized.includes("sentiment") || normalized.includes("text")) {
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400";
    }
    if (normalized.includes("ai") || normalized.includes("llm") || normalized.includes("agent") || normalized.includes("prompt")) {
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400";
    }
    if (normalized.includes("graph") || normalized.includes("network") || normalized.includes("recommend")) {
        return "bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-400";
    }

    return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
};

const getProjectHighlights = (project: Project) => {
    const normalized = project.category.toLowerCase();

    if (normalized.includes("graph") || normalized.includes("network")) {
        return [
            "Mapped relationships and graph structures to uncover important clusters.",
            "Applied centrality and connectivity analysis for deeper insight.",
            "Used visualizations to explain complex network behavior clearly."
        ];
    }

    if (normalized.includes("time") || normalized.includes("forecast") || normalized.includes("stock") || normalized.includes("series")) {
        return [
            "Built forecasting workflows with historical and temporal patterns in mind.",
            "Compared several modeling approaches for better accuracy.",
            "Turned raw signals into practical forecasting insights."
        ];
    }

    if (normalized.includes("ai") || normalized.includes("llm") || normalized.includes("agent") || normalized.includes("prompt")) {
        return [
            "Designed an agentic workflow for automation and decision support.",
            "Used prompt engineering to steer outputs toward useful results.",
            "Focused on productivity gains through clear, repeatable execution."
        ];
    }

    if (normalized.includes("nlp") || normalized.includes("language") || normalized.includes("sentiment") || normalized.includes("text")) {
        return [
            "Applied text preprocessing and feature extraction for cleaner analysis.",
            "Built models that classify or summarize information effectively.",
            "Explored how language patterns drive better predictions."
        ];
    }

    if (normalized.includes("cyber") || normalized.includes("fraud") || normalized.includes("malware")) {
        return [
            "Focused on anomaly detection and security-oriented classification.",
            "Evaluated model quality with precision-focused metrics.",
            "Linked technical modeling choices to defensible results."
        ];
    }

    return [
        "Turned domain data into a clear analytical workflow.",
        "Used modern machine learning techniques to drive insight.",
        "Produced a solution that is easy to understand and extend."
    ];
};

const getCodeSnippet = (project: Project) => {
    const title = project.title.toLowerCase();
    const normalized = project.category.toLowerCase();

    if (title.includes("malware")) {
        return {
            language: "python",
            code: `from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=200)
model.fit(X_train, y_train)
proba = model.predict_proba(X_test)`
        };
    }

    if (title.includes("metro") || title.includes("network")) {
        return {
            language: "python",
            code: `import networkx as nx

G = nx.Graph()
G.add_edges_from([("A", "B"), ("B", "C"), ("C", "A")])
print(nx.degree_centrality(G))`
        };
    }

    if (title.includes("predictive") || title.includes("failure") || normalized.includes("time") || normalized.includes("forecast") || normalized.includes("series")) {
        return {
            language: "python",
            code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

model = RandomForestRegressor(n_estimators=200)
model.fit(X_train, y_train)
predictions = model.predict(X_test)`
        };
    }

    if (title.includes("friend") || title.includes("recommend")) {
        return {
            language: "python",
            code: `from sklearn.metrics.pairwise import cosine_similarity

scores = cosine_similarity(user_features, item_features)`
        };
    }

    if (title.includes("news") || title.includes("agent") || normalized.includes("ai") || normalized.includes("llm") || normalized.includes("prompt")) {
        return {
            language: "python",
            code: `def run_agent(task):
    context = gather_context(task)
    response = draft_plan(context)
    return refine_and_publish(response)`
        };
    }

    if (title.includes("sentiment") || normalized.includes("nlp") || normalized.includes("language") || normalized.includes("text")) {
        return {
            language: "python",
            code: `from sklearn.feature_extraction.text import TfidfVectorizer

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(documents)`
        };
    }

    return {
        language: "python",
        code: `import pandas as pd
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)`
    };
};

export const ProjectCard = ({ project }: { project: Project }) => {
    const highlights = getProjectHighlights(project);
    const codeSnippet = getCodeSnippet(project);

    return (
        <Card className="group glass shadow-card hover-glow transition-smooth flex h-full flex-col">
            <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                    <Badge className={`${getCategoryColor(project.category)} max-w-fit`}>
                        {project.category}
                    </Badge>
                    <span className="rounded-full border border-border/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        Case Study
                    </span>
                </div>
                <div className="space-y-2">
                    <Link to={`/projects/${toProjectSlug(project.title)}`} className="inline-block">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                        </CardTitle>
                    </Link>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-300">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="rounded-xl border border-border/60 bg-background/70 p-3">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Highlights
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {highlights.map((highlight, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-xl border border-primary/10 bg-muted/40 p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Key Implementation
                        </p>
                        <span className="text-[10px] text-muted-foreground">{codeSnippet.language}</span>
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-6 text-foreground/90">
                        <code>{codeSnippet.code}</code>
                    </pre>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                        <Link to={`/projects/${toProjectSlug(project.title)}`}>
                            View Details
                        </Link>
                    </Button>
                    {project.githubUrl && project.githubUrl !== "N/A" && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                            </a>
                        </Button>
                    )}
                    {project.liveUrl && project.liveUrl !== "N/A" && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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