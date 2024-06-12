import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { ThemeProvider } from "./providers/theme-provider";
// import { ProtectedAuth, ProtectedRoute } from "./utils/ProtectedRoutes";
import { AuthContextProvider } from "./context/auth-context";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AuthContextProvider>
            <div className="flex flex-col min-h-screen bg-background items-center   justify-center text-card-foreground">
              <div className="w-full px-4 sm:max-w-md">
                <Routes>
                  {/* <Route element={<ProtectedAuth />}> */}
                  <Route path="signup" element={<SignupPage />} />
                  <Route path="login" element={<LoginPage />} />
                  {/* </Route> */}
                </Routes>
              </div>

              {/* Header */}
              {/* If you have a header component, place it here */}
              {/* Main Content */}
              {/* <main className="flex-grow flex items-center justify-center"> */}
              <div className="w-full px-4 sm:max-w-md">
                <Routes>
                  {/* <Route element={<ProtectedRoute />}> */}
                  <Route path="feed" element={<FeedPage />} />
                  {/* </Route> */}
                </Routes>
              </div>

              {/* </main> */}
              {/* Footer */}
              {/* If you have a footer component, place it here */}
            </div>
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
