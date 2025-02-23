import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const addCustomers = createAction(
  '[Customer] Add Customer', (customer: Customer) => ({
    customer
  })
);
