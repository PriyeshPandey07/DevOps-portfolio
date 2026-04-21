import { useState, useEffect } from 'react';
import { LucideIcon } from "lucide-react";
import { 
  Terminal, 
  Cloud, 
  GitBranch, 
  Server, 
  Mail, 
  ExternalLink,
  ChevronDown,
  CheckCircle,
  GraduationCap,
  Award,
  FolderOpen,
  User,
  FileDown
} from 'lucide-react';

// Custom SVG Icons for LinkedIn and GitHub
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Skill categories for Fresher DevOps
const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "EC2", "S3", "IAM", "Auto Scaling", "Load Balancer", "VPC"]
  },
  {
    name: "Containerization & Orchestration",
    icon: Server,
    skills: ["Docker", "Kubernetes", "Docker Compose"]
  },
  {
    name: "CI/CD & Automation",
    icon: GitBranch,
    skills: ["GitHub Actions", "Jenkins"]
  },
  {
    name: "Tools & Monitoring",
    icon: Terminal,
    skills: ["Git", "Linux", "Prometheus", "Grafana", "Terraform", "VS Code"]
  }
];

// Projects data - Academic/Learning projects for Fresher
const projects = [
  {
    title: "Dockerized Web Application",
    description: "Containerized a full-stack web application using Docker and Docker Compose. Set up multi-container environment with frontend, backend, and database services.",
    technologies: ["Docker", "Docker Compose", "Nginx", "Node.js", "MongoDB"],
    icon: FolderOpen,
    github: "https://github.com"
  },
  {
    title: "CI/CD Pipeline for DevOps Project",
    description: "Built an automated CI/CD pipeline using GitHub Actions with automated testing, build, and deployment workflows. Integrated code quality checks and security scanning.",
    technologies: ["GitHub Actions", "Git", "Jest", "Docker", "AWS S3"],
    icon: GitBranch,
    github: "https://github.com"
  },
  {
    title: "Infrastructure as Code with Terraform",
    description: "Created reusable Terraform modules to provision AWS infrastructure including EC2 instances, S3 buckets, and VPC networking. Implemented state management with remote backend.",
    technologies: ["Terraform", "AWS", "HCL", "VS Code"],
    icon: Server,
    github: "https://github.com"
  },
  {
    title: "Kubernetes Mini-Project",
    description: "Deployed and managed a sample microservices application on Minikube. Created YAML manifests for Deployments, Services, ConfigMaps, and implemented basic scaling.",
    technologies: ["Kubernetes", "Minikube", "kubectl", "YAML", "Docker"],
    icon: Cloud,
    github: "https://github.com"
  }
];

// Experience data - Internships and Training for Fresher
const experiences = [
  {
    role: "DevOps Intern",
    company: "HighSky IT Solutions",
    period: "Jan 2025 - June 2025",
    highlights: [
      "Assisted in maintaining CI/CD pipelines using Jenkins and GitHub Actions",
      "Learned containerization with Docker and Kubernetes basics",
      "Collaborated with senior engineers on cloud infrastructure tasks",
      "Trusted with responsibilities of AWS services (EC2, S3, IAM, Auto Scaling, Load Balancer, VPC)"
    ]
  },
  {
    role: "DevOps Training & Certification",
    company: "HighSky IT Training & Certifications",
    period: "May 2024 - January 2025",
    highlights: [
      "Completed comprehensive DevOps training program",
      "Hands-on experience with AWS, Docker, Kubernetes, Terraform",
      "Built multiple real-world projects as part of curriculum",
      "Implemented monitoring solutions with Prometheus & Grafana"
    ]
  },
  {
    role: "Bachelor's in Commerce",
    company: "Gujarat University",
    period: "2023 - 2026",
    highlights: [
      "I have completed my Bachelor’s degree in Commerce while actively building expertise in DevOps engineering.",
      "This combination allows me to understand both business requirements and scalable technical solutions."
    ]
  }
];

// Certifications - Entry-level relevant certifications
const certifications = [
  { name: "Red Hat Certified System Administrator", provider: "Red Hat" },
  { name: "Docker Fundamentals", provider: "Docker" },
  { name: "Kubernetes Essentials", provider: "CKAD Prep Course" },
  { name: "GitHub Actions Certification", provider: "GitHub (In Progress)" }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
              <Terminal className="w-8 h-8" />
              <span>DevOps</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${
                    activeSection === section ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, cyan 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="text-center z-10 px-6">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <User className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm">Fresher | Open to Work</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Priyesh Pandey
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4">
            Aspiring DevOps Engineer
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Passionate about automation, cloud technologies, and building scalable infrastructure. 
            Eager to start my DevOps career and contribute to innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              View My Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Tech Stack Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Git'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-72 h-72 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-white">2024</p>
                    <p className="text-slate-400">Fresh Graduate</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Enthusiastic DevOps Learner</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I recently completed DevOps Course. 
                During my studies, I developed a strong interest in DevOps practices and cloud technologies.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Through online courses, personal projects, and internships, I've built a solid foundation in 
                Docker, Kubernetes, CI/CD pipelines, and cloud platforms. I'm eager to apply my skills 
                in a professional environment and continue learning from experienced team members.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span key={cert.name} className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300">{cert.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Skills I've acquired through coursework, certifications, and hands-on projects
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.name}
                className="group p-8 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600 hover:border-cyan-500/50 rounded-lg text-sm text-slate-300 hover:text-cyan-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.role}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full -translate-x-1/2 shadow-lg shadow-cyan-500/50 z-10"></div>
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all">
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-center gap-2 text-slate-300 text-sm ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Hands-on projects I've built to practice and demonstrate my DevOps skills
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="group p-8 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm actively looking for DevOps opportunities and would love to connect with you. 
            Feel free to reach out for any discussions or questions!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:priyeshpandey0705@gmail.com"
              className="p-6 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-slate-400 text-sm">priyeshpandey0705@gmail.com</p>
            </a>
            <a 
              href="/pdf/Priyesh_Pandey_DevOps_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-purple-500/10 group"
            >
              <FileDown className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold">View Resume</p>
              <p className="text-slate-400 text-sm">Open in new tab</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/priyesh-pandey-7548b4282/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold">LinkedIn</p>
              <p className="text-slate-400 text-sm">Connect with me</p>
            </a>
            <a 
              href="https://github.com/PriyeshPandey07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <Github className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold">GitHub</p>
              <p className="text-slate-400 text-sm">View my repos</p>
            </a>
          </div>

          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">Looking for a DevOps Role!</h3>
            <p className="text-slate-400 mb-6">I'm ready to contribute and grow with your team.</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:priyeshpandey0705@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Contact Me
                <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href="/pdf/PriyeshPandeyResume.pdf" 
                download="Priyesh_Pandey_DevOps_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="text-slate-400">© 2024 Priyesh Pandey. Built with React & Tailwind</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/PriyeshPandey07" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/priyesh-pandey-7548b4282/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:priyeshpandey0705@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;