import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Transfer } from '@therapy/api-interfaces';

import * as TransfersActions from './transfers.actions';
import * as TransfersFeature from './transfers.reducer';
import * as TransfersSelectors from './transfers.selectors';

@Injectable()
export class TransfersFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TransfersSelectors.getTransfersLoaded));
  allTransfers$ = this.store.pipe(select(TransfersSelectors.getAllTransfers));
  selectedTransfers$ = this.store.pipe(select(TransfersSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(TransfersActions.init());
  }

  loadTransfers() {
    return this.store.dispatch(TransfersActions.loadTransfers());
  }

  loadTransfer(transferId: string) {
    return this.store.dispatch(TransfersActions.loadTransfer({ transferId }));
  }

  selectTransfer(transferId: string) {
    return this.store.dispatch(TransfersActions.selectTransfer({ transferId }));
  }

  createTransfer(transfer: Transfer) {
    return this.store.dispatch(TransfersActions.createTransfer({ transfer }));
  }

  updateTransfer(transfer: Transfer) {
    return this.store.dispatch(TransfersActions.updateTransfer({ transfer }));
  }

  deleteTransfer(transfer: Transfer) {
    return this.store.dispatch(TransfersActions.deleteTransfer({ transfer }));
  }

  private dispatch(action: Action) {
    return this.store.dispatch(action);
  }
}
