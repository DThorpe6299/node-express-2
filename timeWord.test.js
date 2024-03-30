const { convertTime, convertToWords } = require('./timeWord');
const morningTime = '06:34';
const afternoonTime = '17:54';
const minutes1to9AM = '08:08';
const minutes1to9PM = '18:07';
const onTheDotAM = '11:00';
const onTheDotPM = '20:00';
const midnight = '00:00';
const noon = '12:00';
const eleven59 = '23:59';
const num1 = 0;
const num2 = 7;
const num3 = 19;
const num4 = 43;

describe('#timeword', () => {
  test('convert a number to words', () => {
    expect(convertToWords(num1)).toBe('');
    expect(convertToWords(num2)).toBe('seven');
    expect(convertToWords(num3)).toBe('nineteen');
    expect(convertToWords(num4)).toBe('forty three');
  });

  test('before noon time', () => {
    expect(convertTime(morningTime)).toBe('six thirty four am');
  });

  test('afternoon time', () => {
    expect(convertTime(afternoonTime)).toBe('five fifty four pm');
  });

  test('time with minutes between 1 and 9', () => {
    expect(convertTime(minutes1to9AM)).toBe('eight oh eight am');
    expect(convertTime(minutes1to9PM)).toBe('six oh seven pm');
  });

  test("o'clock times", () => {
    expect(convertTime(onTheDotAM)).toBe("eleven o'clock am");
    expect(convertTime(onTheDotPM)).toBe("eight o'clock pm");
  });

  test('midnight and noon', () => {
    expect(convertTime(midnight)).toBe('midnight');
    expect(convertTime(noon)).toBe('noon');
  });

  test('edge cases', () => {
    expect(convertTime(midnight)).toBe('midnight');
    expect(convertTime(eleven59)).toBe('eleven fifty nine pm');
  });
});
