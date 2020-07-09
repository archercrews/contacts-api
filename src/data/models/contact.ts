export class Contact {
  id: number;
  name: {
    first: string;
    middle: string;
    last: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: {
    number: string;
    type: typeof home | typeof work | typeof mobile
  };
  email: string

  constructor(newContact: any) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = {
      first: newContact.name.first,
      middle: newContact.name.middle,
      last: newContact.name.last
    };
    this.address = {
      street: newContact.address.street,
      city: newContact.address.city,
      state: newContact.address.state,
      zip: newContact.address.zip
    };
    this.phone = {
      number: newContact.phone.number,
      type: newContact.phone.type
    };
    this.email = newContact.email;
  }
}

const home = "home";
const work = "work";
const mobile = "mobile";