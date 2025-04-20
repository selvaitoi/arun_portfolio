
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { SplashCursor } from "@/components/ui/splash-cursor";


// Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import PageTransition from "./components/layout/PageTransition";

// Page Sections
import Hero from "./pages/sections/Hero";
import About from "./pages/sections/About";
import Experience from "./pages/sections/Experience";
import Skills from "./pages/sections/Skills";
import Certifications from "./pages/sections/Certifications";
import Contact from "./pages/sections/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Main app component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SplashCursor />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Wrapper component to access location for AnimatePresence
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <div className="w-full">
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Certifications />
                    <Contact />
                  </div>
                </PageTransition>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
