export default function reducer(state, action) {
    switch (action.type) {
      //   when true it sets formdata state with the news values
      case "setFormData": {
        return {
          ...state,
          [action.data.name]: action.data.value,
        };
      }
      //   when true it sets userMessage state with the news values
      case "setUserMessage": {
        return {
          ...state,
          userMessage: action.data,
        };
      }
  
      default:
        return state;
    }
  }
  