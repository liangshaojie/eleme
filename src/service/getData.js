import fetch from '../config/fetch'
import * as home from './tempdata/home'
import * as login from './tempdata/login'
import * as addresspart from './tempdata/address'
import * as city from './tempdata/city'
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

