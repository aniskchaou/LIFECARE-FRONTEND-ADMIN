export class Radiology {
      id:number;
	  testName:string;
	  radiologyType:string;
	  name:string;
	  reportDays:string;
	  standardCharge:string;


  constructor(
    id: number, 
    testName: string, 
    radiologyType: string, 
    name: string, 
    reportDays: string, 
    standardCharge: string
) {
    this.id = id
    this.testName = testName
    this.radiologyType = radiologyType
    this.name = name
    this.reportDays = reportDays
    this.standardCharge = standardCharge
  }

}