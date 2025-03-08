
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Phone, Send, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "knightarun7@gmail.com",
      link: "mailto:knightarun7@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "arun-stelin-b9b2812a2",
      link: "https://linkedin.com/in/arun-stelin-b9b2812a2/"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 XXX-XXX-XXXX",
      link: "#"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Have a job opportunity or want to discuss recruitment solutions? I'd love to hear from you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 animate-fade-in">
                <div className="glass-card glass-card-dark rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {item.label}
                          </p>
                          <a 
                            href={item.link} 
                            target={item.link.startsWith("http") ? "_blank" : "_self"} 
                            rel="noopener noreferrer"
                            className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-blue-100 dark:border-blue-900/30">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex space-x-4">
                      <a 
                        href="mailto:knightarun7@gmail.com" 
                        className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/arun-stelin-b9b2812a2/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="glass-card glass-card-dark rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                    Send Me a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border-blue-100 dark:border-blue-900/30 focus:border-blue-300 dark:focus:border-blue-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="johndoe@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border-blue-100 dark:border-blue-900/30 focus:border-blue-300 dark:focus:border-blue-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800/20 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can I help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border-blue-100 dark:border-blue-900/30 focus:border-blue-300 dark:focus:border-blue-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800/20 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full border-blue-100 dark:border-blue-900/30 focus:border-blue-300 dark:focus:border-blue-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800/20 transition-all"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
