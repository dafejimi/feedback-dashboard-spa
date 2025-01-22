import React from "react";


const Button = ({ children, isLoading, ...props }) => (
  <button
    {...props}
    disabled={isLoading}
    className={`rounded-md px-4 py-2 text-white ${isLoading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}`}
  >
    {isLoading ? 'Processing...' : children}
  </button>
);

export { Button };
