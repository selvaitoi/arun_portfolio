
import { cn } from "@/lib/utils";
import { ArrowUpRight, Search, Users, Monitor, Briefcase, ListChecks } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Recruitment Skills",
      icon: <Search className="h-6 w-6" />,
      skills: [
        { name: "Candidate Screening", level: 95 },
        { name: "Technical Interviewing", level: 90 },
        { name: "Salary Negotiation", level: 85 },
        { name: "ATS Management", level: 92 },
        { name: "Talent Sourcing", level: 95 },
        { name: "Candidate Relationship", level: 90 }
      ]
    },
    {
      title: "HR Management",
      icon: <Users className="h-6 w-6" />,
      skills: [
        { name: "Employee Engagement", level: 88 },
        { name: "Performance Management", level: 80 },
        { name: "Onboarding", level: 90 },
        { name: "Document Verification", level: 95 },
        { name: "HR Policy Implementation", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "LinkedIn Recruiter", level: 95 },
        { name: "Naukri", level: 90 },
        { name: "Indeed", level: 88 },
        { name: "Monster", level: 85 },
        { name: "Dice", level: 80 },
        { name: "Applicant Tracking Systems", level: 90 }
      ]
    }
  ];
  
  return (
    <div className="py-16" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Expertise
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My professional abilities and technical competencies
            </p>
          </div>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="glass-card glass-card-dark rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="animate-fade-in" style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress transition-all duration-1000 ease-out" 
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card glass-card-dark rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Industry Knowledge</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "IT Recruitment", "Software Development", "Cloud Technologies", 
                  "Technical Requirements", "Market Trends", "Candidate Assessment",
                  "Talent Acquisition", "Compensation Structures"
                ].map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-card glass-card-dark rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center mb-4">
                <ListChecks className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Specialized In</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Technical Role Recruitment", 
                  "Full Lifecycle Recruitment",
                  "International Talent Acquisition",
                  "IT Candidate Assessment",
                  "Strategic Sourcing"
                ].map((specialization, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-slate-700 dark:text-slate-200"
                  >
                    <ArrowUpRight className="h-4 w-4 text-blue-500 mr-2" />
                    {specialization}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
