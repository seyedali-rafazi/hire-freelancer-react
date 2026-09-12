"use client";
import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "../context/DarkModeContext";
import { AuthenticationProvider } from "../context/AuthenticationContex";
import { AddToFavouitProvider } from "../context/AddToFavouitContext";
import ScrollToTop from "../ui/ScroolToTop";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <DarkModeProvider>
      <AuthenticationProvider>
        <AddToFavouitProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster position="top-center" />
            <ScrollToTop />
            {children}
          </QueryClientProvider>
        </AddToFavouitProvider>
      </AuthenticationProvider>
    </DarkModeProvider>
  );
}
