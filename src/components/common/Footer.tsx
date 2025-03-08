
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto bg-white dark:bg-slate-900 border-t border-blue-100 dark:border-blue-900/30 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Arun Stelin. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:knightarun7@gmail.com" 
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/arun-stelin-b9b2812a2/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
