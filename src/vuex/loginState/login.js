//export const loginState={
export const state={
		login:true
	}
export const mutations={
		Success (state) {
			state.login=true;
		},
		fail (state) {
			state.login=false;
		}
	}
//}
