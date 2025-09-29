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
      demo: "#",
      color: "#8B5CF6",
      icon: "🤖"
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive dashboard analyzing sales performance across regions and time periods. Built with real-time data visualization and KPI tracking.",
      technologies: ["Python", "Streamlit", "Plotly", "SQL"],
      impact: "Real-time Insights",
      category: "Data Visualization",
      github: "#",
      demo: "#",
      color: "#3B82F6",
      icon: "📊"
    },
    {
      title: "Stock Price Forecasting",
      description: "Time series analysis and forecasting model for stock prices using LSTM neural networks. Includes sentiment analysis from news data.",
      technologies: ["Python", "TensorFlow", "LSTM", "Beautiful Soup"],
      impact: "85% Prediction Accuracy",
      category: "Deep Learning",
      github: "#",
      demo: "#",
      color: "#10B981",
      icon: "📈"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "NLP project analyzing sentiment in social media posts. Implemented text preprocessing, feature extraction, and classification algorithms.",
      technologies: ["Python", "NLTK", "TextBlob", "Vader"],
      impact: "90% Sentiment Accuracy",
      category: "Natural Language Processing",
      github: "#",
      demo: "#",
      color: "#F59E0B",
      icon: "💬"
    },
    {
      title: "E-commerce Recommendation System",
      description: "Collaborative filtering recommendation system for e-commerce platform. Implemented matrix factorization and content-based filtering.",
      technologies: ["Python", "Surprise", "Pandas", "Flask"],
      impact: "30% Increase in CTR",
      category: "Recommendation Systems",
      github: "#",
      demo: "#",
      color: "#EC4899",
      icon: "🛒"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-purple-50/50 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 lovable-pulse" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing data science projects with measurable impact and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                y: -15,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group perspective-1000"
            >
              <Card className="p-6 h-full lovable-card hover-lift hover-glow transition-all duration-500 relative overflow-hidden transform-gpu">
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` 
                  }}
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-30"
                      style={{ background: project.color }}
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: "100%",
                        scale: 0 
                      }}
                      whileHover={{
                        y: -20,
                        scale: 1,
                        transition: {
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  {/* Header with icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <Badge 
                          variant="secondary" 
                          className="mb-2 text-xs"
                          style={{ backgroundColor: `${project.color}20`, color: project.color }}
                        >
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <motion.div 
                      className="text-right"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p 
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: `${project.color}20`, 
                          color: project.color,
                          border: `1px solid ${project.color}40`
                        }}
                      >
                        {project.impact}
                      </p>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies with staggered animation */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + i * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons with enhanced animations */}
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        variant="default"
                        className="w-full group-hover:scale-105 transition-transform duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full group-hover:scale-105 transition-transform duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px ${project.color}30`
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects with enhanced button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            variant="glow"
            className="text-lg px-8 py-6 lovable-pulse hover:scale-105 transition-all duration-300"
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