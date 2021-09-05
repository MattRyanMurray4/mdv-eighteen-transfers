import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as TransfersActions from './transfers.actions';
import { TransfersEffects } from './transfers.effects';

describe('TransfersEffects', () => {
  let actions: Observable<Action>;
  let effects: TransfersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TransfersEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TransfersEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TransfersActions.init() });

      const expected = hot('-a-|', {
        a: TransfersActions.loadTransfersSuccess({ transfers: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
