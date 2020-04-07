<template>
  <div class="login">
    <transition name="fade">
      <alert 
        :alert="alert" 
        :color="color"
        :bg="bg"
        v-if="openAlert"
        ></alert>
    </transition>
    <div class="login_title">xxx公司员工销售业绩查询系统</div>
    <span class="login_account_name">用户名：</span>
    <input type="text" v-model="account" class="login_account">
    <span class="login_password_name">密码 ：</span>
    <input type="password" v-model="password" class="login_password">
    <button @click="sign" class="login_btn">登录</button>
  </div>
</template>
<script>
import alert from "../components/alert.vue"
import User from "../../public/user.js"
export default {
  data(){
    return {
      account:"",
      password:"",
      alert:"",
      bg:"",//错误色：#fef0f0 成功色：#f0f9eb 警告色：#fdf6ec 消息色：#edf2fc
      color:"",//错误色：#F56C6C 成功色：#67C23A 警告色：#E6A23C 消息色：#909399
      openAlert:0
    }
  },
  components:{
    alert//警示框
  },
  methods:{
    /**
     * 警告消息弹窗
     * color:string 字体颜色
     * bg:string 背景颜色
     * alert:string 消息
     */
    alertOpen(color,bg,alert){
      this.openAlert = 1
      this.color = color
      this.bg = bg
      this.alert = alert
      let st = null;
        if (st) {
          clearTimeout(st)
        }
        st = setTimeout(() => {
          this.openAlert = 0
        }, 2000);
    },
    //登录
    sign(){
      //账户密码没输入时，报错！
      if (!this.account||!this.password) {
        this.alertOpen("#F56C6C","#fef0f0","请输入正确的用户名和密码！")
        return 
      }
      let index = User.data.findIndex((item)=>item.name==this.account)
      if (index != -1) {//用户存在
        if (User.data[index].password == this.password) {//密码正确
          this.alertOpen("#67C23A","#f0f9eb","登陆成功！")
          this.$router.push({
            name:"info",
            params:{
              name:this.account
            }
          })  
        }else{
          this.alertOpen("#E6A23C","#fdf6ec","密码不正确！")
        }
      }else{
        this.alertOpen("#E6A23C","#fdf6ec","用户不存在！")
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/login.styl"
.fade-enter-active,.fade-leave-active
  transition all .5s
.fade-enter,.fade-leave-to
  opacity 0 
  top -200px
</style>