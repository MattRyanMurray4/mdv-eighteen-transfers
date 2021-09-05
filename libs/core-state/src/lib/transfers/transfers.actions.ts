import { Transfer } from '@therapy/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Transfers Page] Init');

// all

export const loadTransfers = createAction('[Transfers] Load All Transfers');

export const loadTransfersSuccess = createAction(
  '[Transfers] Load Transfers Success',
  props<{ transfers: Transfer[] }>()
);

export const loadTransfersFailure = createAction(
  '[Transfers] Load Transfers Failure',
  props<{ error: any }>()
);

// singular

export const loadTransfer = createAction(
  '[Transfer] Load A Transfer',
  props<{ transferId: string }>()
);

export const loadTransferSuccess = createAction(
  '[Transfer] Loaded Transfer Success',
  props<{ transfer: Transfer }>()
);

export const loadTransferFailure = createAction(
  '[Transfer] Loaded Transfer Failure',
  props<{ error: any }>()
);

// select

export const selectTransfer = createAction(
  '[Transfer] Selected A Transfer',
  props<{ transferId: string }>()
);

// create

export const createTransfer = createAction(
  '[Transfer] Create A Transfer',
  props<{ transfer: Transfer }>()
);

export const createTransferSuccess = createAction(
  '[Transfer] Created Transfer Success',
  props<{ transfer: Transfer }>()
);

export const createTransferFailure = createAction(
  '[Transfer] Created Transfer Failure',
  props<{ error: any }>()
);

// update

export const updateTransfer = createAction(
  '[Transfer] Update A Transfer',
  props<{ transfer: Transfer }>()
);

export const updateTransferSuccess = createAction(
  '[Transfer] Updated Transfer Success',
  props<{ transfer: Transfer }>()
);

export const updateTransferFailure = createAction(
  '[Transfer] Update A Transfer Failure',
  props<{ error: any }>()
);

// delete

export const deleteTransfer = createAction(
  '[Transfer] Delete A Transfer',
  props<{ transfer: Transfer }>()
);

export const deleteTransferSuccess = createAction(
  '[Transfer] Deleted Transfer Success',
  props<{ id: string }>()
);

export const deleteTransferFailure = createAction(
  '[Transfer] Delete A Transfer Failure',
  props<{ error: any }>()
);
