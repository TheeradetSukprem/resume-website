"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const { t, i18n, ready } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(1);
  
  // Wait for i18n to be ready
  if (!ready) {
    return null;
  }

  const projects = useMemo(() => [
    {
      id: 1,
      title: t("projects.items.oms.title"),
      description: t("projects.items.oms.description"),
      image: "/kdr/KDR.jpg",
      technologies: ["React.js", "Tailwind CSS", "Chart.js", "REST API"],
      features: [
        t("projects.items.oms.features.0"),
        t("projects.items.oms.features.1"),
        t("projects.items.oms.features.2")
      ]
    },
    {
      id: 2,
      title: t("projects.items.driverTask.title"),
      description: t("projects.items.driverTask.description"),
      image: "/kdr/KDR.jpg",
      images: [
        "/kdr/KDR.jpg",
        "/kdr/mobile/mobile-app-1.png",
        "/kdr/mobile/mobile-app-2.png",
        "/kdr/mobile/mobile-app-3.png",
        "/kdr/mobile/mobile-app-4.png"
      ],
      useSwiper: true,
      technologies: ["LIFF (LINE Front-end Framework)", "Figma", "UI/UX Design"],
      features: [
        t("projects.items.driverTask.features.0"),
        t("projects.items.driverTask.features.1"),
        t("projects.items.driverTask.features.2")
      ]
    },
    {
      id: 3,
      title: t("projects.items.itAsset.title"),
      description: t("projects.items.itAsset.description"),
      image: "/kdr/KDR.jpg",
      technologies: ["Next.js", "TypeScript", "MySQL", "Prisma"],
      features: [
        t("projects.items.itAsset.features.0"),
        t("projects.items.itAsset.features.1"),
        t("projects.items.itAsset.features.2")
      ]
    },
    {
      id: 4,
      title: t("projects.items.pmis.title"),
      description: t("projects.items.pmis.description"),
      image: "/default.jpg",
      technologies: ["Golang", "Nuxt.js", "MySQL", "python"],
      features: [
        t("projects.items.pmis.features.0"),
        t("projects.items.pmis.features.1"),
        t("projects.items.pmis.features.2")
      ]
    },
    {
      id: 5,
      title: t("projects.items.mula.title"),
      description: t("projects.items.mula.description"),
      image: "/default.jpg",
      technologies: ["Golang", "Nuxt.js", "MySQL"],
      features: [
        t("projects.items.mula.features.0"),
        t("projects.items.mula.features.1")
      ]
    }
  ], [t, i18n.language]);

  const currentProject = projects.find(p => p.id === selectedProject) || projects[0];

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/30 text-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            {t("projects.title")}
          </h2>
          <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
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
                {currentProject.useSwiper && currentProject.images ? (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      className="h-full w-full rounded-xl"
                    >
                      {currentProject.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative w-full h-full">
                            <Image
                              src={img}
                              alt={`${currentProject.title} - Slide ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 70vw"
                              className={index === 0 ? "object-cover" : "object-contain"}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      width={600}
                      height={340}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("projects.technologiesUsed")}</h3>
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("projects.keyFeatures")}</h3>
                <ul className="space-y-2">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}