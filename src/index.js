// Business Logic (export class SuperGalacticAgeCalculator {
export class SuperGalacticAgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetYears = {
      Earth: 1,
      Mercury: 0.24,
      Venus: 0.62,
      Mars: 1.88,
      Jupiter: 11.86
    };
  }

  calculateAge(planet) {
    return this.age / this.planetYears[planet];
  }

  yearsSince(previousAge, planet) {
    return (this.age - previousAge) / this.planetYears[planet];
  }

  yearsTo(futureAge, planet) {
    return (futureAge - this.age) / this.planetYears[planet];
  }
}
