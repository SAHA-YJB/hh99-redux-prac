// 중앙 데이터 관리소 설정하는 파일
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/users";

const rootReducer = combineReducers({
  //리듀서(함수)들 들어올 곳
  counter,
  users
})
const store = createStore(rootReducer)

export default store;