import React from 'react';

const Text = ({ as: Tag = 'p', children, ...props }) => (
  <Tag {...props}>{children}</Tag>
);

export { Text };