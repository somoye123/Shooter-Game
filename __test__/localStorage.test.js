import setScoreToStore from '../src/localStorage';

const score = 110;

test('set localStorage with player score', () => {
  setScoreToStore(score);
  expect(localStorage.getItem('score')).toBe('110');
});