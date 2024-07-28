import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer'

export const selectCustomerState = createFeatureSelector<fromCustomer.customerState>(
    fromCustomer.customerFeatureKey
)

export const selectCustomers = createSelector(
    selectCustomerState,
    (state: fromCustomer.customerState) => state.customers 
)

