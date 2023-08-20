export class Diagnosis {
     id:number;
	 patientHospital :string ;
	 doctor:string ;
	  DiagnosisCategory:string;
	  ReportNumber:string;
	  Age:string;
	  Height:string;
	  Weight:string;
	  Averageglucose:string;
	  FastingBloodSugar:string;
	  UrineSugar:string;
	  BloodPressure:string;
	  Diabetes:string;
	  Cholesterol:string;


  constructor(
    id: number, 
    patientHospital: string , 
    doctor: string , 
    DiagnosisCategory: string, 
    ReportNumber: string, 
    Age: string, 
    Height: string, 
    Weight: string, 
    Averageglucose: string, 
    FastingBloodSugar: string, 
    UrineSugar: string, 
    BloodPressure: string, 
    Diabetes: string, 
    Cholesterol: string
) {
    this.id = id
    this.patientHospital = patientHospital
    this.doctor = doctor
    this.DiagnosisCategory = DiagnosisCategory
    this.ReportNumber = ReportNumber
    this.Age = Age
    this.Height = Height
    this.Weight = Weight
    this.Averageglucose = Averageglucose
    this.FastingBloodSugar = FastingBloodSugar
    this.UrineSugar = UrineSugar
    this.BloodPressure = BloodPressure
    this.Diabetes = Diabetes
    this.Cholesterol = Cholesterol
  }

}