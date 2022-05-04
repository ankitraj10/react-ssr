import axios from "axios";

export const FETCH_USER = "fetch_user";
export const fetchUser = () => async (dispatch) => {
  console.log("user function getting called");
  const res = await axios.get("https://react-ssr-api.herokuapp.com/users");
  dispatch({
    type: FETCH_USER,
    payload: res,
  });
};
