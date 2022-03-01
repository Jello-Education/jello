import React, { lazy } from 'react';

import DefaultLayout from '../layout/Default';

const Class = lazy(() => import('../screens/Class'));
const Lesson = lazy(() => import('../screens/Lesson'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
  layout: DefaultLayout,
});

const classRoutes = [
  { path: '/classes', element: () => <Class /> },
  { path: '/classes/:classId', element: () => <Lesson /> },
  { path: '/classes/:classId/lessons/:lessonId', element: () => <Lesson /> },
  { path: '/library/:lessonId', element: () => <Lesson /> },
];

const mappedClassRoutes = classRoutes.map(addCommonProps);

export default mappedClassRoutes;
