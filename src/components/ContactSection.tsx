import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, FileDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com", 
      color: "#6B7280",
      hoverColor: "#111827"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com", 
      color: "#0077B5",
      hoverColor: "#005885"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:alex.chen@email.com", 
      color: "#DC2626",
      hoverColor: "#991B1B"
    },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "alex.chen@email.com", href: "mailto:alex.chen@email.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 lovable-pulse" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in data science opportunities? Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lovable-card hover-lift">
              <motion.h3 
                className="text-2xl font-bold mb-6 text-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send a Message
              </motion.h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:border-purple-400"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:border-purple-400"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 resize-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:border-purple-400"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    type="submit" 
                    variant="glow"
                    className="w-full text-lg py-6 relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </motion.div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
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
                      className="flex items-center space-x-4 text-foreground/80 hover:text-purple-600 transition-all duration-300 group p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <info.icon className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground group-hover:text-purple-500 transition-colors">
                          {info.label}
                        </p>
                        <p className="font-semibold group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Social Links with enhanced effects */}
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
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group"
                      style={{ backgroundColor: social.color }}
                    >
                      {/* Hover gradient overlay */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${social.color}, ${social.hoverColor})` 
                        }}
                      />
                      
                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 opacity-0"
                        style={{ borderColor: social.color }}
                        whileHover={{
                          scale: [1, 1.3],
                          opacity: [0.5, 0],
                        }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      
                      <social.icon className="w-8 h-8 relative z-10" />
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Resume Download with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="outline" 
                  className="w-full text-lg py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => {
                    toast({
                      title: "Resume Downloaded! 📄",
                      description: "Thank you for your interest!",
                    });
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FileDown className="w-5 h-5 mr-2" />
                  </motion.div>
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