import React, { lazy } from 'react';

const SignIn = lazy(() => import('../screens/SignIn'));
const SignUp = lazy(() => import('../screens/SignUp'));

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
