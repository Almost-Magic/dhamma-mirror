import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { CrisisBar } from "@/components/CrisisBar";
import Landing from "./pages/Landing";
import Mirror from "./pages/Mirror";
import Vault from "./pages/Vault";
import Suttas from "./pages/Suttas";
import Pali from "./pages/Pali";
import Practice from "./pages/Practice";
import About from "./pages/About";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/*
        GitHub Pages hosts this app under a repo subpath (e.g. /dhamma-mirror/).
        Using Vite's BASE_URL as the router basename keeps routes working in production.
      */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen flex flex-col">
          <CrisisBar />
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/mirror" element={<Mirror />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/suttas" element={<Suttas />} />
              <Route path="/pali" element={<Pali />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
