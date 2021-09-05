import { TransfersEntity } from './transfers.models';
import {
  transfersAdapter,
  TransfersPartialState,
  initialState,
} from './transfers.reducer';
import * as TransfersSelectors from './transfers.selectors';

describe('Transfers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTransfersId = (it: TransfersEntity) => it.id;
  const createTransfersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TransfersEntity);

  let state: TransfersPartialState;

  beforeEach(() => {
    state = {
      transfers: transfersAdapter.setAll(
        [
          createTransfersEntity('PRODUCT-AAA'),
          createTransfersEntity('PRODUCT-BBB'),
          createTransfersEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Transfers Selectors', () => {
    it('getAllTransfers() should return the list of Transfers', () => {
      const results = TransfersSelectors.getAllTransfers(state);
      const selId = getTransfersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TransfersSelectors.getSelected(state) as TransfersEntity;
      const selId = getTransfersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getTransfersLoaded() should return the current "loaded" status', () => {
      const result = TransfersSelectors.getTransfersLoaded(state);

      expect(result).toBe(true);
    });

    it('getTransfersError() should return the current "error" state', () => {
      const result = TransfersSelectors.getTransfersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
