import axios from "axios";
import * as actions from "./Action";

export const handleLogin = (loginDetails) => (dispatch) => {
  const payLoad = {
    username: loginDetails.username,
    password: loginDetails.password,
  };
  const config = {
    url: "https://fakestoreapi.com/auth/login",
    method: "POST",
    data: payLoad,
  };
  return axios(config)
    .then((res) => {
      console.log(res);
      const loginAction = actions.loginUser(res.data.token);
      dispatch(loginAction);
    })
    .catch((err) => {
      const failureAction = actions.loginFailure();
      dispatch(failureAction);
    });
};
