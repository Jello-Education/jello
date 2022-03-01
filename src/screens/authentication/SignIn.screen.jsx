import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  section: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}));

const SignIn = () => {
  const [loading, setLoading] = useState();

  return (
    <div>
      <p>SignIn</p>
    </div>
  );
};

export default SignIn;
