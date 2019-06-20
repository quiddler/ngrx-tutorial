import { Action } from '@ngrx/store';

export enum ShipsActionTypes {
  LoadShips = '[Ships] Load Ships',
  SetShips = '[Ships] Set Ships'
}

export class LoadShips implements Action {
  readonly type = ShipsActionTypes.LoadShips;
}

export class SetShips implements Action {
  readonly type = ShipsActionTypes.SetShips;

  constructor(public payload: any) {}
}

export type ShipsActions = LoadShips | SetShips;
