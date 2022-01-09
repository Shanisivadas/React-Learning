import { createStore, combineReducers ,applyMiddleware} from "redux";
import MyReducer from "../reducers/MyReducer";
import SecondReducer from "../reducers/SecondReducer";
import logger from "redux-logger"

const combinedReducers = combineReducers({
  r1: MyReducer,
  r2: SecondReducer,
});

const MyStore = createStore(combinedReducers,applyMiddleware(logger));

export default MyStore;
