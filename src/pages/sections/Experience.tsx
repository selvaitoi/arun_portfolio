
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("work");

  const experiences = [
    {
      company: "Northern Base Technologies LLP",
      role: "HR Recruiter",
      period: "2024 - Present",
      responsibilities: [
      ],
      logo: "NB.jpg"
    },
    {
      company: "Vision Group of Retail Technologies",
      role: "Process Associate",
      period: "2022 - 2024",
      responsibilities: [

      ],
      logo: "/logo_vg.png"
    },
    {
      company: "B2C Technologies",
      role: "Process Associate",
      period: "2021 - 2022",
      responsibilities: [

      ],
      logo: "B2C.png"
    }
  ];

  return (
    <div className="py-16" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              My Experience
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A journey through my professional career
            </p>
          </div>

          <div className="mb-12 animate-fade-in">
            <nav className="flex border-b border-blue-100 dark:border-blue-900/30">
              <button
                onClick={() => setActiveTab("work")}
                className={cn(
                  "py-4 px-6 text-sm font-medium transition-colors",
                  activeTab === "work"
                    ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                )}
              >
                <Briefcase className="h-4 w-4 inline mr-2" />
                Work Experience
              </button>
            </nav>
          </div>

          <div className="animate-fade-in">
            {activeTab === "work" && (
              <div className="space-y-6">
                {experiences.map((job, index) => (
                  <div
                    key={index}
                    className="timeline-item animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="glass-card glass-card-dark rounded-xl p-6 mb-2 ml-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center">
                          <div className=" w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            {job.logo === "JC" ? (
                              <span className="text-xl font-semibold">{job.logo}</span>
                            ) : (
                              <img src={job.logo} alt="Logo" className="w-16 h-16 object-contain" />
                            )}
                          </div>


                          <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.company}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">{job.role}</p>
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {job.period}
                          </span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 pl-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start text-slate-700 dark:text-slate-200">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
