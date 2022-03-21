import { version } from '../../package.json';

const JelloVersion = `jello-${version}`;

export const setAuthAndUser = (store, token = null, user = null) => {
  if (token) localStorage.setItem(`${JelloVersion}-token`, token);
  if (user) {
    store.actions.setUserContext('root', user);
    localStorage.setItem(`${JelloVersion}-user`, JSON.stringify(user));
  }
};

export const cleanStorage = (store) => {
  store.actions.cleanUser();
  localStorage.clear();
};

export const addInStore = (store, context, item) => {
  const contextStore = {
    ...store.state.content,
    options: [...store.state[context].options, item],
  };
  store.setState({ ...store.state, [context]: contextStore });
};

export const removeFromStore = (store, context, itemId) => {
  const itemIndex = store.state[context].options.findIndex(
    (i) => i.id === itemId
  );
  const contextStore = {
    ...store.state[context],
    options: [
      ...store.state[context].options.slice(0, itemIndex),
      ...store.state[context].options.slice(itemIndex + 1),
    ],
  };
  store.setState({ ...store.state, [context]: contextStore });
};

export const updateInStore = (store, context, item) => {
  const itemIndex = store.state[context].options.findIndex(
    (i) => i.id === item.id
  );
  const contextStore = {
    ...store.state[context],
    options: [
      ...store.state[context].options.slice(0, itemIndex),
      item,
      ...store.state[context].options.slice(itemIndex + 1),
    ],
  };
  store.setState({ ...store.state, [context]: contextStore });
};

export const setInStore = (store, context, property, value) => {
  const contextStore = {
    ...store.state[context],
    [property]: value,
  };
  store.setState({ ...store.state, [context]: contextStore });
};
