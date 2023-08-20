import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class ServiceMessage {
  confirmationMessages = {
    title: 'confirmation',
    add: 'Service a été ajouté avec succés',
    edit: 'Service a été modifié avec succés',
    delete: 'Service a été supprimé avec succés',
  };
  validationMessage = {
    name: 'name  is required.',
    description: 'description is required.',
    quantity: 'quantity is required.',
    amount: 'amount is required.',
    status: 'status is required.',
  };

  constructor() {}
}
