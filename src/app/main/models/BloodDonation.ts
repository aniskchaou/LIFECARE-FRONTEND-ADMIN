export class BloodDonation {
     id:number;
	 DonorName:string;
	 bags:string;


  constructor(id: number, DonorName: string, bags: string) {
    this.id = id
    this.DonorName = DonorName
    this.bags = bags
  }

}