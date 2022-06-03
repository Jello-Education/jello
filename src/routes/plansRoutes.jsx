import React, { lazy } from 'react';

const Plans = lazy(() => import('../screens/Plans'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [{ path: '/plans', element: () => <Plans /> }];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
