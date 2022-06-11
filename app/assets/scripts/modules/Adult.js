import Person from './Person';

class Adult extends Person {
  payTaxes() {
    console.log(`${this.fullName} has paid the taxes.`);
  }
}

export default Adult;