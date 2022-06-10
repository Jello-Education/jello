import React, { lazy } from 'react';

const Registration = lazy(() => import('../screens/Payments/Register'));
const Video = lazy(() => import('../screens/Payments/Video'));
const FormPayment = lazy(() => import('../screens/Payments/FormPayment'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [
  { path: '/payment/registration', element: () => <Registration /> },
  { path: '/payment/video', element: () => <Video /> },
  { path: '/payment/formofpayment', element: () => <FormPayment /> },
];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
