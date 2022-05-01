import React, { lazy } from 'react';

import DefaultLayout from '../layout/Default';

const ContentBlog = lazy(() => import('../screens/Blog/ContentBlog'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
  layout: DefaultLayout,
});

const blogRoutes = [{ path: '/blog/content', element: () => <ContentBlog /> }];

const mappedBlogRoutes = blogRoutes.map(addCommonProps);

export default mappedBlogRoutes;
