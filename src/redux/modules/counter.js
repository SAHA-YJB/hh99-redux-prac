//초기상태값
const initState = {
  number: 0,
};
//const [number, setNumber] = useState(0)

//reducer: state의 변화를 일으키는 함수
// 1. state를 action의 type에 따라 변경하는 함수
//input: state action
const counter = (state = initState, action) => {
  switch (action.type) {
    case "plus_one":
      return { number: state.number + 1 };
    case "minus_one":
      return { number: state.number - 1 }
    default:
      return state;
  }
};

export default counter;
