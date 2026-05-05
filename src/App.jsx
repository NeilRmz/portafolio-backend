import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

    // Modo Oscuro

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Proyectos
  const projects = [
    {
      title: "CosFans",
      description: "Plataforma exclusiva para cosplayers con procesamiento de pagos, suscripciones y galería privada.",
      tech: ["FastAPI", "Stripe", "PostgreSQL", "Docker", "Redis"],
      github: "https://github.com/NeilRmz",
      demo: ""
    },
    {
      title: "Dashboard",
      description: "Sistema integral para gestión de inventario, ventas, rutas de entrega y analytics en tiempo real.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Chart.js"],
      github: "https://github.com/NeilRmz",
      demo: ""
    },
    {
      title: "Portafolio Fotógrafo Profesional",
      description: "Web de presentación con galería dinámica, sistema de cotizaciones y booking de sesiones.",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/NeilRmz",
      demo: ""
    },
    {
      title: "Calculadora Métodos Numéricos",
      description: "Herramienta avanzada derivada de mi experiencia en física teórica. Resuelve EDOs, sistemas lineales y ecuaciones no lineales.",
      tech: ["Python", "NumPy", "SciPy", "React", "FastAPI"],
      github: "https://github.com/NeilRmz",
      demo: ""
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
      {/* HEADER - RESPONSIVO */}
      <header className="fixed top-0 right-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-green-600 dark:text-green-400">
            Daniel Ramírez
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BsSun size={18} className="sm:w-5 sm:h-5" /> : <BsMoon size={18} className="sm:w-5 sm:h-5" />}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT (RESPONSIVO CON BUENOS MÁRGENES) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        
        {/* HERO SECTION */}
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Backend Developer
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
            Físico teórico de formación, backend de profesión. Mi código no compite: simplemente sigue reglas más estrictas. Las mías.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Backend sólido • React • Servidores Linux
          </p>

          {/* SOCIAL ICONS (RESPONSIVOS) */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            <a href="https://github.com/NeilRmz" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaGithub size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
            </a>
            <a href="https://www.linkedin.com/in/neilrmz/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaLinkedin size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaTwitter size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
            </a>
            <a href="mailto:danmrmz@proton.me" className="hover:scale-110 transition-transform">
              <FaEnvelope size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
            </a>
          </div>
        </section>

        {/* (SECCIÓN DE PROYECTOS)*/}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-white">
            Mis Proyectos
          </h3>
          
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h4>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <FaGithub size={14} className="sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={14} className="sm:w-4 sm:h-4" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500 to-green-700 text-white shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">¿Necesitas un backend robusto?</h3>
          <p className="text-sm sm:text-base mb-3 sm:mb-4">Disponible para proyectos freelance</p>
          <a 
            href="mailto:danmrmz@proton.me" 
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-green-700 font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
          >
            <FaBriefcase size={14} className="sm:w-4 sm:h-4" />
            Contrátame
          </a>
        </section>
        
      </main>
    </div>
  );
}

export default App;