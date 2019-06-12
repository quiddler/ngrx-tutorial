import { Injectable, ɵSWITCH_COMPILE_COMPONENT__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as authActions from '../actions/auth.actions';
import { Action } from '@ngrx/store';

const names: Observable<string[]> = [
  'john',
  'nate',
  'jessika'
];

@Injectable()
export class AuthEffects {

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap( () => {
      return this.http.get<string>('login')
        .pipe(
          map((userName) => {
            return new authActions.SetAuths(userName);
          })
        );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}

}
