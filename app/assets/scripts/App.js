import '../styles/styles.css';

if (module.hot) {
  module.hot.accept();
}

/** Lesson example code below this line */

import Person from './modules/Person';
import Adult from './modules/Adult';

let john = new Adult("John Doe", "Blue");
john.greet();
john.payTaxes();

let jane = new Adult("Jane Doe", "Yellow");
jane.greet();
jane.payTaxes();

let jack = new Person("Jack Sparrow", "Black");
jack.greet();