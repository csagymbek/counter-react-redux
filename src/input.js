const UPDATE_INPUT = "UPDATE_INPUT";

export default function inputReducer(state = 0, { type, payload }) {
  switch (type) {
    case UPDATE_INPUT:
      return payload;
    default:
      return state;
  }
}

export const updateInput = (inputValue) => ({
  type: UPDATE_INPUT,
  payload: inputValue,
});
