import { createStore } from "redux";
import userLoginReducer from "./Reducer";

var UsernameStore = createStore(userLoginReducer)

function isLoggedIn(){
	return UsernameStore.GetState().username !== undefined
}

export { isLoggedIn }
export default UsernameStore