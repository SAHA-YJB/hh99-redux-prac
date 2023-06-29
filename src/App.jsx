import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { PLUS_ONE } from "./redux/modules/counter";//actionValue
import { MINUS_ONE } from "./redux/modules/counter";//actionValue
import { plusOne } from "./redux/modules/counter";//actionCreate
import { minusOne } from "./redux/modules/counter";//actionCreate
function App() {
  //store에 접근하여 카운터의 값을 읽어오고 싶다
  //useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });
  //디스패치가져오기
  const dispatch = useDispatch();
  return (
    <>
      <div>현재카운트 : {counter.number}</div>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
