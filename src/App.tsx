import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Desktop from "./pages/Desktop";
import Mobile from "./pages/Mobile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import ErrorBoundary from "@/components/ErrorBoundary";

import { SupportPopup } from "./components/SupportPopup";
import { useState, useEffect } from "react";

const App = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    const hasSeenSupport = localStorage.getItem("support-shown");
    if (!hasSeenSupport) {
      const timer = setTimeout(() => {
        setIsSupportOpen(true);
        localStorage.setItem("support-shown", "1");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/desktop" element={<Desktop />} />
              <Route path="/mobile" element={<Mobile />} />
              {/* Support route removed in favor of popup, but keeping if direct access needed? User asked to "pop up" on home page and "button opens popup" */}
              {/* <Route path="/support" element={<Support />} />  <- Removing this per plan "Modify global support button to open popup instead of navigation" */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <button
              onClick={() => setIsSupportOpen(true)}
              className="fixed bottom-6 right-6 z-50
              bg-white/10 backdrop-blur-xl border border-white/20
              px-5 py-2 rounded-full text-sm hover:bg-white/20 transition cursor-pointer"
            >
              Support
            </button>

            <SupportPopup
              isOpen={isSupportOpen}
              onOpenChange={setIsSupportOpen}
            />
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
