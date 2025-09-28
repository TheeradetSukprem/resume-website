"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/default.jpg",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Responsive design with modern UI/UX",
        "Real-time data synchronization",
        "Advanced filtering and search functionality",
        "Mobile-first approach"
      ]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/default.jpg",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express"],
      features: [
        "RESTful API integration",
        "User authentication system",
        "Dashboard with analytics",
        "Progressive Web App features"
      ]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
      image: "/default.jpg",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      features: [
        "Microservices architecture",
        "Automated testing and CI/CD",
        "High-performance data processing",
        "Scalable cloud deployment"
      ]
    },
    {
      id: 4,
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
      image: "/default.jpg",
      technologies: ["Go", "Redis", "MySQL", "Docker"],
      features: [
        "High-performance backend services",
        "Real-time WebSocket connections",
        "Caching optimization strategies",
        "Load balancing and monitoring"
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject) || projects[0];

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            Projects
          </h2>
          <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcase of my latest work and creative solutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <div className="lg:w-[30%] space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`cursor-pointer bg-white shadow-lg border rounded-xl p-4 transition-all duration-300 hover:shadow-xl ${
                  selectedProject === project.id 
                    ? 'border-cyan-400/50 shadow-cyan-100' 
                    : 'border-gray-200 hover:border-cyan-400/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold transition-colors duration-300 ${
                    selectedProject === project.id
                      ? 'bg-cyan-500/20 text-cyan-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {project.id}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      selectedProject === project.id
                        ? 'text-cyan-600'
                        : 'text-gray-800'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-[70%] bg-white shadow-lg border border-gray-200 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {currentProject.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-cyan-700 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  View Live Demo
                </button>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-700 font-semibold transition-all duration-300">
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}