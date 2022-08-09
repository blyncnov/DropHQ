import { IS__ORDERING, CANCEL__ORDER } from "../actions/action";

const InitialState = {
  isOrdering: false,
  cart: [],
};

export const cartReducers = (state = InitialState, action) => {
  switch (action.type) {
    case IS__ORDERING:
      return {
        ...state,
        isOrdering: true,
      };
    case CANCEL__ORDER:
      return {
        ...state,
        isOrdering: false,
      };
    default:
      return state;
  }
};

export default cartReducers;
