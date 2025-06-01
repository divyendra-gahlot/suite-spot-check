// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip"; // adjust imports if needed
import {Toaster} from "@/components/ui/toaster"; // adjust imports if needed
import { Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // import.meta.env.BASE_URL is injected by Vite at build time.
  // When you set `base: "/suite-spot-check/"` in vite.config.ts,
  // import.meta.env.BASE_URL === "/suite-spot-check/" in production.
  const basename = import.meta.env.BASE_URL;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            {/*
              Always keep your custom routes above the “catch-all” route.
              The “*” route will render <NotFound/> if no other route matches.
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
