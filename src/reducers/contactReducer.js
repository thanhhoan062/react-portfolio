import { GET_CONTACTS } from '../actions/types';
const initialState = {
  contacts: [],
  contact: {},
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
export default contactReducer;
