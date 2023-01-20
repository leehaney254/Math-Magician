import operate from '../logic/Operate';

describe.each([
  ['3', '2', 'x', '6'],
  ['5', '1', '-', '4'],
  ['3', '2', '+', '5'],
  ['30', '2', '÷', '15'],
  ['25', '2', '%', '1'],
])('Testing calculator Operations:', (a, b, operation, result) => {
  test(`returns result for ${operation} operation`, () => {
    expect(operate(a, b, operation)).toBe(result);
  });
});
