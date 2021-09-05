import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Transfer } from '@therapy/api-interfaces';

import * as TransfersActions from './transfers.actions';

export const TRANSFERS_FEATURE_KEY = 'transfers';

export interface TransferState extends EntityState<Transfer> {
  selectedId?: string | number; // which Transfers record has been selected
  loaded: boolean; // has the Transfers list been loaded
  error?: string | null; // last known error (if any)
}

export interface TransferAction extends Action {
  error: string;
}

export interface TransfersPartialState {
  readonly [TRANSFERS_FEATURE_KEY]: TransferState;
}

export const transfersAdapter: EntityAdapter<Transfer> =
  createEntityAdapter<Transfer>();

export const initialState: TransferState = transfersAdapter.getInitialState({
  loaded: false,
});

const setLoading = (state: TransferState) => ({
  ...state,
  loaded: false,
  error: null,
});

const setFailure = (state: TransferState, { error }: TransferAction) => ({
  ...state,
  error,
});

const _transferReducer = createReducer(
  initialState,
  on(
    TransfersActions.loadTransfer,
    TransfersActions.loadTransfers,
    TransfersActions.createTransfer,
    TransfersActions.updateTransfer,
    TransfersActions.deleteTransfer,
    setLoading
  ),
  on(
    TransfersActions.loadTransferFailure,
    TransfersActions.loadTransfersFailure,
    TransfersActions.createTransferFailure,
    TransfersActions.updateTransferFailure,
    TransfersActions.deleteTransferFailure,
    setFailure
  ),
  on(TransfersActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TransfersActions.loadTransfersSuccess, (state, { transfers }) =>
    transfersAdapter.setAll(transfers, { ...state, loaded: true })
  ),
  on(TransfersActions.loadTransfersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TransfersActions.loadTransferSuccess, (state, { transfer }) =>
    transfersAdapter.upsertOne(transfer, { ...state, loaded: true })
  ),
  on(TransfersActions.selectTransfer, (state, { transferId }) => ({
    ...state,
    selectedId: transferId,
  })),
  on(TransfersActions.createTransferSuccess, (state, { transfer }) =>
    transfersAdapter.addOne(transfer, { ...state, loaded: true })
  ),
  on(
    TransfersActions.updateTransferSuccess,
    (state, { transfer: { id, ...restTransfer } }) =>
      transfersAdapter.updateOne(
        { id, changes: { ...restTransfer } },
        { ...state, loaded: true }
      )
  ),
  on(TransfersActions.deleteTransferSuccess, (state, { id }) =>
    transfersAdapter.removeOne(id, { ...state, loaded: true })
  )
);

export function transferReducer(
  state: TransferState | undefined,
  action: Action
) {
  return _transferReducer(state, action);
}
