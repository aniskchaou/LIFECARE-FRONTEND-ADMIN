export class VaccinatedPeople {
    id:number;
	 patient:string;
	 vaccine:string; 
	  serialNo:string;
	  doseNo:string;
	  date:string;
	  note:string;


  constructor(
    id: number, 
    patient: string, 
    vaccine: string, 
    serialNo: string, 
    doseNo: string, 
    date: string, 
    note: string
) {
    this.id = id
    this.patient = patient
    this.vaccine = vaccine
    this.serialNo = serialNo
    this.doseNo = doseNo
    this.date = date
    this.note = note
  }

} 
   
   
   