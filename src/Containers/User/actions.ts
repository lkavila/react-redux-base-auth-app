import userActionsTypes from './constants';
import { UserType } from '../../global-types';

export const change = (target: object) => {
  return {
    type: userActionsTypes.CHANGE,
    payload: { target }
  };
};

export const register = (userData: UserType) => {
  return {
    type: userActionsTypes.REGISTER,
    userData
  };
};

export const login = (target: object) => {
  return {
    type: userActionsTypes.LOGIN,
    payload: { target }
  };
};

export const loading = (target: boolean) => {
  return {
    type: userActionsTypes.LOADING,
    payload: target
  };
};

export const error = (target: string) => {
  return {
    type: userActionsTypes.ERROR,
    payload: target
  };
};

export const success = (target: string) => {
  return {
    type: userActionsTypes.SUCCESS,
    payload: target
  };
};

export const fail = (target: string) => {
  return {
    type: userActionsTypes.FAIL,
    payload: target
  };
};