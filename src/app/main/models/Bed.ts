import { BedType } from './BedType';

export class Bed {
  id: number;
  bedNumber: string;
  bedType: BedType;
  floor: string;

  constructor(id: number, bedNumber: string, bedType: BedType, floor: string) {
    this.id = id;
    this.bedNumber = bedNumber;
    this.bedType = bedType;
    this.floor = floor;
  }
}
