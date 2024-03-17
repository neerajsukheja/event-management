export const showAlert = (message, type, time = 5000) => {
  return {
    type: "SHOW_ALERT",
    payload: { message, type, time },
  };
};

export const hideAlert = () => {
  return {
    type: "HIDE_ALERT",
  };
};
