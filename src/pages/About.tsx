
import PageTransition from "@/components/layout/PageTransition";
import { Download, Award, Check, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Get to know more about my background and professional journey
              </p>
            </div>

            <div className="glass-card glass-card-dark rounded-xl p-8 mb-12 animate-fade-in">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Career Objective
              </h2>
              <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                Dedicated HR - IT/Technical Recruiter with a passion for connecting top-tier technical talent with innovative organizations. I leverage my expertise in recruitment processes, technical understanding, and interpersonal skills to identify and secure the best candidates for challenging roles across the IT sector.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                My goal is to contribute to organizational growth by building high-performing teams through strategic talent acquisition, relationship building, and effective candidate assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card glass-card-dark rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center mb-4">
                  <Award className="text-blue-600 dark:text-blue-400 h-6 w-6 mr-3" />
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Key Strengths
                  </h2>
                </div>
                <div className="pl-2">
                  {[
                    "Leadership & Initiative",
                    "Excellent Communication",
                    "Team Collaboration",
                    "Negotiation Skills",
                    "Candidate Relationship Building",
                    "Technical Role Understanding"
                  ].map((strength, index) => (
                    <div key={index} className="flex items-start mb-3">
                      <Check className="text-blue-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card glass-card-dark rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-4">
                  <Globe className="text-blue-600 dark:text-blue-400 h-6 w-6 mr-3" />
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Languages
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "English", level: "Proficient", percent: 95 },
                    { name: "Tamil", level: "Native", percent: 100 },
                    { name: "Hindi", level: "Beginner", percent: 40 },
                    { name: "Arabic", level: "Beginner", percent: 30 }
                  ].map((language, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 dark:text-slate-200 font-medium">
                          {language.name}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 text-sm">
                          {language.level}
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress transition-all duration-1000" 
                          style={{ width: `${language.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-dark rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 dark:text-blue-400 h-6 w-6 mr-3" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Personal Interests
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-200 mb-4 leading-relaxed">
                Outside of my professional life, I enjoy staying updated with the latest technology trends, participating in HR networking events, and contributing to online recruiting communities. I'm passionate about continuous learning and regularly attend webinars and workshops to enhance my recruitment techniques.
              </p>
            </div>

            <div className="text-center mt-10">
              <a 
                href="./public/ArunStelin.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
