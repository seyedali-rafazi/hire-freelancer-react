import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../src/pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./feachures/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmitedProjects from "./pages/SubmitedProjects";
import FreelancerLauout from "./feachures/freelancer/FreelancerLauout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./feachures/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./ui/Users";
import RecomendedProjects from "./pages/RecomendedProjects";
import SendedProposals from "./pages/SendedProposals";
import FavouritProjects from "./pages/FavouritProjects";
import { AddToFavouitProvider } from "./context/AddToFavouitContext";
import { AuthenticationProvider } from "./context/AuthenticationContex";
import RegisterOrder from "./pages/RegisterOrder";
import EditProfile from "./feachures/authentication/EditProfile";
import ScrollToTop from "./ui/ScroolToTop";
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <AuthenticationProvider>
        <AddToFavouitProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
            <ScrollToTop />
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/complete-profile" element={<CompleteProfile />} />
              <Route path="/owner" element={<OwnerLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <OwnerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<Project />} />
              </Route>
              <Route
                path="/freelancer"
                element={
                  <ProtectedRoute>
                    <FreelancerLauout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<FreelancerDashboard />} />
                <Route path="proposals" element={<Proposals />} />
                <Route path="projects" element={<SubmitedProjects />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="proposals" element={<Proposals />} />
                <Route path="projects" element={<SubmitedProjects />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route
                path="/recomended-projects"
                element={<RecomendedProjects />}
              />
              <Route path="/sended-proposals" element={<SendedProposals />} />
              <Route path="/favourit-projects" element={<FavouritProjects />} />
              <Route path="/order-project" element={<RegisterOrder />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </QueryClientProvider>
        </AddToFavouitProvider>
      </AuthenticationProvider>
    </DarkModeProvider>
  );
}

export default App;
