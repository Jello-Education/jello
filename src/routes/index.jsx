import React, { Suspense, useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';

import { version } from '../../package.json';
import Loader from '../components/ui/Loader.component';
import requester from '../resources/requester';
import { mapRouteObject } from '../utils/routes.utils';
import setToast from '../utils/toast.utils';
import authRoutes from './authenticationRoutes';
import classRoutes from './comingSoonRoutes';

const jelloVersion = `jello-${version}`;

const routeObjects = [...authRoutes, ...classRoutes];
const mappedRoutes = routeObjects.map(mapRouteObject);

const AppRoutes = () => {
  const navigate = useNavigate();
  const byPassRoutes = ['coming', 'signin', 'signup', 'classe'];
  const token = localStorage.getItem(`${jelloVersion}-token`);
  const path = window.location.pathname;

  useEffect(async () => {
    const url = new URL(window.location.href);
    const urlToken = url.searchParams.get('token');
    const resignin = url.searchParams.get('resignin');

    if (!token && urlToken && resignin) {
      localStorage.setItem(`${jelloVersion}-token`, urlToken);
      const [, response] = await requester('GET', `/v1/public/auth/resignin`);
      if (response.status === 200) {
        localStorage.setItem(`${jelloVersion}-token`, response.data.token);
        localStorage.setItem(
          `${jelloVersion}-user`,
          JSON.stringify(response.data.user)
        );
        window.history.replaceState(null, null, window.location.pathname);
        window.location.reload();
      }
    } else {
      window.history.replaceState(null, null, window.location.pathname);

      const isPublicRoute = byPassRoutes.includes(path.split('/')[1]);
      if (!token && !isPublicRoute) {
        navigate('/coming');
        setToast('error', 'Login necessário');
      }

      if (!token && !path.split('/')[1]) {
        navigate('/coming');
      } else if (!path.split('/')[1]) {
        navigate('/home');
      }
    }
  }, []);

  return (
    <Suspense fallback={<Loader fallback />}>
      <Routes>{mappedRoutes}</Routes>
    </Suspense>
  );
};

export default AppRoutes;
