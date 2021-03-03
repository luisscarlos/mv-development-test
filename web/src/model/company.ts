export class Company {

  id: string;
  name: string;
  address: string;
  phoneNumber: string;


  constructor(
    id: string,
    name: string,
    addredd: string,
    phoneNumber: string,
    ) {
    this.id = id;
    this.name = name;
    this.address = addredd;
    this.phoneNumber = phoneNumber;
  }
}
