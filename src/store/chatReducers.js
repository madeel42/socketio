let initialData = {
  general: [
    { from: "ali", msg: "hi" },
    { from: "umer", msg: "hi" },
  ],
  topic2: [
    { from: "ali", msg: "hello" },
    { from: "usman", msg: "hi" },
  ],
};
export const chatReducers = (state = initialData, action) => {
  //   debugger;
    // const { from, msg, topic } = action;
  switch (action.type) {
    case "Received_message":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from:action.payload.from,
            msg:action.payload.msg,
          },
        ],
      };
  }
  return state;
};
