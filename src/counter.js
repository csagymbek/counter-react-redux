const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

export default function counterReducer(state = 0, { type }) {
  switch (type) {
    case ADD:
      return (state = state + 1);
    case SUBTRACT:
      if (state === 0) return state;
      return (state -= 1);
    default:
      return state;
  }
}

export const add = () => ({ type: ADD });
export const subtract = () => ({ type: SUBTRACT });
