import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

export const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      var newList = [...state.wishList, action.payload];
      return {
        wishList: newList,
      };
    case DELETE_ITEM:
      newList = state.wishList.filter((value, index, array) => {
        return value !== (action.payload);
      });
      return {
        wishList: newList,
      };
    default:
      return {
        wishList: state.wishList,
      };
  }
};

export default reducer;
