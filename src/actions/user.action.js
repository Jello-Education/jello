import { registerType } from '../models/user.models';
import requester from '../resources/requester';
import setToast from '../utils/toast.utils';
import { setAuthAndUser } from './utils.action';

export const cleanUser = (store) => {
  const user = {
    profile: {
      name: '',
      username: '',
      email: '',
      register: null,
    },
    discord: {
      id: null,
      avatar: null,
      username: null,
      discriminator: null,
      email: null,
      verified: null,
    },
    gaming: {
      lol: {},
    },
    subscription: [],
    active: false,
    role: null,
  };
  store.setState({ ...store.state, user });
};

export const setUserGame = (store, game, data) => {
  const user = {
    ...store.state.user,
    gaming: {
      ...store.state.user.gaming,
      [game]: {
        ...store.state.user.gaming[game],
        ...data,
      },
    },
  };
  store.setState({ ...store.state, user });
};

export const setUserContext = (store, context, data) => {
  const user =
    context === 'root'
      ? {
          ...store.state.user,
          ...data,
        }
      : {
          ...store.state.user,
          [context]: {
            ...store.state.user[context],
            ...data,
          },
        };
  store.setState({ ...store.state, user });
};

export const setUser = (store, property, value) => {
  const user = {
    ...store.state.user,
    [property]: value,
  };
  store.setState({ ...store.state, user });
};

export const register = async (store, lolProfile, callback) => {
  store.actions.setShowLoader(true);
  const { discord, profile } = store.state.user;
  const { knowUsBy, recommendedBy } = profile;
  const { summoner, goals } = lolProfile;
  const registerPayload = {
    profile: {
      knowUsBy,
      recommendedBy,
      register: registerType.COMPLETE,
    },
    discord,
    gaming: {
      lol: {
        summoner,
        goals,
      },
    },
  };
  const [error, response] = await requester('PUT', '/user', registerPayload);
  if (error) {
    store.actions.setAlertDialog(true, 'registerProfile');
  } else {
    setAuthAndUser(store, null, response.data);
    if (callback) callback();
  }
  store.actions.setShowLoader(false);
};

export const updateProfile = async (store, profile) => {
  const profilePayload = {
    profile: {
      ...profile,
    },
  };
  const [error, response] = await requester('PUT', '/user', profilePayload);
  if (error) {
    store.actions.setAlertDialog(true, 'generic');
  } else {
    setAuthAndUser(store, null, response.data);
    setToast('success', 'profileUpdated');
  }
};

export const updatePassword = async (store, password, callback) => {
  const passwordPayload = {
    profile: {
      password,
    },
  };
  const [error] = await requester('PUT', '/user', passwordPayload);
  if (error) {
    store.actions.setAlertDialog(true, 'generic');
  } else {
    if (callback) callback();
    setToast('success', 'passwordUpdated');
  }
};

export const resendVerificationToken = async () => {
  const [error] = await requester('GET', '/user/resend-token');
  if (error) {
    setToast('error', 'verificationTokenResendError');
  } else {
    setToast('success', 'verificationTokenResend');
  }
};
