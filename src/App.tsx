
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Index from "./pages/Index";
import Desktop from "./pages/Desktop";
import Mobile from "./pages/Mobile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import ErrorBoundary from "@/components/ErrorBoundary";

import Support from "./pages/Support";
import { SupportPopup } from "./components/SupportPopup";

import { Analytics } from "@vercel/analytics/react";

const App = () => {
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
              <Route path="/support" element={<Support />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <SupportPopup />

            <Link
              to="/support"
              className="fixed bottom-6 right-6 z-50
              bg-white/10 backdrop-blur-xl border border-white/20
              px-5 py-2 rounded-full text-sm hover:bg-white/20 transition cursor-pointer text-white no-underline"
            >
              Support
            </Link>
            <Analytics />
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
