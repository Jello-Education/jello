import { version } from '../../package.json';

export const getCurrentUser = () => {
  const jelloVersion = `jello-${version}`;
  const userStorage = localStorage.getItem(`${jelloVersion}-user`);
  return userStorage ? JSON.parse(userStorage) : null;
};

export const isUserPremium = (user) => !!user.subscription.length;
