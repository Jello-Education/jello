import React, { lazy } from 'react';

const SignIn = lazy(() => import('../screens/authentication/SignIn.screen'));
const SignUp = lazy(() => import('../screens/authentication/SignUp.screen'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [
  { path: '/signin', element: () => <SignIn /> },
  { path: '/signup', element: () => <SignUp /> },
];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
