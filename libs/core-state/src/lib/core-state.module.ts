import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreConfig, Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TransfersEffects } from './transfers/transfers.effects';
import { TransfersFacade } from './transfers/transfers.facade';
import { reducers } from '.';
const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([TransfersEffects]),
    StoreDevtoolsModule.instrument({ name: 'Therapy-Application' }),
  ],
  providers: [TransfersFacade],
})
export class CoreStateModule {}
