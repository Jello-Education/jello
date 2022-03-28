import requester from '../resources/requester';
import setToast from '../utils/toast.utils';
import { setAuthAndUser } from './utils.action';

export const signIn = async (store, navigate, credentials) => {
  const [error, response] = await requester(
    'POST',
    '/v1/public/auth/signin',
    credentials
  );
  if (error) {
    setToast('error', 'Usuário ou senha incorretos!');
  } else {
    const { token, user } = response.data;
    setAuthAndUser(store, token, user);
    navigate('/home');
  }
};

export const signUp = async (store, navigate, profile) => {
  store.actions.cleanStorage();
  // const result = await requester('POST', '/v1/public/auth/signup', { profile });
  const result = 0;

  const resultData = result[0] || result[1];
  const response = resultData.response ? resultData.response : resultData;

  switch (response.status) {
    case 201:
    case 200: {
      const { token, user } = response.data;
      setAuthAndUser(store, token, user);
      navigate(`/gaming/${user._id}`);
      break;
    }
    case 400: {
      if (response?.data?.data?.error?.message?.split(' ')?.includes('Email')) {
        setToast('error', 'Email já cadastrado');
      } else if (
        response?.data?.data?.error?.message?.split(' ')?.includes('Username')
      ) {
        setToast('error', 'Nome de usuário já cadastrado');
      } else {
        setToast('error', 'Erro no cadastro');
      }
      break;
    }
    default:
    case 500: {
      setToast('error', 'Erro no cadastro');
      break;
    }
  }
};

export const forgotPassword = async (store, email) => {
  const [error] = await requester('POST', '/v1/public/auth/forgot-password', {
    email,
  });
  if (error) {
    setToast('error', 'Erro interno');
  } else {
    setToast('success', 'Email enviado');
  }
};

export const resetPassword = async (store, navigate, { token, password }) => {
  const resetPasswordPayload = {
    token,
    password,
  };
  const [error] = await requester(
    'POST',
    '/v1/public/auth/reset-password',
    resetPasswordPayload
  );
  if (error) {
    setToast('error', 'Erro interno');
  } else {
    setToast('success', 'passwordUpdated');
    navigate('/signin');
  }
};

export const logOut = (store, navigate) => {
  store.actions.cleanStorage();
  navigate('/signin');
};
