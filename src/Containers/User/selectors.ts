import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectUserDomain = (state: { userReducer: any; }) => state.userReducer || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    (substate: { user: object; }) => substate.user
  );

const makeSelectLoading = () =>
  createSelector(
    selectUserDomain,
    (substate: { loading: boolean; }) => substate.loading
  );

const makeSelectError = () =>
  createSelector(
    selectUserDomain,
    (substate: { error: string; }) => substate.error
  );

const makeSelectSuccess = () =>
  createSelector(
    selectUserDomain,
    (substate: { success: string; }) => substate.success
  );

const makeSelectFail = () =>
  createSelector(
    selectUserDomain,
    (substate: { fail: string; }) => substate.fail
  );
export {
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectFail,
  makeSelectSuccess
};