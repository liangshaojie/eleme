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
export const getUser = () => setpromise(login.userInfo);
export const getAddressList = (user_id) => setpromise(addresspart.address);
export const cityGuess = () => setpromise(home.guesscity);
export const hotcity = () => setpromise(home.hotcity);
export const groupcity = () => setpromise(home.groupcity);
export const currentcity = number => setpromise(city.currentcity);
export const searchplace = (cityid, value) => setpromise(city.searchdata);
export const msiteAdress = geohash => setpromise(msite.msiteAdress);
export const msiteFoodTypes = geohash => setpromise(msite.foodTypes);
export const shopList = (latitude, longitude, offset) => setpromise(msite.shopList);
export const searchRestaurant = (geohash, keyword) => setpromise(search.searchData);
export const foodCategory = (latitude, longitude) => setpromise(food.category);
export const foodDelivery = (latitude, longitude) => setpromise(food.delivery);
export const foodActivity = (latitude, longitude) => setpromise(food.activity);
export const shopDetails = (shopid, latitude, longitude) => setpromise(shop.shopDetails);
export const foodMenu = restaurant_id => setpromise(shop.shopMenu);
export const getRatingList = (offset, tag_name = '') => setpromise(shop.ratingList);
export const ratingScores = shopid => setpromise(shop.scores);
export const ratingTags = shopid => setpromise(shop.tage);

