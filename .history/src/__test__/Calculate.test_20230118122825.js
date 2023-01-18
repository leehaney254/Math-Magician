import calculate from '../logic/Calculate'
describe('Test the calculator logic', () => {
  test('Should be a funtion', () => {
    expect(typeof calculate).toEqual('function')
  })
  test('set the operator to +', () => {
    expect(
      calculate({ total: 0, next: null', operation: '' }, '+').operation
    ).toEqual('+')
  })
  test('set the operator to -', () => {
    expect(
      calculate({ total: '', next: '', operation: '' }, '-').operation
    ).toEqual('-')
  })
  test('set the operator to x', () => {
    expect(
      calculate({ total: '', next: '', operation: '' }, 'x').operation
    ).toEqual('x')
  })
  test('set the operator to ÷', () => {
    expect(
      calculate({ total: '', next: '', operation: '' }, '÷').operation
    ).toEqual('÷')
  })
  test('set the operator to %', () => {
    expect(
      calculate({ total: '', next: '', operation: '' }, '%').operation
    ).toEqual('%')
  })
  test('returns the result when "=" is clicked ', () => {
    expect(
      calculate({ total: '50', next: '100', operation: '+' }, '=').total
    ).toEqual('150')
  })
  test('to change from positive to negative when "+/- " is clicked', () => {
    expect(
      calculate({ total: 20, next: '', operation: null }, '+/-').total
    ).toEqual('-20')
  })
  test('resets when operation is AC', () => {
    expect(calculate({ total: 1, next: 1, operation: '-' }, 'AC')).toEqual({
      next: null,
      operation: null,
      total: null,
    })
  })
})
