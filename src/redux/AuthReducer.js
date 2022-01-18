import { actionConstants } from "./Action";
import { loadData, saveData } from "../utils/localStorage";

const token = loadData("token") || null;

const initialState = {
  isAuth: token != null,
  token: token,
  isError: 0,
  isRegister: 0,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.LOGIN_SUCCESS:
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        isError: 1,
      };
    case actionConstants.LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      localStorage.removeItem("wishlist");

      return { ...state, isAuth: false, token: null, isRegister: 0 };
    case actionConstants.LOGIN_FAILURE:
      return { ...state, isAuth: false, isError: 2 };
    case actionConstants.REGISTER_REQUEST:
      return { ...state, isRegister: 1 };
    case actionConstants.REGISTER_SUCCESS:
      return { ...state, isRegister: 3 };
    default:
      return state;
  }
}
