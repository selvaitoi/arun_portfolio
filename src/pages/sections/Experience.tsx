
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("work");
  
  const experiences = [
    {
      company: "Northern Base Technologies LLP",
      role: "HR IT/Technical Recruiter",
      period: "2024 - Present",
      responsibilities: [
        "Source and recruit top IT talent for technical positions",
        "Conduct initial screening interviews and technical assessments",
        "Collaborate with hiring managers to define job requirements",
        "Develop and implement efficient recruitment strategies",
        "Maintain candidate database and track recruitment metrics",
        "Represent the company at recruitment events and job fairs"
      ],
      logo: "NB"
    },
    {
      company: "Jet Cool",
      role: "HR Intern",
      period: "2024",
      responsibilities: [
        "Assisted in recruitment and onboarding processes",
        "Managed employee documentation and records",
        "Supported HR team with administrative tasks",
        "Participated in employee engagement initiatives",
        "Helped with HR policy implementation"
      ],
      logo: "JC"
    },
    {
      company: "Vision Group of Retail Technologies",
      role: "Process Associate",
      period: "2022 - 2024",
      responsibilities: [
        "Managed customer service operations for retail clients",
        "Processed technical support requests and escalations",
        "Maintained accurate documentation of processes",
        "Collaborated with cross-functional teams",
        "Identified process improvement opportunities"
      ],
      logo: "VG"
    },
    {
      company: "B2C Technologies",
      role: "Process Associate",
      period: "2021 - 2022",
      responsibilities: [
        "Handled customer inquiries and service requests",
        "Processed customer data and maintained records",
        "Supported internal operations and team initiatives",
        "Contributed to process optimization efforts",
        "Assisted with technical documentation"
      ],
      logo: "B2C"
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
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                            {job.logo}
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
