import React, { lazy } from 'react';

const About = lazy(() => import('../screens/Producer/About/index'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [
  { path: '/producer', element: () => <About /> },
];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
