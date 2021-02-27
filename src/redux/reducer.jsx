import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

export const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  var newList;
  switch (action.type) {
    case ADD_ITEM:
      newList = [...state.wishList]
      newList.push(action.payload)
      break;
    case DELETE_ITEM:
      newList = state.wishList.filter((value, index, array) => {
        return value.equals(action.payload);
      });
      break;
    default:
      newList = state.wishList;

    return {
      wishList: newList,
    };
  }
};

export default reducer;
