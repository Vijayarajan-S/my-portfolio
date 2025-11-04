import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

// Define a clear type for projects to improve readability and type safety
type Project = {
	title: string;
	description: string;
	technologies: string[];
	impact: string;
	category: string;
	github: string;
	demo: string;
	color: string; // hex color like #2563EB
	icon: string; // emoji or icon string
};

export default function ProjectsSection() {
	const projects: Project[] = [
		// Project 1: Brand Event Detection and Analysis Platform
		{
			title: "Brand Event Detection and Analysis Platform",
			description: "Developed a production-grade AI pipeline to detect and analyze brand visibility in sports videos using Roboflow, GroundingDINO, and EasyOCR. Integrated AWS S3 for frame storage, PostgreSQL for metadata management, and Pinecone with multilingual embeddings for semantic search. Built an interactive Streamlit dashboard with Groq-powered RAG-based Q&A for real-time insights.",
			technologies: ["Python", "Streamlit", "Roboflow", "GroundingDINO", "EasyOCR", "AWS S3", "PostgreSQL", "Pinecone", "Hugging Face", "Groq", "LangChain"],
			impact: "Automated brand visibility analytics from video content",
			category: "AI / Computer Vision / NLP",
			github: "https://github.com/Vijayarajan-S/Brand-Event-Detection",
			demo: "#",
			color: "#2563EB",
			icon: "🎬"
		},

		// Project 1: Fish Classification
		{
			title: "Fish Classification Using Deep Learning",
			description: "This project classifies 11 fish species using a dataset of 3,187 images. Multiple architectures were tested including MobileNetV2, VGG16, ResNet50, and a custom CNN. ResNet50 achieved 96% accuracy, highlighting the power of transfer learning and deeper models.",
			technologies: ["Python", "Keras", "TensorFlow", "MobileNetV2", "VGG16", "ResNet50", "CNN", "Data Preprocessing", "Deep Learning"],
			impact: "96% Accuracy with ResNet50",
			category: "Deep Learning / Computer Vision",
			github: "https://github.com/Vijayarajan-S/Fish-Classification-using-CNN",
			demo: "#",
			color: "#22C55E",
			icon: "🐟"
		},
	
		// Project 2: Research Paper Chatbot Using RAG
		{
			title: "Research Paper Chatbot Using RAG",
			description: "Implements a chatbot that answers questions from uploaded research papers using RAG models. Features PDF upload, text extraction with PyMuPDF, text splitting via LangChain, vector storage in Pinecone, and a responsive Flask + HTML/CSS frontend.",
			technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PyMuPDF", "LangChain", "RAG", "Hugging Face", "Pinecone"],
			impact: "Intelligent research paper Q&A",
			category: "AI / NLP",
			github: "https://github.com/Vijayarajan-S/Research-paper-chatbot-usingRAG",
			demo: "#",
			color: "#F97316",
			icon: "📚"
		},
	
		// Existing Project 3: Indian Dress Recommendation
		{
			title: "Indian Dress Recommendation",
			description: "A machine learning project to recommend traditional Indian dresses based on user preferences and features.",
			technologies: ["Python", "Keras", "TensorFlow", "OpenCV", "React", "MongoDB"],
			impact: "Personalized Recommendations",
			category: "Machine Learning / Computer Vision",
			github: "https://github.com/Vijayarajan-S/Indian-Dress-Recommendation",
			demo: "#",
			color: "#8B5CF6",
			icon: "👗"
		},
	
		// Existing Project 4: Content Monetization using Regression
		{
			title: "Content Monetization using Regression",
			description: "Predicts ad revenue (USD) for online content using regression models based on views, likes, and watch time.",
			technologies: ["Python", "Regression", "Pandas", "Scikit-learn", "Matplotlib"],
			impact: "Revenue Prediction",
			category: "Machine Learning / Regression",
			github: "https://github.com/Vijayarajan-S/Content_Monetization_using_Regression",
			demo: "#",
			color: "#3B82F6",
			icon: "💰"
		},
	
		// Existing Project 5: PhonePe Data Analysis
		{
			title: "PhonePe Data Analysis",
			description: "Analyzes PhonePe transactions and user behavior across different states and districts using Python and SQL.",
			technologies: ["Python", "SQL", "Pandas", "Matplotlib", "Seaborn", "Data Visualization"],
			impact: "Insights on User Behavior",
			category: "Data Analysis / Visualization",
			github: "https://github.com/Vijayarajan-S/phonepe_data_analysis",
			demo: "#",
			color: "#10B981",
			icon: "📊"
		},
	
		// Existing Project 6: Amazon Music Clustering
		{
			title: "Amazon Music Clustering",
			description: "Clusters Amazon Music users based on listening patterns to provide insights for recommendations and marketing strategies.",
			technologies: ["Python", "K-Means Clustering", "Pandas", "Scikit-learn"],
			impact: "User Segmentation",
			category: "Machine Learning / Clustering",
			github: "https://github.com/Vijayarajan-S/Amazon_Music_Clustering-",
			demo: "#",
			color: "#F59E0B",
			icon: "🎵"
		},
	
		// Existing Project 7: Luxury Housing Sales Analysis – Bengaluru
		{
			title: "Luxury Housing Sales Analysis – Bengaluru",
			description: "Analyzes luxury housing sales in Bengaluru using Python, SQL, and Power BI, highlighting market trends and buyer behavior.",
			technologies: ["Python", "SQL", "Power BI", "Data Cleaning", "Pandas", "Matplotlib", "Seaborn"],
			impact: "Market Trends Insights",
			category: "Data Analysis / Visualization",
			github: "https://github.com/Vijayarajan-S/Luxury-Housing-Sales-Analysis-Bengaluru",
			demo: "#",
			color: "#EC4899",
			icon: "🏠"
		}
	];

	return (
		<section id="projects" className="py-20 px-4 bg-gradient-to-br from-secondary/40 via-background to-secondary/60 dark:from-gray-900 dark:via-primary/10 dark:to-gray-900">
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
					<div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 lovable-pulse" />
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Showcasing data science projects with measurable impact and real-world applications
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
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
											animate={{
												y: [-20, 0, -20],
												scale: [0, 1, 0.8],
												opacity: [0, 0.3, 0],
												transition: {
													duration: 3 + i * 0.3,
													delay: i * 0.2,
													repeat: Infinity,
													repeatType: "reverse",
													ease: "easeInOut"
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
												<h3 className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--lovable-primary))] transition-colors duration-300">
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
													className="text-xs hover:bg-[hsl(var(--accent))/0.15] dark:hover:bg-[hsl(var(--accent))/0.25] transition-colors duration-300"
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
						onClick={() => window.open('https://github.com/Vijayarajan-S', '_blank')}
					>
						<Github className="w-5 h-5 mr-2" />
						View All Projects on GitHub
					</Button>
				</motion.div>
			</div>
		</section>
	);
}