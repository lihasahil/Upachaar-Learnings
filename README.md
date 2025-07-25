# Upachaar Nepal Learnings

This repo consist of topics learned during my work for an intership as software Developer.

## Topics learned:

### 2025-7-25(Friday)

1. **Code Splitting:**
   Code Splitting is a technique to split your JavaScript bundle into smaller chunks that can be loaded on demand.
   Why?

   - Speeds up initial page load
   - Reduces the amount of JavaScript parsed/executed initially
   - Improves performance especially in large applications

2. **Lazy Loading:**
   Lazy loading means deferring the loading of a resource (component, image, data, etc.) until it's needed — improving the initial load performance of your app.
   Why Lazy Load?

   - Reduce initial bundle size
   - Load heavy or less-critical features only when necessary
   - Improve time to interactive (TTI) and core web vitals

3. **React Suspense:**
   Suspense is a built-in React component that allows you to pause rendering while waiting for something (like a lazy component or data) and show a fallback UI in the meantime.
   Why Suspense?

   - React’s default behavior is synchronous rendering — but what if a component takes time to load (e.g., network fetch, lazy-loaded component)? You don’t want to block the whole app — that’s where Suspense comes in.

4. **react-hook-form:**
   React Hook Form is a modern, performant library for managing forms in React applications.

5. **Zod:**
   Zod is a TypeScript-first schema declaration and validation library that provides a simple, declarative way to define and validate data structures.

### Task(2025-7-25) (Create auth forms like login, register and reset-password using react-hook-form and use zod validation)

<div style="display: flex; gap: 10px;">
  <img src="./public/login.png" alt="Login Form" width="300" />
  <img src="./public/register.png" alt="Register Form" width="300" />
  <img src="./public/reset.png" alt="Reset Password Form" width="300" />
</div>
### 2025-7-24(Thursday)

1. **Context-Api(2025-7-23):** The Context API in React allows you to:

- Create global state or functions
- Share them across components without prop drilling
  You define a context with createContext(), wrap your components with a Provider, and access it using useContext().

2. **useMemo(2025-7-24):** useMemo is a React hook that memoizes a computed value (like an object or result of an expensive calculation) and only recalculates it when its dependencies change.

3. **useCallback(2025-7-24):** useCallback(fn, deps) is a React Hook that:

- Memoizes a function.
- Returns the same function reference unless dependencies change.

4. **Error Boundary(2025-7-24):** In React, an Error Boundary is a component that catches JavaScript errors in its child component tree, logs those errors, and displays a fallback UI instead of crashing the whole app.

5. **Custom Hooks(2025-7-24):** In React, a custom hook is a reusable JavaScript function that uses React hooks (like useState, useEffect) to encapsulate and reuse logic across components.

---

### Task{2025-7-24}(To use custom hooks and error-boundary to show github users details using Github api)

- Fetched User

![UserFetch](./public/demo.png)

- Error when User Not Found

![Error](./public/demo1.png)

---
