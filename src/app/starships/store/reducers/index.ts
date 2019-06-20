import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromShips from './ships.reducer';
import * as fromRoot from '../../../store/reducers';

export interface StarshipsState {
    ships: fromShips.State;
}

export interface State extends fromRoot.State {
    ships: StarshipsState;
}

export const reducers: ActionReducerMap<StarshipsState> = {
    ships: fromShips.reducer
};

export const selectStarshipsState = createFeatureSelector<StarshipsState>('starships');

export const selectShips = createSelector(selectStarshipsState, (state) => state.ships);
export const getAllShips = createSelector(selectShips, fromShips.getAllShips);
