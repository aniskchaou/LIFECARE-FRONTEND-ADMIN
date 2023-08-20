export class Schedule {
     id:number;
	    doctor_id:string;
	    available_days:string;
	    start_time:string;
	    end_time:string;
	    per_patient_time:string;
	    serial_visibility_type:string;
	     status:string;


  constructor(
    id: number, 
    doctor_id: string, 
    available_days: string, 
    start_time: string, 
    end_time: string, 
    per_patient_time: string, 
    serial_visibility_type: string, 
    status: string
) {
    this.id = id
    this.doctor_id = doctor_id
    this.available_days = available_days
    this.start_time = start_time
    this.end_time = end_time
    this.per_patient_time = per_patient_time
    this.serial_visibility_type = serial_visibility_type
    this.status = status
  }

}