const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'FETCH_DATA':
      return {
        ...state,
        data: action.payload,
      };

    case 'ADD_DATA':
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case 'TOGGLE_DATA':
      return {
        ...state,
        data: state.data.map((item) =>
          action.payload === item.id ? {...item, checked: !item.checked} : item,
        ),
      };

    case 'DELETE_DATA':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
