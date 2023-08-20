import { BloodGroup } from './bloodGroup';

export class BloodDonor {
  id: number;
  firstName: string;
  lastName: string;
  Age: string;
  Gender: string;
  bloodGroup: BloodGroup;
  LastDonationDate: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    Age: string,
    Gender: string,
    bloodGroup: BloodGroup,
    LastDonationDate: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.Gender = Gender;
    this.bloodGroup = bloodGroup;
    this.LastDonationDate = LastDonationDate;
  }
}
