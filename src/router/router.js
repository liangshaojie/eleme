import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city');
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite');
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search');
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile');
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food');
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页城市列表页
    {
      path: '/home',
      component: home
    },
    //订单列表页
    {
      path: '/order',
      component: order,
      // children: [{
      //   path: 'orderDetail', //订单详情页
      //   component: orderDetail,
      // },]
    },
    //当前选择城市页
    {
      path: '/city/:cityid',
      component: city
    },
    //所有商铺列表页
    {
      path: '/msite',
      component: msite,
    },
    //搜索页
    {
      path: '/search/:geohash',
      component: search
    },
    //个人信息页
    {
      path: '/profile',
      component: profile,
    },
    //特色商铺列表页
    {
      path: '/food',
      component: food
    },
    {
      path: '/shop',
      component: shop,
      children: [{
        path: 'shopDetail', //商铺详情页
        component: shopDetail,
        children: [{
          path: 'shopSafe', //商铺安全认证页
          component: shopSafe,
        },]
      }, {
        path: 'foodDetail', //食品详情页
        component: foodDetail,
      }]
    },
    //确认订单页
    {
      path: '/confirmOrder',
      component: confirmOrder,
      children: [
        {
          path: 'chooseAddress', //选择地址
          component: chooseAddress,
          children: [
            {
              path: 'addAddress', //添加地址
              component: addAddress,
              children: [
                {
                  path: 'searchAddress', //搜索地址
                  component: searchAddress,
                }
              ]
            }
          ]
        }, {
          path: 'remark', //订单备注
          component: remark,
        }, {
          path: 'invoice', //发票抬头
          component: invoice,
        }, {
          path: 'payment', //付款页面
          component: payment,
        }, {
          path: 'userValidation', //用户验证
          component: userValidation,
        }
      ]
    }

  ]
}]
