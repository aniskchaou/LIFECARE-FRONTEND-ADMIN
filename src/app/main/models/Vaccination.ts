export class Vaccination {
      id:number;
	  name:string;
	  constractor:string;
	  commercialName:string;


  constructor(
    id: number, 
    name: string, 
    constractor: string, 
    commercialName: string
) {
    this.id = id
    this.name = name
    this.constractor = constractor
    this.commercialName = commercialName
  }

}