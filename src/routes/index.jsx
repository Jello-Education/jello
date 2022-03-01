import React, { Suspense, useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';

import { version } from '../../package.json';
import Loader from '../components/ui/Loader.component';
import requester from '../resources/requester';
import { mapRouteObject } from '../utils/routes.utils';
import setToast from '../utils/toast.utils';
import authRoutes from './authenticationRoutes';
import classRoutes from './classRoutes';

const izziVersion = `izzi-gaming-${version}`;

const routeObjects = [...authRoutes, ...classRoutes];
const mappedRoutes = routeObjects.map(mapRouteObject);

const AppRoutes = () => {
  const navigate = useNavigate();
  const byPassRoutes = ['', 'signin', 'signup', 'classes'];
  const token = localStorage.getItem(`${izziVersion}-token`);
  const path = window.location.pathname;

  useEffect(async () => {
    const url = new URL(window.location.href);
    const urlToken = url.searchParams.get('token');
    const resignin = url.searchParams.get('resignin');

    if (!token && urlToken && resignin) {
      localStorage.setItem(`${izziVersion}-token`, urlToken);
      const [, response] = await requester('GET', `/v1/public/auth/resignin`);
      if (response.status === 200) {
        localStorage.setItem(`${izziVersion}-token`, response.data.token);
        localStorage.setItem(
          `${izziVersion}-user`,
          JSON.stringify(response.data.user)
        );
        window.history.replaceState(null, null, window.location.pathname);
        window.location.reload();
      }
    } else {
      window.history.replaceState(null, null, window.location.pathname);

      const isPublicRoute = byPassRoutes.includes(path.split('/')[1]);
      if (!token && !isPublicRoute) {
        navigate('/signin');
        setToast('error', 'Login necessário');
      }

      if (!token && !path.split('/')[1]) {
        navigate('/signin');
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
