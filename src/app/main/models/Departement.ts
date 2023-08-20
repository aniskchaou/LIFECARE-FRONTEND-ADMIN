export default class Departement {
  id: number;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
  name: string;
  description: string;
}
