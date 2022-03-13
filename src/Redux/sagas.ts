import { all } from 'redux-saga/effects';
import { userSagas } from "../Containers/User/saga"
//import { mapSagas } from '../containers/Map/saga';
//import { placeSagas } from '../containers/Place/saga';

const superSagas = [...userSagas];

export default function* rootSaga() {
    yield all([...superSagas]);
};