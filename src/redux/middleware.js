import { ADD_TASK } from "./actions";

import { takeEvery } from "@redux-saga/core/effects";

export function* addTask() {
  yield takeEvery(ADD_TASK, function* () {
    // we can perform as async operation here
    // no need of async calls for now
  });
}

export default function* () {
  yield* addTask();
}
