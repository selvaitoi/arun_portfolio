
import { ChevronRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-24 pb-16" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
          <div className="mt-10 lg:mt-0 lg:w-7/12 animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                Human Resources
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Hi, I'm <span className="text-gradient">Arun Stelin</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              Human Resources Professional with 3+ Years of Proven Success in Global Talent Acquisition, End-to-End Recruitment, and Strategic Workforce Planning
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg shadow-sm transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </div>
          </div>

      <div className="lg:w-5/12 flex justify-center lg:justify-end">
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-xl animate-fade-in">
    {/* Blue background circle */}
    <div className="absolute inset-0 w-full h-full bg-blue-500" />
    {/* Profile image on top */}
    <img
      src="/image.jpg"
      alt="Profile"
      className="object-cover w-full h-full rounded-full relative"
    />
  </div>
</div>


        </div>

        <div className="mt-20 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Work With Me?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I specialize in connecting top IT talent with organizations that value innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "HR Management",
                description: "Comprehensive skills in employee engagement and HR operations.",
                icon: "📊"
              },
              {
                title: "Global Experience",
                description: "Experience with international recruitment across multiple countries.",
                icon: "🌎"
              }

            ].map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-dark rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
            {[

              {
                title: "Industry Background",
                description: "Retail Technology,BPO",
                icon: "🔍"
              },

            ].map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-dark rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <ul className="list-disc pl-5 text-sm text-blue-700 dark:text-blue-300">
                  {[
                    "Retail Technology",
                    "Business Processing Outsourcing (BPO)",
                    "Staffing & Recruitment"
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-32 text-center">
          <a
            href="#experience"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            View My Experience
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
