import React, { lazy } from 'react';

const SignIn = lazy(() => import('../screens/SignIn'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [{ path: '/signin', element: () => <SignIn /> }];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
