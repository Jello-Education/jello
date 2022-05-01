import React, { lazy } from 'react';

import DefaultLayout from '../layout/Default';

const ComingSoon = lazy(() => import('../screens/ComingSoon'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
  layout: DefaultLayout,
});

const comingRoutes = [{ path: '/coming', element: () => <ComingSoon /> }];

const mappedComingRoutes = comingRoutes.map(addCommonProps);

export default mappedComingRoutes;
