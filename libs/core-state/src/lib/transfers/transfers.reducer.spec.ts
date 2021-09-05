import { Action } from '@ngrx/store';

import * as TransfersActions from './transfers.actions';
import { TransfersEntity } from './transfers.models';
import { State, initialState, reducer } from './transfers.reducer';

describe('Transfers Reducer', () => {
  const createTransfersEntity = (id: string, name = ''): TransfersEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Transfers actions', () => {
    it('loadTransfersSuccess should return the list of known Transfers', () => {
      const transfers = [
        createTransfersEntity('PRODUCT-AAA'),
        createTransfersEntity('PRODUCT-zzz'),
      ];
      const action = TransfersActions.loadTransfersSuccess({ transfers });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
