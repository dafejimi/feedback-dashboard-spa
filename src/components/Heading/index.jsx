import React from 'react';

const Heading = ({ level, children, ...props }) => {
  const Tag = `h${level}`;
  return <Tag {...props}>{children}</Tag>;
};

export { Heading };