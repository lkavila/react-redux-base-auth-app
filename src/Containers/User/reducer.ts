import produce from 'immer';
import userActionsTypes from "./constants"

export const initialState = {
  user: {},
  error: '',
  loading: false,
  loginFail: '',
  registerFail: '',
  success: '',
}

const userReducer = (state = initialState, action: any) =>
  produce(state, draft => {

    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {

      // Do something here based on the different types of actions

      case userActionsTypes.LOGIN_SUCCESS:
        draft.user = action.payload;
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
        draft.loginFail = '';
        draft.registerFail = '';
        draft.success = action.payload;
        break;

      case userActionsTypes.REGISTER_FAIL:
        draft.registerFail = action.payload;
        draft.success = '';
        break;
      case userActionsTypes.LOGIN_FAIL:
        draft.loginFail = action.payload;
        draft.success = '';
        break;
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        break;
    }
  });

export default userReducer;