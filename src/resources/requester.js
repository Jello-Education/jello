import axios from 'axios';

import { version } from '../../package.json';
import setToast from '../utils/toast.utils';
import { jello, vendors } from './config';

const jelloVersion = `jello-gaming-${version}`;

const requester = async (method, endpoint, data = null, vendor = false) => {
  const baseURL = vendor ? vendors[vendor].url : jello;
  const config = {
    method,
    baseURL,
    url: endpoint,
    data,
  };
  return axios
    .request(config)
    .then((response) => [null, response.data])
    .catch((error) => {
      if (error?.response?.status === 401) {
        setToast('error', 'Token Expirado');
        window.location.replace('/signin');
      }
      return [error];
    });
};

axios.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem(`${jelloVersion}-token`);
    if (config.baseURL.includes('vimeo')) {
      token = vendors.vimeo.token;
    }

    const url = new URL(window.location.href);
    const urlToken = url.searchParams.get('token');
    if (!token && urlToken) {
      token = urlToken;
    }

    const isAuthRoute =
      config.url.includes('auth') && !config.url.includes('resignin');

    const configToReturn =
      (token && config.baseURL.includes('vimeo')) ||
      (config.baseURL === jello &&
        !(isAuthRoute || config.url === '/admin/users'))
        ? { ...config, headers: { Authorization: `Bearer ${token}` } }
        : config;

    return configToReturn;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    if (error.response.status === 401) console.error(error);
    return Promise.reject(error);
  }
);

export default requester;
