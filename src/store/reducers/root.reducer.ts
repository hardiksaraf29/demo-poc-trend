import { combineReducers } from 'redux';
import { RetailerSubscriptionReducer } from './retailer-subscription.reducer';
import { NewsReducer } from './news.reducer';
export const rootReducer = combineReducers({
    RetailerSubscriptionData: RetailerSubscriptionReducer,
    NewsReducer:NewsReducer

});
export type RootReducerStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
