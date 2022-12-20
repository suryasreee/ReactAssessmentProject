let initialState = [
  {
    name: "User",
    email: "user@mail.com",
    isDone: false
  }
];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.payload.Name,
          email: action.payload.Email,
          isDone: false
        }
      ];
    case "GET_TODO":
      const newState = [...state];
      return newState;
    case "UPDATE_TODO": {
      const newState2 = [...state];
      return newState2.map((value, index) =>
        index === action.payload.Index
          ? {
              name: action.payload.Name,
              email: action.payload.Email,
              isDone: true
            }
          : value
      );
    }
    default:
      return state;
  }
}
