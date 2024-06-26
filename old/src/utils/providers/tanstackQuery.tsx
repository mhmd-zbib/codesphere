"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface TanQueryProviderProps {
  children: React.ReactNode;
}

export default function TanStackQueryProvider({
  children,
}: TanQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
