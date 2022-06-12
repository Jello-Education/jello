import React, { lazy } from 'react';

const Registration = lazy(() => import('../screens/Payments/Register'));
const Video = lazy(() => import('../screens/Payments/Video'));
const FormPayment = lazy(() => import('../screens/Payments/FormPayment'));
const Concluded = lazy(() => import('../screens/Payments/Concluded'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
});

const authRoutes = [
  { path: '/payment/registration', element: () => <Registration /> },
  { path: '/payment/video', element: () => <Video /> },
  { path: '/payment/formofpayment', element: () => <FormPayment /> },
  { path: '/payment/concluded', element: () => <Concluded /> },
];

const mappedAuthRoutes = authRoutes.map(addCommonProps);

export default mappedAuthRoutes;
