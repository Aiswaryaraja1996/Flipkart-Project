export const actionConstants = {
    "LOGIN_SUCCESS" : "LOGIN_SUCCESS",
    "LOGIN_FAILURE" : "LOGIN_FAILURE"

}

export const loginUser = (token) => {
    return {
      type: actionConstants.LOGIN_SUCCESS,
      payload: { token: token },
    };
  };

  export const loginFailure = () => {
    return {
      type: actionConstants.LOGIN_FAILURE,
      payload: { isError: true },
    };
  };