export class Driver {
    id:number;
	  firstName:string;
	  lastName:string;
	  age:string;
	  gender:string;
	  email:string;
	  phone:string;
	  address:string;
	  license:string;
	

  constructor(
    id: number, 
    firstName: string, 
    lastName: string, 
    age: string, 
    gender: string, 
    email: string, 
    phone: string, 
    address: string, 
    license: string
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.email = email
    this.phone = phone
    this.address = address
    this.license = license
  }

}