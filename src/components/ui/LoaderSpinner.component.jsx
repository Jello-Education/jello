import React from 'react';
import LoaderSpinnerComponent from 'react-loader-spinner';

import { useTheme } from '@material-ui/core/styles';

const LoaderSpinner = ({
  width = 80,
  height = 80,
  className = '',
  style = {},
}) => {
  const theme = useTheme();

  return (
    <LoaderSpinnerComponent
      type="ThreeDots"
      color={theme.palette.primary.main}
      height={height}
      width={width}
      className={className}
      style={style}
    />
  );
};

export default LoaderSpinner;
