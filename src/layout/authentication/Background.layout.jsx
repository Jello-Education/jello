import React from 'react';
import Particles from 'react-particles-js';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bg: {
    position: 'fixed',
    height: '100%',
    left: '15%',
    filter: 'blur(150px) contrast(100%) saturate(100%) brightness(60%)',
  },
}));

const Background = ({ children, styleBg, bgImage, className }) => {
  const classes = useStyles();

  return (
    <div className={classes.signIn}>
      <img
        src={bgImage}
        alt="bg"
        className={`${classes.bg} ${className}`}
        style={styleBg}
      />
      <div style={{ opacity: 0.4 }}>
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 5,
                random: true,
              },
              move: {
                direction: 'bottom',
                out_mode: 'out',
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'remove',
                },
              },
            },
          }}
          style={{ position: 'fixed' }}
        />
      </div>
      {children}
    </div>
  );
};

export default Background;
