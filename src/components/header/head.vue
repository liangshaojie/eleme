<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <slot name='search'></slot>
        <section class="head_goback">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <!--<router-link class="head_login">-->
            <svg class="user_avatar">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span">登陆|注册</span>
        <!--</router-link>-->
        <section class="title_head ellipsis">
            <span class="title_text">4545454</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script type="text/ecmascript-6">
	import {mapState, mapActions} from 'vuex'
    export default{
    	data(){
            return{

            }
        },
        created(){
    		//获取用户的信息
	        this.getUserInfo();
        },
        computed:{
	        ...mapState([
		        'userInfo'
	        ]),
        },
        methods:{
            ...mapActions([
            	'getUserInfo'
            ]),
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../style/mixin';
    #head_top{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top:0;
        @include wh(100%,1.95rem);
    }
    .head_goback{
        left:0.4rem;
        @include wh(0.6rem,0.8rem);
        line-height: 2.2rem;
        margin-left: 0.4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }


</style>
