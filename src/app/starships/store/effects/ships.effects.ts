import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { concatMap, switchMap, map } from 'rxjs/operators';
import * as shipActions from '../actions/ships.actions';

@Injectable()
export class ShipsEffects {

  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(shipActions.ShipsActionTypes.LoadShips),
    switchMap( () => {
      return this.http.get<any>('https://swapi.co/api/starships')
        .pipe(
          map( (response) => {
            return new shipActions.SetShips(response.results);
          })
        );
    })
  );

  constructor(private actions$: Actions<shipActions.ShipsActions>, private http: HttpClient) {}

}
