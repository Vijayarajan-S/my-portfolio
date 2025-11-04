import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Github, Linkedin, FileDown } from 'lucide-react';

export default function ContactSection() {
  const { toast } = useToast();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Vijayarajan-S", color: "#6B7280", hoverColor: "#111827" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vijayarajan-selvam-62b31225a/", color: "#0077B5", hoverColor: "#005885" },
    { icon: Mail, label: "Email", href: "mailto:vijayjaga0007@gmail.com", color: "#DC2626", hoverColor: "#991B1B" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "vijayjaga0007@gmail.com", href: "mailto:vijayjaga0007@gmail.com" },
    { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 lovable-pulse" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in data science opportunities? Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lovable-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <a
                      href={info.href}
                      className="flex items-center space-x-4 text-foreground/80 hover:text-[hsl(var(--lovable-primary))] transition-all duration-300 group p-3 rounded-lg hover:bg-[hsl(var(--lovable-primary))/0.06] dark:hover:bg-[hsl(var(--lovable-primary))/0.15]"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <info.icon className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground group-hover:text-[hsl(var(--lovable-primary))] transition-colors">
                          {info.label}
                        </p>
                        <p className="font-semibold group-hover:text-[hsl(var(--lovable-primary))] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 lovable-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect with Me</h3>
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5, rotate: 5, transition: { type: "spring", stiffness: 400 } }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group"
                      style={{ backgroundColor: social.color }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${social.color}, ${social.hoverColor})` }} />
                      <motion.div className="absolute inset-0 rounded-full border-2 opacity-0" style={{ borderColor: social.color }} whileHover={{ scale: [1, 1.3], opacity: [0.5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} />
                      <social.icon className="w-8 h-8 relative z-10" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                <Button 
                  variant="outline" 
                  className="w-full text-lg py-4 border-2 border-[hsl(var(--lovable-primary))] text-[hsl(var(--lovable-primary))] hover:bg-[hsl(var(--lovable-primary))] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}