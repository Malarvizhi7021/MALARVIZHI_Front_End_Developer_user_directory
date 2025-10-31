import React, { useEffect, useState } from "react";
import "./styles.css";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  // 🧭 Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 📦 Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-top">
          <h1 className="app-title">🌌 User Directory</h1>
        </div>
        <div className="navbar-bottom">
          <SearchBar setSearch={setSearch} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      {loading ? (
        <div className="grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="user-card shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-line short"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
