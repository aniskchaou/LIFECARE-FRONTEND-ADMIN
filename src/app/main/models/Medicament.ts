import { MedecineCategory } from './MedecineCategory';
import { MedecineType } from './MedecineType';

export default class Medicament {
  id: number;
  Manufacture: string;
  category: MedecineCategory;
  type: MedecineType;
  name: string;
  quantity: string;
  price: string;
  expireDate: string;
  description: string;

  constructor(
    id: number,
    Manufacture: string,
    category: MedecineCategory,
    type: MedecineType,
    name: string,
    quantity: string,
    price: string,
    expireDate: string,
    description: string
  ) {
    this.id = id;
    this.Manufacture = Manufacture;
    this.category = category;
    this.type = type;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.expireDate = expireDate;
    this.description = description;
  }
}
