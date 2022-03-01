export const validadeMinimalLength = (length, text) => text.length >= length;

export const validateMaximalLength = (length, text) => text.length <= length;

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (text) => !!emailRegexp.test(text.toLowerCase());

const phoneRegexp = /^[(][0-9]{2}[)] [0-9]{9}$/;
export const validatePhone = (text) => !!phoneRegexp.test(text.toLowerCase());
