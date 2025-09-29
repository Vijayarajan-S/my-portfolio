import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

export default function SkillsSection() {
  const skills = [
    { name: "Python", level: 85, category: "Programming", color: "from-blue-500 to-blue-600" },
    { name: "SQL", level: 80, category: "Database", color: "from-green-500 to-green-600" },
    { name: "Pandas", level: 90, category: "Data Analysis", color: "from-purple-500 to-purple-600" },
    { name: "NumPy", level: 85, category: "Data Analysis", color: "from-indigo-500 to-indigo-600" },
    { name: "Matplotlib", level: 80, category: "Visualization", color: "from-orange-500 to-orange-600" },
    { name: "Seaborn", level: 85, category: "Visualization", color: "from-pink-500 to-pink-600" },
    { name: "Scikit-learn", level: 75, category: "Machine Learning", color: "from-teal-500 to-teal-600" },
    { name: "Jupyter", level: 90, category: "Tools", color: "from-yellow-500 to-yellow-600" },
  ];

  const categories = ["Programming", "Database", "Data Analysis", "Visualization", "Machine Learning", "Tools"];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern data science tools and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium text-primary">{skill.level}%</span>
                  </div>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Categories */}
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <span className="text-primary font-medium">{category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}