
import * as fromShipActions from '../actions/ships.actions';

export interface State {
  allShips: any[];
}

export const initialState: State = {
  allShips: [],
};

export function reducer(state = initialState, action: fromShipActions.ShipsActions): State {
  switch (action.type) {

    case fromShipActions.ShipsActionTypes.SetShips:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

export const getAllShips = (state: State) => state.allShips;

function handleSetShips(state, action: fromShipActions.SetShips): State {
  return {
    ...state,
    allShips: action.payload
  };
}
