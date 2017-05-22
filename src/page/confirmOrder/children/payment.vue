<template>
    <div class="rating_page">
        <head-top head-title="在线支付" go-back='true'></head-top>
    </div>
</template>

<script>
    import headTop from '../../../../src/components/header/head'
    export default {
        data(){
            return{
                payDetail: false, //付款信息详情
                showAlert: false,
                alertText: null,
                payWay: 1, //付款方式
                countNum: 900, //倒计时15分钟
                gotoOrders: false, //去付款
            }
        },
        components: {
            headTop,
//            alertTip,
        },
    }
</script>

<style lang="scss" scoped>

</style>