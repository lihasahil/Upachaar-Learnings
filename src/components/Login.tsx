import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext/UserContext";
import ThemeContext from "../context/theme-context/ThemeContext";

function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: crypto.randomUUID(), // ✅ FIXED: id field is now included
      name: username,
      email: email,
    });
  };

  return (
    <div>
      <h2 className="text-background">Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
}

export default Login;
