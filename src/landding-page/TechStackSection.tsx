"use client";

import Image from "next/image";

export default function TechStackSection() {
  return (
    <section className="relative py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
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
                  <Image src="/icons/react-icon.svg" alt="React" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(77%) sepia(97%) saturate(1270%) hue-rotate(169deg) brightness(103%) contrast(101%)'}} />
                  <span className="text-gray-800 font-medium">React</span>
                </div>
              </div>

              {/* Framework */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Framework</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/nextdotjs.svg" alt="Next.js" width={20} height={20} />
                    <span className="text-gray-800 font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/vuedotjs.svg" alt="Vue.js" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(66%) sepia(47%) saturate(627%) hue-rotate(86deg) brightness(95%) contrast(89%)'}} />
                    <span className="text-gray-800 font-medium">Vue.js v2/v3</span>
                  </div>
                </div>
              </div>

              {/* Styling */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Styling</h4>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Image src="/icons/tailwindcss.svg" alt="Tailwind CSS" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(60%) sepia(83%) saturate(2307%) hue-rotate(164deg) brightness(97%) contrast(91%)'}} />
                  <span className="text-gray-800 font-medium">Tailwind CSS</span>
                </div>
              </div>

              {/* Language */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Language</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-black">JS</span>
                    </div>
                    <span className="text-gray-800 font-medium">JavaScript</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-black">TS</span>
                    </div>
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
                  <Image src="/icons/nodedotjs.svg" alt="Node.js" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(41%) sepia(98%) saturate(1207%) hue-rotate(86deg) brightness(95%) contrast(89%)'}} />
                  <span className="text-gray-800 font-medium">Node.js</span>
                </div>
              </div>

              {/* Framework */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Framework</h4>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Image src="/icons/express.svg" alt="Express.js" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(40%) sepia(15%) saturate(22%) hue-rotate(317deg) brightness(94%) contrast(86%)'}} />
                  <span className="text-gray-800 font-medium">Express.js</span>
                </div>
              </div>

              {/* Language */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Language</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/python.svg" alt="Python" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(1207%) hue-rotate(200deg) brightness(94%) contrast(97%)'}} />
                    <span className="text-gray-800 font-medium">Python</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/go.svg" alt="Go" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(60%) sepia(83%) saturate(2307%) hue-rotate(164deg) brightness(97%) contrast(91%)'}} />
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
                    <Image src="/icons/mysql-icon.svg" alt="MySQL" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(70%) sepia(42%) saturate(1370%) hue-rotate(15deg) brightness(101%) contrast(107%)'}} />
                    <span className="text-gray-800 font-medium">MySQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/mariadb.svg" alt="MariaDB" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1426%) hue-rotate(346deg) brightness(89%) contrast(114%)'}} />
                    <span className="text-gray-800 font-medium">MariaDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/postgresql.svg" alt="PostgreSQL" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(1207%) hue-rotate(200deg) brightness(94%) contrast(97%)'}} />
                    <span className="text-gray-800 font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/sqlite.svg" alt="SQLite" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(22%) hue-rotate(317deg) brightness(94%) contrast(86%)'}} />
                    <span className="text-gray-800 font-medium">SQLite</span>
                  </div>
                </div>
              </div>

              {/* NoSQL */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">NoSQL</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Image src="/icons/mongodb.svg" alt="MongoDB" width={20} height={20} style={{filter: 'brightness(0) saturate(100%) invert(53%) sepia(47%) saturate(627%) hue-rotate(86deg) brightness(95%) contrast(89%)'}} />
                    <span className="text-gray-800 font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-black">R</span>
                    </div>
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
