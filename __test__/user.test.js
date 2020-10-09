import { setUser, getUser } from '../src/user/user';

describe('Tests for getting default user name', () => {
  test('Should return Anonymous as a default name', () => {
    expect(getUser()).toBe('Anonymous');
  });
});

describe('Tests for setting a new user name', () => {
  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Somoye')).toBe('User set to: Somoye');
  });
});

describe('Tests for getting new users name', () => {
  test('Should return Somoye', () => {
    expect(getUser()).toBe('Somoye');
  });
});
