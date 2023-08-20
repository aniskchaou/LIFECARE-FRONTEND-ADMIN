export class Inventory {
     id:number;
	  name:string;
	  itemCategory:string;
	  unit:string;
	  description:string;


  constructor(
    id: number, 
    name: string, 
    itemCategory: string, 
    unit: string, 
    description: string
) {
    this.id = id
    this.name = name
    this.itemCategory = itemCategory
    this.unit = unit
    this.description = description
  }

}