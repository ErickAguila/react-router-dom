import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import { AuthRoute } from "./components/auth";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
