import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
export const store = createStore(
    rootReducer,applyMiddleware(logger,promise,thunk)
    );