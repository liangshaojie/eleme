import fetch from '../config/fetch'
import * as home from './tempdata/home'
import * as city from './tempdata/city'
import * as msite from './tempdata/msite'
import * as search from './tempdata/search'
import * as food from './tempdata/food'
import * as shop from './tempdata/shop'
import * as login from './tempdata/login'
import * as confirm from './tempdata/confirm'
import * as order from './tempdata/order'
import * as service from './tempdata/service'
import * as addDetail from './tempdata/addDetail'
import * as addresspart from './tempdata/address'
import * as vip from './tempdata/vip'

/**
 * 以下是临时数据
 */
const setpromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

//编译环境使用真实数据
// if (process.env.NODE_ENV == 'development') {
//     /**
//      * 获取首页默认地址
//      */
//     var cityGuess = () => fetch('GET', '/v1/cities', {
//         type: 'guess'
//     });
// }

//编译环境使用真实数据
if(process.env.NODE_ENV == 'development'){
    // 下订单
    var placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => setpromise(confirm.palceOrder);
    // var placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => fetch('POST', '/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
    //     address_id,
    //     come_from: "mobile_web",
    //     deliver_time: "",
    //     description,
    //     entities,
    //     geohash,
    //     paymethod_id: 1,
    //     sig,
    // });
    // 获取地址列表    接口有问题
    var getAddress = (id, sig) => setpromise(confirm.addressList);
    // var getAddress = (id, sig) => fetch('GET', '/v1/carts/' + id + '/addresses', {
    //     sig
    // });
    // 确认订单    接口有问题
    var checkout = (geohash, entities) => setpromise(confirm.checkout);
    // var checkout = (geohash, entities) => fetch('POST', '/v1/carts/checkout', {
    //     come_from: "web",
    //     geohash,
    //     entities,
    // });
     //  获取商铺评价分类
    var ratingTags = shopid => fetch('GET', '/ugc/v2/restaurants/' + shopid + '/ratings/tags', {});
    // 获取商铺评价分数
    var ratingScores = shopid => fetch('GET', '/ugc/v2/restaurants/' + shopid + '/ratings/scores', {});
    /**
     * 获取商铺评价列表
     */
    var getRatingList = (offset, tag_name = '') => fetch('GET', '/ugc/v2/restaurants/834828/ratings', {
        has_content: true,
        offset,
        limit: 10,
        tag_name
    });
    // 获取food页面的商家属性活动列表
    var foodMenu = restaurant_id => fetch('GET', '/shopping/v2/menu', {
        restaurant_id
    });
    // 获取shop页面商铺详情
    var shopDetails = (shopid, latitude, longitude) => fetch('GET', '/shopping/restaurant/' + shopid, {
        latitude,
        longitude: longitude + '&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
    });
    // 获取food页面的商家属性活动列表
    var foodActivity = (latitude, longitude) => fetch('GET', '/shopping/v1/restaurants/activity_attributes', {
        latitude,
        longitude,
        kw: ''
    });
    // 获取food页面的配送方式
    var foodDelivery = (latitude, longitude) => fetch('GET', '/shopping/v1/restaurants/delivery_modes', {
        latitude,
        longitude,
        kw: ''
    });
    // 获取food页面的 category 种类列表
    var foodCategory = (latitude, longitude) => fetch('GET', '/shopping/v2/restaurant/category', {
        latitude,
        longitude
    });
    // 获取search页面搜索结果
    var searchRestaurant = (geohash, keyword) => fetch('GET', '/v4/restaurants', {
        'extras[]': 'restaurant_activity',
        geohash,
        keyword,
        type: 'search'
    });
    // 获取msite商铺列表
    var shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
        let supportStr = '';
        support_ids.forEach(item => {
            if (item.status) {
                supportStr += '&support_ids[]=' + item.id;
            }
        });
        let data = {
            latitude,
            longitude,
            offset,
            limit: '20',
            'extras[]': 'activities',
            keyword: '',
            restaurant_category_id,
            'restaurant_category_ids[]': restaurant_category_ids,
            order_by,
            'delivery_mode[]': delivery_mode + supportStr
        };
        return fetch('GET', '/shopping/restaurants', data);
    };
    // 获取msite页面食品分类列表
    var msiteFoodTypes = geohash => fetch('GET', '/v2/index_entry', {
        geohash,
        group_type: '1',
        'flags[]': 'F'
    });
    // 获取msite页面地址信息
    var msiteAdress = geohash => fetch('GET', '/v2/pois/' + geohash, {});
    // 获取搜索地址
    var searchplace = (cityid, value) => fetch('GET', '/v1/pois', {
        type: 'search',
        city_id: cityid,
        keyword: value
    });
    // 获取当前所在城市
    var currentcity = number => fetch('GET', '/v1/cities/' + number, {});
    // 获取首页所有城市
    var groupcity = () => fetch('GET', '/v1/cities', {type: 'group'});
    // 获取首页热门城市
    var hotcity = () => fetch('GET', '/v1/cities', {type: 'hot'});
    // 个人中心里编辑地址
    var getAddressList = (user_id) => fetch('GET', '/v1/users/'+user_id+'/addresses')
    // 获取用户信息
    var getUser = () => setpromise(login.userInfo);
    // var getUser = () => fetch('GET', '/v1/user', {});     //这个接口有问题，用模拟数据
    // 获取首页默认地址
    var cityGuess = () => fetch('GET', '/v1/cities', {type: 'guess'});
}else{
    var placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => setpromise(confirm.palceOrder);
    var getAddress = (id, sig) => setpromise(confirm.addressList);
    var checkout = (geohash, entities) => setpromise(confirm.checkout);
    var ratingTags = shopid => setpromise(shop.tage);
    var ratingScores = shopid => setpromise(shop.scores);
    var getRatingList = (offset, tag_name = '') => setpromise(shop.ratingList);
    var foodMenu = restaurant_id => setpromise(shop.shopMenu);
    var shopDetails = (shopid, latitude, longitude) => setpromise(shop.shopDetails);
    var foodActivity = (latitude, longitude) => setpromise(food.activity);
    var foodDelivery = (latitude, longitude) => setpromise(food.delivery);
    var foodCategory = (latitude, longitude) => setpromise(food.category);
    var searchRestaurant = (geohash, keyword) => setpromise(search.searchData);
    var shopList = (latitude, longitude, offset) => setpromise(msite.shopList);
    var msiteFoodTypes = geohash => setpromise(msite.foodTypes);
    var msiteAdress = geohash => setpromise(msite.msiteAdress);
    var searchplace = (cityid, value) => setpromise(city.searchdata);
    var currentcity = number => setpromise(city.currentcity);
    var groupcity = () => setpromise(home.groupcity);
    var hotcity = () => setpromise(home.hotcity);
    var getAddressList = (user_id) => setpromise(addresspart.address);
    var getUser = () => setpromise(login.userInfo);
    var cityGuess = () => setpromise(home.guesscity);
}

export {placeOrders,getAddress,checkout,ratingTags,ratingScores,getRatingList,foodMenu,shopDetails,foodActivity,foodDelivery,foodCategory,searchRestaurant,shopList,msiteFoodTypes,msiteAdress,searchplace,currentcity,groupcity,hotcity,getAddressList,getUser,cityGuess}









