import { all } from 'redux-saga/effects';
//import { userSagas } from '../containers/User/saga';
//import { mapSagas } from '../containers/Map/saga';
//import { placeSagas } from '../containers/Place/saga';

const superSagas = <any>[];

export default function* rootSaga() {
    yield all([...superSagas]);
};