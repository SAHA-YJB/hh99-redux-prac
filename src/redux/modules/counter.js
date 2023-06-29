//action value
export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

//action creater: action value를 리턴하는 함수
export const plusOne = () => {
  return { type: PLUS_ONE };
};
export const minusOne = () => {
  return { type: MINUS_ONE };
};
export const plusN = (payload) => {
  return { type: PLUS_N, payload };
};
export const minusN = (payload) => {
  return { type: MINUS_N, payload };
};

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
    case PLUS_N:
      return { number: state.number + action.payload };
    case MINUS_N:
      return { number: state.number - action.payload };
    default:
      return state;
  }
};

export default counter;
