import React from 'react';

const Input = ({ as: Tag = 'input', ...props }) => {
  if (Tag === 'textarea') {
    return <textarea {...props} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />;
  }
  return <input {...props} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />;
};

export { Input };