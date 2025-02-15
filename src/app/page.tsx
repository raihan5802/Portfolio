"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, MapPin, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
 const [activeSection, setActiveSection] = useState('projects');
 const [theme, setTheme] = useState('light');

 useEffect(() => {
   document.documentElement.classList.toggle('dark', theme === 'dark');
 }, [theme]);

 const projects = [
   {
     title: "BiasDetect",
     description: "Lightweight ML framework for gendered language bias detection",
     highlights: ["F1 score of 0.8", "11 trainable parameters", "TF-IDF & sentiment analysis"],
     tech: ["PyTorch", "NLP", "Neural Networks"],
     github: "https://github.com/raihan5802/BiasDetect"
   },
   {
     title: "Illegal Dumping Detection",
     description: "AI-driven system for garbage dump detection using YOLOv8",
     highlights: ["96.0% mAP@IoU=0.5", "Custom COCO dataset", "Real-time visualization"],
     tech: ["YOLOv8", "React", "Computer Vision"],
     github: "https://github.com/raihan5802/Illegal-Dumping-Garbage-Detection-Segmentation"
   },
   {
     title: "CV Analyzer",
     description: "AI-powered resume analysis tool with LLM integration",
     highlights: ["NLP analysis", "PDF processing", "Fault-tolerant design"],
     tech: ["Next.js", "Flask", "spaCy"],
     github: "https://github.com/raihan5802/CV-Analyzer"
   },
   {
     title: "Multi-Task Learning MNIST",
     description: "CNN-based multi-task learning for digit classification and parity",
     highlights: ["96.20% classification accuracy", "97.17% parity accuracy", "VGG architecture"],
     tech: ["PyTorch", "CNN", "Multi-task Learning"],
     github: "https://github.com/raihan5802/Multi-Task-Learning-Handwritten-Digit-Classification-Parity-Check"
   },
   {
     title: "Netflix Data Analysis",
     description: "Comprehensive analysis of Netflix content patterns and predictions",
     highlights: ["R² ~0.999 with XGBoost", "ARIMA forecasting", "KMeans clustering"],
     tech: ["Python", "Machine Learning", "Data Analysis"],
     github: "https://github.com/raihan5802/Netflix-Data-Analysis"
   }
 ];

 const skills = {
   "Programming": ["Python", "JavaScript"],
   "AI/ML": ["PyTorch", "TensorFlow", "YOLO", "Detectron2"],
   "LLMs & AI": ["OpenAI APIs", "LangChain", "LlamaIndex", "Hugging Face"],
   "Web Development": ["React", "Flask", "Next.js", "React Native"],
   "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
   "Tools": ["Git", "Docker", "Jupyter", "Google Colab"]
 };

 const achievements = [
   "Top 6 in HerWILL AI for Equality Datathon",
   "22nd Position in Synnax Datathon",
   "Shortlisted in Cisco IoT Hackathon 2024",
   "Top 50 in Robi Datathon 3.0",
   "NSU ACM SC Innovation Challenge Award 2024"
 ];

 return (
   <div className="max-w-6xl mx-auto p-6 space-y-8 dark:bg-gray-900 min-h-screen">
     <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white rounded-lg p-8">
       <div className="flex justify-between items-start">
         <div className="flex gap-8 items-start">
           <img 
             src="/profile.png" 
             alt="Profile" 
             className="w-32 h-32 rounded-full object-cover border-4 border-white"
           />
           <div>
             <h1 className="text-4xl font-bold mb-4">MD RAIHAN CHOWDHURY</h1>
             <h2 className="text-xl mb-6">Data Scientist @ Synnax Lab</h2>
             <div className="flex flex-wrap gap-4">
               <a href="mailto:raihan5802@gmail.com" className="flex items-center gap-2 hover:text-blue-200">
                 <Mail className="w-5 h-5" />
                 <span>raihan5802@gmail.com</span>
               </a>
               <a href="tel:+8801683243077" className="flex items-center gap-2 hover:text-blue-200">
                 <Phone className="w-5 h-5" />
                 <span>+880 16 8324 3077</span>
               </a>
               <div className="flex items-center gap-2">
                 <MapPin className="w-5 h-5" />
                 <span>Shantibagh, Dhaka</span>
               </div>
             </div>
           </div>
         </div>
         <div className="flex gap-4 items-center">
           <button 
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
             className="p-2 rounded-full hover:bg-white/20"
           >
             {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
           </button>
           <a href="https://github.com/raihan5802" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
             <Github className="w-6 h-6" />
           </a>
           <a href="https://www.linkedin.com/in/raihanc7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
             <Linkedin className="w-6 h-6" />
           </a>
         </div>
       </div>
     </div>

     <div className="flex gap-4 border-b pb-4">
       {['projects', 'skills', 'achievements'].map((section) => (
         <button
           key={section}
           onClick={() => setActiveSection(section)}
           className={`px-4 py-2 rounded-lg transition-colors ${
             activeSection === section
               ? 'bg-blue-600 text-white'
               : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
           }`}
         >
           {section.charAt(0).toUpperCase() + section.slice(1)}
         </button>
       ))}
     </div>

     <div className="grid gap-6">
       {activeSection === 'projects' && (
         <motion.div 
           className="grid md:grid-cols-2 gap-6"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
         >
           {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
               <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-white">
                 <CardHeader>
                   <div className="flex justify-between items-start">
                     <CardTitle>{project.title}</CardTitle>
                     <a href={project.github} target="_blank" rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                       <Github className="w-5 h-5" />
                     </a>
                   </div>
                 </CardHeader>
                 <CardContent>
                   <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                   <div className="space-y-4">
                     <div>
                       <h4 className="font-semibold mb-2">Key Features:</h4>
                       <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                         {project.highlights.map((highlight) => (
                           <li key={highlight}>{highlight}</li>
                         ))}
                       </ul>
                     </div>
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map((tech) => (
                         <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </motion.div>
       )}

       {activeSection === 'skills' && (
         <motion.div 
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
         >
           {Object.entries(skills).map(([category, skillList], index) => (
             <motion.div
               key={category}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
               <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-white">
                 <CardHeader>
                   <CardTitle>{category}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <div className="flex flex-wrap gap-2">
                     {skillList.map((skill) => (
                       <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full text-sm">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </motion.div>
       )}

       {activeSection === 'achievements' && (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
         >
           <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-white">
             <CardHeader>
               <CardTitle>Achievements & Certifications</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="grid gap-4">
                 {achievements.map((achievement, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                   >
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     <span>{achievement}</span>
                   </motion.div>
                 ))}
                 <div className="mt-4 pt-4 border-t dark:border-gray-600">
                   <h3 className="font-semibold mb-3">Certifications</h3>
                   <div className="space-y-3">
                     <div className="flex justify-between items-center">
                       <span>Foundations of Data Science</span>
                       <span className="text-green-600 dark:text-green-400">95.50%</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span>Foundations: Data, Data, Everywhere</span>
                       <span className="text-green-600 dark:text-green-400">98.25%</span>
                     </div>
                   </div>
                 </div>
               </div>
             </CardContent>
           </Card>
         </motion.div>
       )}
     </div>
   </div>
 );
}