import {
	GET_USERINFO,
	SAVE_ADDRESS,
	SAVE_GEOHASH,
	RECORD_ADDRESS,
	SAVE_AVANDER,
	INIT_BUYCART,
	RECORD_SHOPDETAIL
}from './mutation-types.js'
import {
	setStore,
	getStore,
} from '../config/mUtils'

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
	//保存geohash
	[SAVE_GEOHASH](state,geohash){
		state.geohash = geohash
	},
	// 记录当前经度纬度
	[RECORD_ADDRESS](state,{latitude,longitude}){
		state.latitude = latitude;
		state.longitude = longitude;
	},
	//保存图片
	[SAVE_AVANDER](state, imgPath) {
		state.imgPath = imgPath;
	},
	//网页初始化时从本地缓存获取购物车数据
	[INIT_BUYCART](state) {
		let initCart = getStore('buyCart');
		if (initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	[RECORD_SHOPDETAIL](state, detail) {
		state.shopDetail = detail;
	},

}



