import React, { lazy } from 'react';

import DefaultLayout from '../layout/Default';

const ComingSoon = lazy(() => import('../screens/ComingSoon'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
  layout: DefaultLayout,
});

const classRoutes = [{ path: '/coming', element: () => <ComingSoon /> }];

const mappedClassRoutes = classRoutes.map(addCommonProps);

export default mappedClassRoutes;
