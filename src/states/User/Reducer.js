
const defaultState = {
	username: window.sessionStorage.getItem("username") ?? undefined
}

function userLoginReducer( state = defaultState, action ){
	if(action.type === "user/login") {
		window.sessionStorage.setItem("username", action.payload ?? undefined)

		return {
			...state,

			username:  action.payload ?? undefined
		}
	} else if (action.type === "user/logout") {
		window.sessionStorage.removeItem("username")
		
		return {
			...state,

			username: undefined
		}
	}

	return state
}

export { userLoginReducer }
export default userLoginReducer