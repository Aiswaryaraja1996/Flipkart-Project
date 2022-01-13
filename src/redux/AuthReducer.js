import { actionConstants } from "./Action";
import { loadData, saveData } from "../utils/localStorage";

const token = loadData("token") || null;

const initialState = {
  isAuth: token != null,
  token: token,
  isError:false
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.LOGIN_SUCCESS:
      saveData("token", action.payload.token);
      return { ...state, isAuth: true, token: action.payload.token };
    default:
      return state;
  }
}
