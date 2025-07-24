import "./App.css";
import { ErrorFallback } from "./components/fall-back";
import { GitHubUserSearch } from "./components/GithubSearch";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { ThemeProvider } from "./context/theme-context/ThemeContext.js";
import UserContextProvider from "./context/UserContext/UserContextProvider.jsx";
import UseCallback from "./usecallback/callback";
import UseMemo from "./useMemo/memo";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <UserContextProvider>
          {/* <h1>Context API</h1>
        <Login />
        <Profile /> */}
          {/* <UseMemo /> */}
          {/*<UseCallback />*/}
          <GitHubUserSearch />
        </UserContextProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
