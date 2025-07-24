import "./App.css";
import { FallbackComponent } from "./components/fall-back";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { ThemeProvider } from "./context/theme-context/ThemeContext.js";
import UserContextProvider from "./context/UserContext/UserContextProvider.jsx";
import UseCallback from "./usecallback/callback";
import UseMemo from "./useMemo/memo";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => window.location.reload()}
    >
      <ThemeProvider>
        <UserContextProvider>
          {/* <h1>Context API</h1>
        <Login />
        <Profile /> */}
          {/* <UseMemo /> */}
          <UseCallback />
        </UserContextProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
