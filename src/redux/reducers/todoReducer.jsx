const initialState = {};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default todoReducer;
