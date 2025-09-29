import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EducationSection() {
  const education = [
    {
      degree: "Higher Secondary",
      institution: "Tagore Matriculation Higher Secondary School",
      period: "2019 - 2020",
      description: "Completed higher secondary education with focus on Biology and Mathematics."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Muthayammal Polytechnic College",
      period: "2020 - 2022",
      description: "Studied core computer engineering subjects including programming, networking, and hardware fundamentals."
    },
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "PSG College of Engineering",
      period: "2022 - 2025",
      description: "Specialized in Data Science and Machine Learning, with hands-on experience in Java, Python, SQL, and software development projects."

    },
    {
      degree: "Data Science Certification",
      institution: "GUVI Geek Networks, IITM Research Park",
      period: "2025",
      description: "Completed professional data science course covering Python, ML, DL, NLP, SQL, and real-time project work."
    }
  ];
  



  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Academic Background</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                    <Card className="p-6 hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <div className="mb-3">
                        <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm">{edu.period}</p>
                      </div>
                      
                      <p className="text-foreground/80 mb-4">{edu.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements?.map((achievement: string, i: number) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Removed */}
      </div>
    </section>
  );
}