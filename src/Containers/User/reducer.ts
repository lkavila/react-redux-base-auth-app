import produce from 'immer';
import userActionsTypes from "./constants"

export const initialState = {
  user: {},
  error: '',
  loading: false,
  fail: '',
  success: '',
}

const userReducer = (state = initialState, action: any) =>
  produce(state, draft => {

    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {

      // Do something here based on the different types of actions

      case userActionsTypes.LOGIN:
        draft.user = action.payload.data;
        break;

      case userActionsTypes.CHANGE:
        draft.user = action.payload.data;
        break;

      case userActionsTypes.LOADING:
        draft.loading = action.payload;
        break;

      case userActionsTypes.ERROR:
        draft.error = action.payload;
        break;

      case userActionsTypes.SUCCESS:
        draft.fail = '';
        draft.success = action.payload;
        break;

      case userActionsTypes.FAIL:
        draft.fail = action.payload;
        draft.success = '';
        break;
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        break;
    }
  });

export default userReducer;