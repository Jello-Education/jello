import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { izziStorage } from '../../resources/config';
import Text from '../typography/Text.component';

const izziLogo = `${izziStorage}/izzi/logo.png`;

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
    <button
      type="button"
      onClick={() => window.open('https://izzigaming.com.br', '_blank')}
      className={classes.wrapper}
    >
      <Text variant="body1" className={classes.text}>
        Powered by
      </Text>
      <img src={izziLogo} alt="Logo IZZI" className={classes.logo} />
    </button>
  );
};

export default PoweredBy;
