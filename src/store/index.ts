import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root.reducer";
import thunk from "redux-thunk";

export const thunkMiddleWare = applyMiddleware(thunk);
export const store = createStore(rootReducer, thunkMiddleWare);
export default store;