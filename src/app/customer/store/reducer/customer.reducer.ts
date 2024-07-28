import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as CustomerActions from 'src/app/customer/store/action/customer.actions'

export const customerFeatureKey = 'customer';

export interface customerState {
  customers: Customer[]; // this interface refers an object whose having customer property
  //that customers property contains array of Customer
  // that array of Customer have name property
}

export const initialState: customerState = {
  customers: []
};

export const reducer = createReducer(
  initialState, on(CustomerActions.addCustomers, (parameter: customerState, { customer }) => (
    {
      ...parameter,
      customers: [...parameter.customers, customer]
    }
  ))
);

