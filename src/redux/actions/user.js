import axios from 'axios';
import { server } from '../store'
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });
        const { data } = await axios.get(`${server}/me`, { withCredentials: true })
        dispatch({ type: "loadUserSuccess", payload: data.user });

    } catch (error) {
        dispatch({ type: "loadUserFail", payload: error.response.data.message });
    }
}
export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutUserRequest" });
        const { data } = await axios.get(`${server}/logout`, { withCredentials: true })
        dispatch({ type: "logoutUserSuccess" });

    } catch (error) {
        dispatch({ type: "logoutUserFail", payload: error.response.data.message });
    }
}