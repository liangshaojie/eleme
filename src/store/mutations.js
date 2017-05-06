import {
	GET_USERINFO,
	SAVE_ADDRESS,
	SAVE_GEOHASH,
	RECORD_ADDRESS,
	SAVE_AVANDER,
	INIT_BUYCART,
	RECORD_SHOPDETAIL,
    ADD_CART,
    REDUCE_CART,
    CLEAR_CART
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
    // 加入购物车
    [ADD_CART](state, {shopid, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock}) {
        let cart = state.cartList;
        let shop = cart[shopid] = (cart[shopid] || {});
        let category = shop[category_id] = (shop[category_id] || {});
        let item = category[item_id] = (category[item_id] || {});
        if (item[food_id]) {
            item[food_id]['num']++;
        } else {
            item[food_id] = {
                "num" : 1,
                "id" : food_id,
                "name" : name,
                "price" : price,
                "specs" : specs,
                "packing_fee" : packing_fee,
                "sku_id" : sku_id,
                "stock" : stock
            };
        }
        state.cartList = {...cart};
        //存入localStorage
        setStore('buyCart', state.cartList);
    },
    // 移出购物车
    [REDUCE_CART](state, {shopid, category_id, item_id, food_id, name, price, specs,}) {
        let cart = state.cartList;
        let shop = (cart[shopid] || {});
        let category = (shop[category_id] || {});
        let item = (category[item_id] || {});
        if (item && item[food_id]) {
            if (item[food_id]['num'] > 0) {
                item[food_id]['num']--;
                state.cartList = {...cart};
                //存入localStorage
                setStore('buyCart', state.cartList);
            } else {
                //商品数量为0，则清空当前商品的信息
                item[food_id] = null;
            }
        }
    },
    //清空当前商品的购物车信息
    [CLEAR_CART](state, shopid) {
        state.cartList[shopid] = null;
        state.cartList = {...state.cartList};
        setStore('buyCart', state.cartList);
    },

}



