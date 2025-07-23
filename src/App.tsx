import "./App.css";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { ThemeProvider } from "./context/theme-context/ThemeContext.js";
import UserContextProvider from "./context/UserContext/UserContextProvider.jsx";

function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <h1>Context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
