//action value
export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";

//action creater: action value를 리턴하는 함수
export const plusOne=()=>{
  return {type: PLUS_ONE}
}
export const minusOne=()=>{
  return {type: MINUS_ONE}
}

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
    case PLUS_ONE:
      return { number: state.number + 1 };
    case MINUS_ONE:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counter;
