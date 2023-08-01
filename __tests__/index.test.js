import SuperGalacticAgeCalculator from '../src/index.js';

describe('SuperGalacticAgeCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new SuperGalacticAgeCalculator(56);
  });

  test('calculateAge should return age in planet years', () => {
    expect(calc.calculateAge('Earth')).toBeCloseTo(56);
    expect(calc.calculateAge('Mercury')).toBeCloseTo(233.33);
    expect(calc.calculateAge('Venus')).toBeCloseTo(90.32);
    expect(calc.calculateAge('Mars')).toBeCloseTo(29.79);
    expect(calc.calculateAge('Jupiter')).toBeCloseTo(4.72);
  });

  test('yearsSince should return years passed on a planet since a previous age', () => {
    expect(calc.yearsSince(43, 'Earth')).toBeCloseTo(13);
    expect(calc.yearsSince(43, 'Mercury')).toBeCloseTo(54.17);
    expect(calc.yearsSince(43, 'Venus')).toBeCloseTo(20.97);
    expect(calc.yearsSince(43, 'Mars')).toBeCloseTo(6.91);
    expect(calc.yearsSince(43, 'Jupiter')).toBeCloseTo(1.10);
  });

  test('yearsTo should return years to pass on a planet until a future age', () => {
    expect(calc.yearsTo(61, 'Earth')).toBeCloseTo(5);
    expect(calc.yearsTo(61, 'Mercury')).toBeCloseTo(20.83);
    expect(calc.yearsTo(61, 'Venus')).toBeCloseTo(8.06);
    expect(calc.yearsTo(61, 'Mars')).toBeCloseTo(2.66);
    expect(calc.yearsTo(61, 'Jupiter')).toBeCloseTo(0.42);
  });
});
