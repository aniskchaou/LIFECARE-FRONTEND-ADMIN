export class Ambulance {
    
     id: number;
	 vehicleNumber:string;
	 model:string;
	 year:string;
	 driver:string;
	 note:string;


  constructor(
    id: number, 
    vehicleNumber: string, 
    model: string, 
    year: string, 
    driver: string, 
    note: string
) {
    this.id = id
    this.vehicleNumber = vehicleNumber
    this.model = model
    this.year = year
    this.driver = driver
    this.note = note
  }
    
    
}