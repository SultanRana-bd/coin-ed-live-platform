
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Modules } from "./pages/Modules";
import { Sessions } from "./pages/Sessions";
import { Educators } from "./pages/Educators";
import { EducatorProfilePage } from "./pages/EducatorProfile";
import { Charts } from "./pages/Charts";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Mock authentication state - in real app this would come from auth context
  const mockUser = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes - wrapped in Layout */}
            <Route path="/dashboard" element={
              <Layout isAuthenticated={true} user={mockUser}>
                <Dashboard />
              </Layout>
            } />
            <Route path="/modules" element={
              <Layout isAuthenticated={true} user={mockUser}>
                <Modules />
              </Layout>
            } />
            <Route path="/sessions" element={
              <Layout isAuthenticated={true} user={mockUser}>
                <Sessions />
              </Layout>
            } />
            <Route path="/educators" element={
              <Layout isAuthenticated={true} user={mockUser}>
                <Educators />
              </Layout>
            } />
            <Route path="/educator/:id" element={
              <Layout isAuthenticated={true} user={mockUser}>
                <EducatorProfilePage />
              </Layout>
            } />
            <Route path="/charts" element={
              <Layout isAuthenticated={true} user={mockUser}>
                <Charts />
              </Layout>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
