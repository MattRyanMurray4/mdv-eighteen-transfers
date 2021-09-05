import { ActionReducerMap } from '@ngrx/store';
import {
  TRANSFERS_FEATURE_KEY,
  TransferState,
  transferReducer,
} from './transfers/transfers.reducer';

export interface AppState {
  [TRANSFERS_FEATURE_KEY]: TransferState;
}

export const reducers: ActionReducerMap<AppState> = {
  [TRANSFERS_FEATURE_KEY]: transferReducer,
};
