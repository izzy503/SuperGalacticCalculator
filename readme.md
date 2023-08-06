## Super Galactic Age Calculator

TThis is a unique application that determines a user's age based on a planet's solar years. While a solar year on Earth is familiar to most of us, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts only 88 days.

## Features

Calculate Age in Planetary Years:

Converts a person's age in Earth years to:

Mercury years. (A Mercury year is .24 Earth years.)

Venus years. (A Venus year is .62 Earth years.)

Mars years. (A Mars year is 1.88 Earth years.)

Jupiter years. (A Jupiter year is 11.86 Earth years.)

Past Birthday Calculations: Determines how many years have passed on each planet since a past birthday.

Future Birthday Calculations: Determines how many years have yet to pass on each planet until a future birthday.

## Technologies Used

HTML CSS JavaScript Constructors Prototypes E6 Webpack NPM Node Eslintrc Babelrc Gitignore Json Jest

## Usage 

Clone the repository:

git clone https://github.com/izzy503/SuperGalacticAgeCalculator.git


Make sure you have node and npm installed. Navigate to the directory and install the required packages:

Copy code
npm install
Run the tests:

bash
Copy code
npm test
Use the methods in the codebase as per your requirements.

## Known Bugs

None found.

## Test

Ensure you follow the Red, Green, Refactor workflow:

Red Phase: Commit each test after you have written it and before writing the corresponding method in your business logic.
Green Phase: Write the business logic that corresponds to the test, verify that your test passes, and then commit your code.
Refactor: Enhance your codebase and tests as necessary.
At the end of your work session, make sure you have 100% coverage on all tests.

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


##  Customization

For further customizations or to add more planetary calculations, you can modify the JavaScript logic in the main codebase.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the BSD-2-Clause License. See the LICENSE file for details.

For any issues or concerns, please contact me at ipadilla2280@gmail.com.

© Aug 5, 2023, Israel Padilla

Please note that this is just a sample README.md file created for this project, and you may need to modify it further to suit your specific project and requirements.