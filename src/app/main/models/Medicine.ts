export class Medecine {
     id:number;
	  Manufacture:string;
	 category:string;
	 type:string;
	  name:string;
	  quantity:string;
	  price:string;
	  expireDate:string;
	  description:string;


  constructor(
    id: number, 
    Manufacture: string, 
    category: string, 
    type: string, 
    name: string, 
    quantity: string, 
    price: string, 
    expireDate: string, 
    description: string
) {
    this.id = id
    this.Manufacture = Manufacture
    this.category = category
    this.type = type
    this.name = name
    this.quantity = quantity
    this.price = price
    this.expireDate = expireDate
    this.description = description
  }

}