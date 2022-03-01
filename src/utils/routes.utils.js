import React from 'react';
import { Route } from 'react-router-dom';

import { getRandomString } from './strings.utils';

export const mapRouteObject = (routeObject) => {
  const { element: Element, layout: Layout, ...routeProps } = routeObject;

  if (routeObject.layout) {
    routeProps.element = (
      <Layout>
        <Element />
      </Layout>
    );
  } else {
    routeProps.element = <Element />;
  }

  return <Route {...routeProps} key={getRandomString()} />;
};
