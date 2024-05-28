import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { ThemeProvider } from "./providers/theme-provider";
import LoginPage from "./pages/LoginPage";

// Create a query client instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-background items-center justify-center text-card-foreground">
            {/* Header */}
            {/* If you have a header component, place it here */}
            {/* Main Content */}

            {/* <main className="flex-grow flex items-center justify-center"> */}

            <div className="w-full px-4 sm:max-w-md">
              <Routes>
                <Route path="signup" element={<SignupPage />} />
                <Route path="login" element={<LoginPage />} />
              </Routes>
            </div>

            {/* </main> */}
            {/* Footer */}
            {/* If you have a footer component, place it here */}
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
