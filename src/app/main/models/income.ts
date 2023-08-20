export class Income {
     id:number;
	  name:string;
	  date:string;
	  invoiceNumber:string;
	  Amount:string;
	  description:string;


  constructor(
    id: number, 
    name: string, 
    date: string, 
    invoiceNumber: string, 
    Amount: string, 
    description: string
) {
    this.id = id
    this.name = name
    this.date = date
    this.invoiceNumber = invoiceNumber
    this.Amount = Amount
    this.description = description
  }

}