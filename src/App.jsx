import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { PLUS_ONE } from "./redux/modules/counter"; //actionValue
// import { MINUS_ONE } from "./redux/modules/counter"; //actionValue
import { plusOne } from "./redux/modules/counter"; //actionCreate
import { minusOne } from "./redux/modules/counter"; //actionCreate
import { plusN, minusN } from "./redux/modules/counter";


function App() {
  const [number, setNumber] = useState(0);
 

  //store에 접근하여 카운터의 값을 읽어오고 싶다
  //useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });
  //디스패치가져오기
  const dispatch = useDispatch();

  const inputStateChange = (e) => {
    const { value } = e.target
    setNumber(+value);//+기호를 붙이면 자동 숫자형변환
  };

  return (
    <>
      <div>현재카운트 : {counter.number}</div>
      <div>
        <input type="number" value={number} onChange={inputStateChange} />
      </div>
      <button
        onClick={() => {
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
