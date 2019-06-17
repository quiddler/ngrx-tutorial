import { Injectable, ɵSWITCH_COMPILE_COMPONENT__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as authActions from '../actions/auth.actions';
import { Action } from '@ngrx/store';

const names: string[] = [
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
      return this.http.get<any>('https://swapi.co/api/people/4/')
        .pipe(
          map((person) => {
            const name = person.name;
            return new authActions.SetAuths({userName: name.replace(" ", ""), friendlyName: name});
          })
        );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}

}
