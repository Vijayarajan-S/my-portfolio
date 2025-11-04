import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function SkillsSection() {
  const skills = [
    
      // Programming
      { name: "Python", category: "Programming", color: "#3B82F6", icon: "🐍" },
      { name: "Java", category: "Programming", color: "#F87171", icon: "☕" },
    
      // Database
      { name: "SQL", category: "Database", color: "#10B981", icon: "🗄️" },
      { name: "MySQL", category: "Database", color: "#00758F", icon: "🗄️" },
      { name: "PostgreSQL", category: "Database", color: "#336791", icon: "🗄️" },
    
      // Data Analysis
      { name: "Pandas", category: "Data Analysis", color: "#8B5CF6", icon: "🐼" },
      { name: "NumPy", category: "Data Analysis", color: "#6366F1", icon: "🔢" },
    
      // Visualization
      { name: "Matplotlib", category: "Visualization", color: "#F59E0B", icon: "📊" },
      { name: "Seaborn", category: "Visualization", color: "#EC4899", icon: "📈" },
    
      // Machine Learning & Deep Learning
      { name: "Scikit-learn", category: "Machine Learning", color: "#06B6D4", icon: "🤖" },
      { name: "Deep Learning", category: "Machine Learning", color: "#6366F1", icon: "🧠" },
      { name: "Keras", category: "Deep Learning", color: "#D00000", icon: "🔗" },
    
      // AI / NLP
      { name: "NLP", category: "AI / NLP", color: "#F97316", icon: "🧾" },
      { name: "NLTK", category: "AI / NLP", color: "#FF6B6B", icon: "📜" },
      { name: "Text Preprocessing", category: "AI / NLP", color: "#FCD34D", icon: "✂️" },
      { name: "RAG", category: "AI / NLP", color: "#F97316", icon: "📚" },
    
      // Computer Vision
      { name: "Roboflow", category: "Computer Vision", color: "#0EA5E9", icon: "🤖" },
      { name: "YOLO", category: "Computer Vision", color: "#FACC15", icon: "🎯" },
    
      // Web Development / Backend
      { name: "Flask", category: "Backend / Web", color: "#000000", icon: "🍶" },
    
      // Cloud
      { name: "AWS", category: "Cloud", color: "#FF9900", icon: "☁️" },
    
      // Version Control
      { name: "Git", category: "Version Control", color: "#F05032", icon: "🌳" },
    ];
    

  const categories = ["Programming", "Database", "Data Analysis", "Visualization", "Machine Learning", "Tools"];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 lovable-pulse" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern data science tools and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="group"
            >
              <Card className="p-6 h-full lovable-card hover-lift hover-glow transition-all duration-500 relative overflow-hidden">
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)` 
                  }}
                />
                
                <div className="relative z-10">
                  {/* Skill icon with float animation */}
                  <motion.div 
                    className="text-4xl mb-4 lovable-float"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Categories with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Skill Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300 cursor-pointer lovable-card"
              >
                <span className="text-purple-600 dark:text-purple-400 font-medium">{category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}