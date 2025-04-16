"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, MapPin, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState('projects');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#111827';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [theme]);

  const projects = [
    {
      title: "MovieLens Recommender System",
      description: "Comprehensive recommendation system for personalized content suggestions, featuring A/B testing and large-scale data processing.",
      highlights: [
        "Multiple recommendation models with best RMSE of 0.87",
        "Statistical A/B testing framework with 1.39% CTR improvement",
        "Processed 500,000+ user interactions using Polars",
        "Flask API and AWS SageMaker deployment architecture"
      ],
      tech: ["Python", "Recommendation Systems", "A/B Testing", "Polars", "Flask", "AWS SageMaker", "Matrix Factorization", "Collaborative Filtering"],
      github: "https://github.com/raihan5802/movielens-recommender" // Update with your actual repo URL
    },
    {
      title: "LLM Comparison Dashboard",
      description: "An interactive dashboard that compares responses from multiple LLM models (GPT-4, Gemini Pro, Llama) side-by-side with performance metrics and analysis.",
      highlights: ["Multi-model API integration", "Real-time performance metrics", "Interactive response comparison", "Cross-model evaluation"],
      tech: ["Next.js", "React", "TailwindCSS", "Chart.js", "OpenAI API", "Google Generative AI (Gemini) API", "Replicate API", "JavaScript", "RESTful APIs"],
      github: "https://github.com/raihan5802/llm-comparison-dashboard"
    },
    {
      title: "BiasDetect",
      description: "Lightweight ML framework for gendered language bias detection with advanced text classification capabilities.",
      highlights: ["F1 score of 0.8", "11 trainable parameters", "TF-IDF & sentiment analysis", "Explainable AI visualization"],
      tech: ["PyTorch", "NLP", "Neural Networks", "Text Classification"],
      github: "https://github.com/raihan5802/BiasDetect"
    },
    {
      title: "CV Analyzer",
      description: "AI-powered resume analysis tool with LLM integration for comprehensive skill matching and candidate evaluation.",
      highlights: ["NLP analysis", "PDF processing", "Fault-tolerant design", "Custom skill extraction"],
      tech: ["Next.js", "Flask", "spaCy", "Document Processing"],
      github: "https://github.com/raihan5802/CV-Analyzer"
    },
    {
      title: "Illegal Dumping Detection",
      description: "AI-driven system for garbage dump detection using YOLOv8 with real-time monitoring capabilities for environmental protection.",
      highlights: ["96.0% mAP@IoU=0.5", "Custom COCO dataset", "Real-time visualization", "Edge device compatibility"],
      tech: ["YOLOv8", "React", "Computer Vision", "Object Detection"],
      github: "https://github.com/raihan5802/Illegal-Dumping-Garbage-Detection-Segmentation"
    },
    {
      title: "Waste Patrol Detection & Segmentation",
      description: "End-to-end garbage management solution with mobile reporting and authority dashboard for complaint handling and heatmap visualization.",
      highlights: [
        "Authority Portal with real-time heatmaps",
        "React Native app for public complaint submission",
        "CSV-based lightweight backend integration",
        "Geospatial analysis capabilities"
      ],
      tech: ["Flask", "React Native", "Leaflet.js", "Heatmap.js", "Python", "Geospatial Analysis"],
      github: "https://github.com/raihan5802/Waste-Patrol-Detection-Segmentation" 
    },
    {
      title: "Netflix Data Analysis",
      description: "Comprehensive analysis of Netflix content patterns and predictions with detailed genre-based recommendation algorithms.",
      highlights: ["R² ~0.999 with XGBoost", "ARIMA forecasting", "KMeans clustering", "Content pattern recognition"],
      tech: ["Python", "Machine Learning", "Data Analysis", "Time Series Forecasting"],
      github: "https://github.com/raihan5802/Netflix-Data-Analysis"
    }
  ];

  const skills = {
    "Programming": ["Python", "JavaScript", "SQL"],
    "AI/ML": ["PyTorch", "TensorFlow", "YOLO", "Detectron2", "Recommendation Systems", "Matrix Factorization"],
    "LLMs & AI": ["OpenAI APIs", "LangChain", "LlamaIndex", "Hugging Face"],
    "Web Development": ["React", "Flask", "Next.js", "React Native"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Polars", "A/B Testing", "Statistical Analysis"],
    "Cloud & DevOps": ["AWS SageMaker", "Git", "Docker", "Jupyter", "Google Colab"]
  };

  const achievements = [
    "2nd Position in HerWILL AI for Equality Datathon",
    "22nd Position in Synnax Datathon",
    "Shortlisted in Cisco IoT Hackathon 2024",
    "Top 50 in Robi Datathon 3.0",
    "NSU ACM SC Innovation Challenge Award 2024"
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-900 dark:via-blue-800 dark:to-indigo-900 text-white rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-30"></div>
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">MD RAIHAN CHOWDHURY</h1>
                <h2 className="text-lg md:text-xl mb-4 md:mb-6 opacity-90">Data Scientist @ Synnax Lab | North South University Graduate</h2>
                <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4">
                  <a href="mailto:raihan5802@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-200 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm md:text-base">raihan5802@gmail.com</span>
                  </a>
                  <a href="tel:+8801683243077" className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-200 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm md:text-base">+880 16 8324 3077</span>
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm md:text-base">Shantibagh, Dhaka</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4 md:mt-0">
              <button 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </button>
              <a href="https://github.com/raihan5802" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/raihanc7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 border-b dark:border-gray-700 pb-4 justify-center md:justify-start">
          {['summary', 'projects', 'skills', 'achievements'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 md:px-5 py-2 rounded-lg transition-all text-sm md:text-base font-medium ${
                activeSection === section
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:gap-6">
          {activeSection === 'summary' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-white border-0 shadow-md overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl text-blue-600 dark:text-blue-400">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Data Scientist with hands-on experience developing recommendation systems and NLP applications, specializing in personalization models that deliver practical solutions. Demonstrated ability to independently process large-scale datasets and implement A/B testing frameworks for performance evaluation. Currently advancing skills in ML experimentation while building predictive modeling solutions at Synnax Lab. Recent graduate from North South University (CGPA: 3.23) with a passion for leveraging data-driven approaches to personalization and delivering measurable impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

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
                  <Card className="hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:text-white border-0 shadow-md h-full flex flex-col overflow-hidden group hover:translate-y-[-5px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg md:text-xl text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 transition-colors p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="mb-4 text-sm md:text-base text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                      <div className="space-y-4 flex-grow">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm md:text-base">Key Features:</h4>
                          <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-1">
                            {project.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                          {project.tech.slice(0, 5).map((tech) => (
                            <span key={tech} className="px-2 md:px-3 py-1 bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100 rounded-full text-xs md:text-sm border border-blue-100 dark:border-blue-800">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="px-2 md:px-3 py-1 bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm border border-gray-200 dark:border-gray-600">
                              +{project.tech.length - 5} more
                            </span>
                          )}
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
                  <Card className="hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:text-white border-0 shadow-md h-full hover:translate-y-[-5px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg md:text-xl text-blue-600 dark:text-blue-400">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span key={skill} className="px-2 md:px-3 py-1 bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-full text-xs md:text-sm transition-colors hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-800">
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
              <Card className="hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:text-white border-0 shadow-md overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl text-blue-600 dark:text-blue-400">Achievements & Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors hover:shadow-md"
                      >
                        <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm md:text-base">{achievement}</span>
                      </motion.div>
                    ))}
                    <div className="mt-6 pt-6 border-t dark:border-gray-600">
                      <h3 className="font-semibold mb-4 text-base md:text-lg text-blue-600 dark:text-blue-400">Certifications</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm md:text-base font-medium">Foundations of Data Science</span>
                            <span className="text-green-600 dark:text-green-400 text-sm md:text-base font-semibold">95.50%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '95.5%' }}></div>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm md:text-base font-medium">Foundations: Data, Data, Everywhere</span>
                            <span className="text-green-600 dark:text-green-400 text-sm md:text-base font-semibold">98.25%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.25%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
        
        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-6 mt-8">
          <p>© {new Date().getFullYear()} MD Raihan Chowdhury. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
