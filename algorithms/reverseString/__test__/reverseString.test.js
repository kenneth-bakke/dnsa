const reverseString = require('../reverseStringInPlace');

describe('Reverse String', () => {
  it('returns a string', () => {
    let res = reverseString('hello');
    expect(typeof res).toEqual('string');
  });

  it('returns a string of same length', () => {
    let res = reverseString('hello');
    expect(res.length).toBe(5);
  });

  it('reverses a string', () => {
    let res = reverseString('hello');
    expect(res).toBe('olleh');
  });

  it('reverses an odd number string', () => {
    let res = reverseString('hello');
    expect(res).toBe('olleh');
  });
  it('reverses an even number string', () => {
    let res = reverseString('shadosue');
    expect(res).toBe('eusodahs');
  });
});
