
import PageTransition from "@/components/layout/PageTransition";
import { Award, BookOpen, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Naukri Maestro Recruiter",
      issuer: "Naukri.com",
      date: "February 2025",
      description: "Advanced certification in technical recruitment strategies and talent acquisition."
    }
  ];
  
  const education = [
    {
      degree: "MBA – Human Resource & Operations",
      institution: "Anna University",
      year: "2024",
      description: "Specialized in HR management and business operations with focus on talent acquisition strategies."
    },
    {
      degree: "BA – English Literature",
      institution: "University of Madras",
      year: "2022",
      description: "Developed strong communication and analytical skills through literary studies."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "State Board of Education",
      year: "2017",
      description: "Completed higher secondary education with focus on general studies."
    }
  ];
  
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Certifications & Education
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                My academic background and professional credentials
              </p>
            </div>
            
            <div className="mb-16 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Professional Certifications
                </h2>
              </div>
              
              <div className="glass-card glass-card-dark rounded-xl">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className={`p-6 ${index !== certifications.length - 1 ? 'border-b border-blue-100 dark:border-blue-900/30' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Issued by {cert.issuer}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-700 dark:text-slate-300">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Education
                </h2>
              </div>
              
              <div className="glass-card glass-card-dark rounded-xl">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`p-6 ${index !== education.length - 1 ? 'border-b border-blue-100 dark:border-blue-900/30' : ''} animate-fade-in`}
                    style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {edu.year}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-700 dark:text-slate-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-slate-600 dark:text-slate-300 italic">
                "Continuous learning is the key to staying relevant in the ever-evolving field of technical recruitment."
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certifications;
