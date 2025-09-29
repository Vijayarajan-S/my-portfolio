import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn using ensemble methods. Achieved 94% accuracy and identified key factors contributing to customer retention.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      impact: "94% Accuracy",
      category: "Machine Learning",
      github: "#",
      demo: "#"
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive dashboard analyzing sales performance across regions and time periods. Built with real-time data visualization and KPI tracking.",
      technologies: ["Python", "Streamlit", "Plotly", "SQL"],
      impact: "Real-time Insights",
      category: "Data Visualization",
      github: "#",
      demo: "#"
    },
    {
      title: "Stock Price Forecasting",
      description: "Time series analysis and forecasting model for stock prices using LSTM neural networks. Includes sentiment analysis from news data.",
      technologies: ["Python", "TensorFlow", "LSTM", "Beautiful Soup"],
      impact: "85% Prediction Accuracy",
      category: "Deep Learning",
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "NLP project analyzing sentiment in social media posts. Implemented text preprocessing, feature extraction, and classification algorithms.",
      technologies: ["Python", "NLTK", "TextBlob", "Vader"],
      impact: "90% Sentiment Accuracy",
      category: "Natural Language Processing",
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Recommendation System",
      description: "Collaborative filtering recommendation system for e-commerce platform. Implemented matrix factorization and content-based filtering.",
      technologies: ["Python", "Surprise", "Pandas", "Flask"],
      impact: "30% Increase in CTR",
      category: "Recommendation Systems",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing data science projects with measurable impact and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{project.impact}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('#', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}