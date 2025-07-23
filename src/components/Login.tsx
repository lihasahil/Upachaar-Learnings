import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext/UserContext";
import ThemeContext from "../context/theme-context/ThemeContext";
function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2 className="text-background">Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
}

export default Login;
