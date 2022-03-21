import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Text from '../typography/Text.component';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  logo: {
    width: '70px !important',
  },
}));

const PoweredBy = () => {
  const classes = useStyles();
  return (
    <button type="button" className={classes.wrapper}>
      <Text variant="body1" className={classes.text}>
        Powered by
      </Text>
    </button>
  );
};

export default PoweredBy;
