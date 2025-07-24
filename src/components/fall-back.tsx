import React from "react";

export const ErrorFallback: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
}> = ({ error, resetErrorBoundary }) => (
  <div
    role="alert"
    className="p-4 bg-red-100 border border-red-400 rounded max-w-md mx-auto mt-10"
  >
    <p className="text-red-700 font-semibold mb-2">Something went wrong:</p>
    <pre className="text-sm text-red-600">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Try Again
    </button>
  </div>
);
