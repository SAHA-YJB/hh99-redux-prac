import "./App.css";
import { useSelector } from "react-redux";
function App() {
  //store에 접근하여 카운터의 값을 읽어오고 싶다
  //useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });
  console.log(counter.number);
  return <div>redux</div>;
}

export default App;
