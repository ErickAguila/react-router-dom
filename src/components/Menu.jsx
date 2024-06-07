import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth();

  if (!auth.user)
    return (
      <nav>
        <ul>
          {routes.map((route) => {
            if (route.publicOnly && auth.user) return null;
            if (route.private && !auth.user) return null;

            return (
              <li key={route.to}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </li>
            );
          })}

          {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}
          {/* <li>
          <NavLink
            className={() => ""}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={() => ""}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={() => ""}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li> */}
        </ul>
      </nav>
    );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  publicOnly: true,
  private: false,
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});

export default Menu;
