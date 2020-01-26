import marked from "marked";

export const markdownReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      const rawData = action.data;
      const html = marked(rawData);
      state.parsedData = html;
      return { ...state, rawData, parsedData: html };
    default:
      return state;
  }
};
