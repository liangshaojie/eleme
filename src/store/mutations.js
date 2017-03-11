import {
	GET_USERINFO,
	SAVE_ADDRESS
}from './mutation-types.js'


export default {
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = info;
			let validity = 30;
			let now = new Date();
			now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
			document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
			document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
		} else {
			state.userInfo = null;
		}
	},
	//删除地址列表
	[SAVE_ADDRESS](state, newAdress) {
		state.removeAddress = newAdress
	},

}



