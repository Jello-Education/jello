import React from 'react';

import { Typography } from '@material-ui/core';

const Text = ({
  children,
  color = 'textPrimary',
  variant = 'body1',
  className,
  ...props
}) => (
  <Typography color={color} variant={variant} className={className} {...props}>
    {children}
  </Typography>
);

export default Text;
