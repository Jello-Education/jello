import React, { lazy } from 'react';

import DefaultLayout from '../layout/Default';

const ContentBlog = lazy(() => import('../screens/Blog/ContentBlog'));
const HomeBlog = lazy(() => import('../screens/Blog/HomeBlog'));

const addCommonProps = (route) => ({
  ...route,
  exact: true,
  layout: DefaultLayout,
});

const blogRoutes = [
  { path: '/blog', element: () => <HomeBlog /> },
  { path: '/blog/content', element: () => <ContentBlog /> },
];

const mappedBlogRoutes = blogRoutes.map(addCommonProps);

export default mappedBlogRoutes;
