import { takeLatest, call, put, select } from "redux-saga/effects";
import GithubApiClient from "../../../../service/GithubApiClient";
import { RootState } from "../../../../redux/reducers";
import { groupByDate } from "../../../../util/UtilFunctions";

import { getPublicGistsSuccess, GET_PUBLIC_GISTS } from "../actions";
import {IGist} from "../../Interfaces";

const GithubApi = new GithubApiClient();

export function* getPublicGists() {
  try {
    const gistCreatedPage: number = yield select(
      (store: RootState) => store.publicGists.page);
    const data: IGist[] = yield call(
      GithubApi.gists.getPublicGists,
      gistCreatedPage);
    yield put(getPublicGistsSuccess(groupByDate(data.reverse(), 5), data));
  } catch (e) {
    console.error(e);
  }
}

export default function* fetchDataWatcher() {
  yield takeLatest(GET_PUBLIC_GISTS, getPublicGists);
}
