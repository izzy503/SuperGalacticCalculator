import Character from "./js/character.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.addEventListener("load", function () {
  console.log("Galactic Super Calculator is loading and js is working")
));

//Buisness Logic//
class GalacticAgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetYears = {
      Mercury; 0.24,
      Venus: 0.62,
      Jupiter: 11.86
    };
  }



