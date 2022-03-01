import {
  validateEmail,
  validadeMinimalLength,
  validateMaximalLength,
  validatePhone,
} from '../validators.utils';

test('should return false for invalid email', () => {
  const invalidEmail = validateEmail('wrongemail');
  expect(invalidEmail).toBeFalsy();
});

test('should return true for valid email', () => {
  const validEmail = validateEmail('valid@email.com');
  expect(validEmail).toBeTruthy();
});

test('should return false for text that do not have minimal length', () => {
  const invalidMinimalLength = validadeMinimalLength(5, 'abc');
  expect(invalidMinimalLength).toBeFalsy();
});

test('should return true for text that have minimal length', () => {
  const validMinimalLength = validadeMinimalLength(3, 'abc');
  expect(validMinimalLength).toBeTruthy();
});

test('should return false for text that do not have maximal length', () => {
  const invalidMaximalLength = validateMaximalLength(3, 'abcde');
  expect(invalidMaximalLength).toBeFalsy();
});

test('should return true for text that have maximal length', () => {
  const validMaximalLength = validateMaximalLength(3, 'abc');
  expect(validMaximalLength).toBeTruthy();
});

test('should return false for phone that do not match the pattern', () => {
  const invalidPhone = validatePhone('(99) 99999999_');
  expect(invalidPhone).toBeFalsy();
});

test('should return true for phone that match the pattern', () => {
  const validPhone = validatePhone('(99) 999999999');
  expect(validPhone).toBeTruthy();
});
