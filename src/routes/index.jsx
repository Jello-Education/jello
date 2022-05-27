import React, { Suspense, useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';

import { version } from '../../package.json';
import Loader from '../components/ui/Loader.component';
import { mapRouteObject } from '../utils/routes.utils';
import authRoutes from './authenticationRoutes';
import blogRoutes from './blogRoutes';
import comingRoutes from './comingSoonRoutes';

const jelloVersion = `jello-${version}`;

const routeObjects = [...authRoutes, ...comingRoutes, ...blogRoutes];
const mappedRoutes = routeObjects.map(mapRouteObject);

const AppRoutes = () => (
  <Suspense fallback={<Loader fallback />}>
    <Routes>{mappedRoutes}</Routes>
  </Suspense>
);

export default AppRoutes;
