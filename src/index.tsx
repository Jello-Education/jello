/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { version } from '../package.json';
import App from './App';
import { env } from './resources/config';
import GlobalStyle from './styles/global';

const JelloVersion = `jello-${version}`;

Sentry.init({
  dsn: 'https://a29b5dd15d5b4470baeefff40c983a6b@o561128.ingest.sentry.io/5697616',
  environment: env,
  release: JelloVersion,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const theme = {};

ReactDOM.render(
  <ThemeProvider theme={createTheme(theme)}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('app')
);
