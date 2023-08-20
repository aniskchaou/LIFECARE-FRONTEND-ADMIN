export class Recepionist {
      id:number;
	  firstName:string;
	  lastName:string;
	  email:string;
	  gender:string;
	  phone:string;
	  address:string;


  constructor(
    id: number, 
    firstName: string, 
    lastName: string, 
    email: string, 
    gender: string, 
    phone: string, 
    address: string
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.gender = gender
    this.phone = phone
    this.address = address
  }

}