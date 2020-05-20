import { all } from "redux-saga/effects";

import { watchers as teams } from "./teams";
import { watchers as matches } from "./matches";

const transform = (watchers) => watchers.map((watcher) => watcher());

export function* rootSaga() {
	yield all([...transform(teams), ...transform(matches)]);
}
