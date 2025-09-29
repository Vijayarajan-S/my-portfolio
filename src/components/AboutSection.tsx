import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  const skillsOverview = [
    { icon: "🐍", title: "Python", description: "Data manipulation & analysis" },
    { icon: "🗄️", title: "SQL", description: "Database querying & optimization" },
    { icon: "🤖", title: "Machine Learning", description: "Predictive modeling & algorithms" },
    { icon: "📊", title: "Data Visualization", description: "Storytelling with data" },
    { icon: "🧠", title: "Deep Learning", description: "Neural networks & computer vision" },
    { icon: "📚", title: "AI / NLP", description: "Natural language processing & intelligent systems" }
  ];
  

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Vijayarajan Selvam
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
                   <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a passionate and driven aspiring data scientist with a strong foundation in mathematics and computer science. 
                  I love uncovering patterns in data and turning insights into actionable solutions.
                  </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  With hands-on experience in data analysis, machine learning, deep learning, NLP, and data visualization,
                  I enjoy building projects that solve real-world problems. I'm eager to contribute my skills to innovative,
                    data-driven solutions and continue learning in a fast-paced environment.
                </p>


              <div className="flex flex-wrap gap-3 mt-8">
                {["Curious", "Detail-oriented", "Problem-solver", "Team player"].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skillsOverview.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                  <div className="text-3xl mb-3">{interest.icon}</div>
                  <h3 className="font-semibold mb-2 text-foreground">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}