"use client";

import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGo,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiRedis
} from "react-icons/si";

export default function TechStackSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40 text-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            Tech Stack
          </h2>
          <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>

        {/* Skills Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Frontend */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">FE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Frontend</h3>
              <p className="text-gray-600 text-sm">User Interface & Experience</p>
            </div>
            
            <div className="space-y-5">
              {/* Library */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Library</h4>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <SiReact className="text-2xl text-[#61DAFB]" />
                  <span className="text-gray-800 font-medium">React</span>
                </div>
              </div>

              {/* Framework */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Framework</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiNextdotjs className="text-2xl text-[#000000]" />
                    <span className="text-gray-800 font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiVuedotjs className="text-2xl text-[#4FC08D]" />
                    <span className="text-gray-800 font-medium">Vue.js v2/v3</span>
                  </div>
                </div>
              </div>

              {/* Styling */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Styling</h4>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <SiTailwindcss className="text-2xl text-[#06B6D4]" />
                  <span className="text-gray-800 font-medium">Tailwind CSS</span>
                </div>
              </div>

              {/* Language */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Language</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiJavascript className="text-2xl text-[#F7DF1E]" />
                    <span className="text-gray-800 font-medium">JavaScript</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiTypescript className="text-2xl text-[#3178C6]" />
                    <span className="text-gray-800 font-medium">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">BE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Backend</h3>
              <p className="text-gray-600 text-sm">Server & API Development</p>
            </div>
            
            <div className="space-y-5">
              {/* Runtime */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Runtime</h4>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <SiNodedotjs className="text-2xl text-[#339933]" />
                  <span className="text-gray-800 font-medium">Node.js</span>
                </div>
              </div>

              {/* Framework */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Framework</h4>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <SiExpress className="text-2xl text-[#000000]" />
                  <span className="text-gray-800 font-medium">Express.js</span>
                </div>
              </div>

              {/* Language */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Language</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiPython className="text-2xl text-[#3776AB]" />
                    <span className="text-gray-800 font-medium">Python</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiGo className="text-2xl text-[#00ADD8]" />
                    <span className="text-gray-800 font-medium">Go</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">DB</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Database</h3>
              <p className="text-gray-600 text-sm">Data Storage & Management</p>
            </div>
            
            <div className="space-y-5">
              {/* SQL */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">SQL</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiMysql className="text-2xl text-[#4479A1]" />
                    <span className="text-gray-800 font-medium">MySQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiMariadb className="text-2xl text-[#003545]" />
                    <span className="text-gray-800 font-medium">MariaDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiPostgresql className="text-2xl text-[#4169E1]" />
                    <span className="text-gray-800 font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiSqlite className="text-2xl text-[#003B57]" />
                    <span className="text-gray-800 font-medium">SQLite</span>
                  </div>
                </div>
              </div>

              {/* NoSQL */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">NoSQL</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiMongodb className="text-2xl text-[#47A248]" />
                    <span className="text-gray-800 font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <SiRedis className="text-2xl text-[#DC382D]" />
                    <span className="text-gray-800 font-medium">Redis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
