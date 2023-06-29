import "./App.css";
import { useSelector, useDispatch } from "react-redux";
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
          dispatch({
            type: "plus_one",
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "minus_one",
          });
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
