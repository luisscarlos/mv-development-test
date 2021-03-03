export class Employee {

  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  cellNumber: string;
  role: string;

  constructor(
    id: string,
    name: string,
    addredd: string,
    phoneNumber: string,
    cellNumber: string,
    role: string
    ) {
    this.id = id;
    this.name = name;
    this.address = addredd;
    this.phoneNumber = phoneNumber;
    this.cellNumber = cellNumber;
    this.role = role;
  }
}
