import { createFeatureSelector, createSelector } from '@ngrx/store';
import { emptyTransfer, Transfer } from '@therapy/api-interfaces';
import {
  TRANSFERS_FEATURE_KEY,
  TransferState,
  transfersAdapter,
} from './transfers.reducer';

// Lookup the 'Transfers' feature state managed by NgRx
export const getTransfersState = createFeatureSelector<TransferState>(
  TRANSFERS_FEATURE_KEY
);

const { selectAll, selectEntities } = transfersAdapter.getSelectors();

export const getTransfersLoaded = createSelector(
  getTransfersState,
  (state: TransferState) => state.loaded
);

export const getTransfersError = createSelector(
  getTransfersState,
  (state: TransferState) => state.error
);

export const getAllTransfers = createSelector(
  getTransfersState,
  (state: TransferState) => selectAll(state)
);

export const getTransfersEntities = createSelector(
  getTransfersState,
  (state: TransferState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTransfersState,
  (state: TransferState) => state.selectedId
);

export const getSelected = createSelector(
  getTransfersEntities,
  getSelectedId,
  (entities, selectedId) =>
    (selectedId ? entities[selectedId] : emptyTransfer) as Transfer
);
