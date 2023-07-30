// index.js

// Import statements (if you need any)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic (GalacticAgeCalculator class)
export class GalacticAgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetYears = {
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
