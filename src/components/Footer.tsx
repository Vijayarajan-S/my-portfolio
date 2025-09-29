import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alex.chen@email.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
          >
            Alex Chen
          </motion.h3>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Aspiring Data Scientist passionate about transforming data into insights
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alex Chen. Built with React & Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Designed to showcase data science skills and passion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}