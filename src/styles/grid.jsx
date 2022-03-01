import { css } from 'styled-components';

import { Device, MediaQuery } from './variables';

const GridCSS = css`
  ${'@-ms-viewport'} {
    width: device-width;
  }
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${MediaQuery.TABLET_UP} {
    .container {
      padding-right: 16px;
      padding-left: 16px;
    }
  }

  @media ${MediaQuery.DESKTOP_UP} {
    .container {
      padding-right: 32px;
      padding-left: 32px;
    }
  }

  @media ${MediaQuery.LARGE_DESKTOP} {
    .container {
      max-width: ${Device.LARGE_DESKTOP};
      padding-right: 16px;
      padding-left: 16px;
    }
  }

  .container-fluid {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
  }
  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 16px;
    padding-left: 16px;
  }
  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .no-gutters > .col,
  .no-gutters > [class*='col-'] {
    padding-right: 0;
    padding-left: 0;
  }
  @media ${MediaQuery.TABLET_UP} {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media ${MediaQuery.DESKTOP_UP} {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-lg-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-lg-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-lg-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-lg-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media ${MediaQuery.LARGE_DESKTOP} {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-xl-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-xl-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-xl-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-xl-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-xl-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export default GridCSS;
