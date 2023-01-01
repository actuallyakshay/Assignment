export const GET_ALL_USERS = (item) => {
  return {
    type: "get/users",
    payload: item,
  };
};

export const GET_SINGLE_USER_ACTION = (item) => {
  return {
    type: "get/singleuser",
    payload: item,
  };
};
