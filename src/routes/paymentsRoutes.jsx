import React, { lazy } from 'react';

const Registration = lazy(() => import('../screens/Payments/Register'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [
  { path: '/payment/registration', element: () => <Registration /> },
];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
