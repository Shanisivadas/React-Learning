import data from "../InitialValu";

const MyReducer = (state = data, action) => {
  alert("myReducer is called");
  switch (action.type) {
    case "Name":
      return {
        ...state,
        name: action.payload,
      };
      default: return state;
  }
};
export default MyReducer;
