import {Account} from '../../model/account';
import {AccountActionTypes, All} from './account.actions';

export interface State {
  accounts: Account[] | null;
  currentAccount: Account | null;
  errorMessage: string | null;
}

export const initialState: State = {
  accounts: null,
  currentAccount: null,
  errorMessage: null
}

export function reducer(state = initialState, action: All) {
  switch (action.type) {
    case AccountActionTypes.ADD_SUCCESS: {
      return {
        ...state,
        currentAccount: action.payload,
        errorMessage: null
      };
    }
    case AccountActionTypes.ADD_FAILURE: {
      return {
        ...state,
        errorMessage: null
      };
    }
    case AccountActionTypes.GET_CLIENTID_SUCCESS: {
      return {
        ...state,
        accounts: action.payload,
        errorMessage: null
      };
    }
    case AccountActionTypes.GET_CLIENTID_FAILURE: {
      return {
        ...state,
        errorMessage: 'Failed to get accounts by client id'
      };
    }
    default: {
      return state;
    }
  }
}
