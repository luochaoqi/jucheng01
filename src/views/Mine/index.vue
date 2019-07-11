<template>
    <div class="mine">
        <div class="qcl-header">
            <div class="header-box">
                <i class="iconfont icon-fanhui" @click="tohome"></i>
            </div>
        </div>
        <div class="qcl-conten">
            <h2>欢迎来到聚橙网</h2>
                <div class="conten-box01">
                    <label class="tel-label">+86</label>
                    <input type="text" name="text" placeholder="请输入手机号" class="box01-input">
                    <hr>
                    <p class="tip">未注册手机号验证成功后自动创建账户</p>       
                </div>
                <p class="conten-p">获取验证码</p>
                <div class="conten-box02">
                    <span class="tg-mail">邮箱注册</span>
                    <span class="tg-login">密码登录</span>
                </div>
        </div>
        <div class="qcl-foor">
            <div class="foor-box01">
                <i class="i01"></i>
                <span>其他登录方式</span>
                <i class="i01"></i>
            </div>
            <div class="foor-box02">
                <i class="iconfont icon-qq"></i>
                <i class="iconfont icon-ziyuan"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
       tohome(){
           this.$router.push("/Home");
       }
    }

}
</script>

<style scoped>
    .qcl-header{
        width: 100%;
        height: 100%;
        background-image: url(../../assets/login_bg.png);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center center;    
        }
    .header-box{
        width: 100%;
        height: .6rem;
        line-height: .6rem;
    }
    .header-box>i{
        font-size: .3rem;
        margin-left: .1rem; 
    }
    .qcl-conten{
        width: 85%;
        height: 4rem;
        margin: 0 auto;
        overflow: hidden;
        padding: .1rem;
    }
    .qcl-conten>h2{
        margin: .4rem;
        text-align: center;
        font-size: .3rem;
    }
    .conten-box01{
        width: 100%;
        height: .8rem;
        margin-top: .6rem;
    }
    .tel-label{
        font-size: .26rem;
        color: #ff6743;
    }
    .box01-input{
        width: 84%;
        height: .4rem;
        border: 0;
        font-size: .2rem;
        margin-left: .08rem;
    }
    .conten-box01 .tip{
        font-size: .14rem;
    }
    .qcl-conten .conten-p{
        width: 85%;
        height: .4rem;
        background: #ff6743;
        text-align: center;
        line-height: .4rem;
        margin-left: .2rem;
        margin-top: .4rem;
        border-radius: .18rem;
        font-size: .16rem;
    }
    .conten-box02{
        width: 85%;
        height: .2rem;
        margin-left: .2rem;
        margin-top: .08rem;
        display: flex;
        justify-content: space-between;
    }
    .conten-box02 .tg-mail{
        font-size: .16rem;
    }
    .conten-box02 .tg-login{
        font-size: .16rem;
    }
    .qcl-foor{
        width: 85%;
        height: 2rem;
        margin-left: .32rem;    
    }
    .foor-box01{
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
    }
    .foor-box01 .i01{
        width: 1rem;
        height: 1px;
        background: #ccc;
        display: inline-block;
    }
    .foor-box01>span{
        padding: 0 .2rem;
    }
    .foor-box02{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .foor-box02>i{
        font-size: .3rem;
    }
</style>
