import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  actionTypeNamePastTense,
  actionTypeNamePresentTense,
  getActionType,
  NotifyService,
  PtService,
} from '@therapy/core-data';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  createTransfer,
  createTransferFailure,
  createTransferSuccess,
  deleteTransfer,
  deleteTransferFailure,
  deleteTransferSuccess,
  loadTransfer,
  loadTransferFailure,
  loadTransfers,
  loadTransfersFailure,
  loadTransfersSuccess,
  loadTransferSuccess,
  updateTransfer,
  updateTransferFailure,
  updateTransferSuccess,
} from './transfers.actions';

@Injectable()
export class TransfersEffects {
  constructor(
    private readonly actions$: Actions,
    private ptService: PtService,
    private notify: NotifyService
  ) {}

  loadTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTransfer),
      switchMap(({ transferId }) =>
        this.ptService.find(transferId).pipe(
          map((transfer) => loadTransferSuccess({ transfer })),
          catchError((error) => of(loadTransferFailure({ error })))
        )
      )
    )
  );

  loadTransfers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTransfers),
      switchMap(() =>
        this.ptService.all().pipe(
          map((transfers) => loadTransfersSuccess({ transfers })),
          catchError((error) => of(loadTransfersFailure({ error })))
        )
      )
    )
  );

  createTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTransfer),
      switchMap(({ transfer }) =>
        this.ptService.create(transfer).pipe(
          map((transfer) => createTransferSuccess({ transfer })),
          catchError((error) => of(createTransferFailure({ error })))
        )
      )
    )
  );

  updateTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTransfer),
      switchMap(({ transfer }) =>
        this.ptService.update(transfer).pipe(
          map((transfer) => updateTransferSuccess({ transfer })),
          catchError((error) => of(updateTransferFailure({ error })))
        )
      )
    )
  );

  deleteTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTransfer),
      switchMap(({ transfer }) =>
        this.ptService.delete(transfer.id).pipe(
          map((id) => deleteTransferSuccess({ id })),
          catchError((error) => of(deleteTransferFailure({ error })))
        )
      )
    )
  );

  transferSuccessNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateTransferSuccess,
          createTransferSuccess,
          deleteTransferSuccess
        ),
        tap((action) => {
          const actionType = getActionType(action.type);
          this.notify.notification(
            `Transfer ${actionTypeNamePastTense[actionType]} Successfully!`
          );
        })
      ),
    { dispatch: false }
  );

  transferFailureNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateTransferFailure,
          createTransferFailure,
          deleteTransferFailure
        ),
        tap((action) => {
          const actionType = getActionType(action.type);
          this.notify.notification(
            `Failed to ${actionTypeNamePresentTense[actionType]} Transfer. Please try again.`
          );
        })
      ),
    { dispatch: false }
  );
}
