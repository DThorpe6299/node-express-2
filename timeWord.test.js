const {convertTime, convertToWords } = require('./timeWord');
const morningTime = '06:34';
const afternoonTime = '17:54'
const num1 = 0;
const num2 = 7;
const num3 = 19;
const num4 = 43;
describe('#timeword', () => {
  test('convert a number to words', ()=>{
    expect(convertToWords(num1)).toBe('')
    expect(convertToWords(num2)).toBe('seven')
    expect(convertToWords(num3)).toBe('nineteen')
    expect(convertToWords(num4)).toBe('forty three')
  })

  test('before noon time', ()=>{
    expect(convertTime(morningTime)).toBe('six thirty four am')
  })

  test('afternoon time', ()=>{
    expect(convertTime(afternoonTime)).toBe('five fifty four pm')
  })
});

