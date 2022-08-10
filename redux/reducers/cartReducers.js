import { IS__ORDERING, CANCEL__ORDER, ADD__TO__CART } from "../actions/action";

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
    case ADD__TO__CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducers;
