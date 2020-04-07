<template>
  <div class="header">
    <span class="header-title">xxx公司员工销售业绩</span>
    <img :src="img" alt="" class="header_tc">
    <span class="header_name" @click="open">hi,<span class="header_name_name">{{name}}</span></span>
    <transition name="fade" mode="out-in">
      <div class="header_xl" v-if="isOpen">
        <div class="header_xl_j"></div>
        <div class="header_xl_x" @click="infoOpen">个人信息</div>
        <div class="header_xl_x" @click="signout">退出登陆</div>
      </div>
    </transition>
    <div class="header_img"><img :src="img1" alt="" class="header_img_img"></div>
  </div>
</template>
<script>
import img from "../../public/img/yu.png";
import img1 from "../../public/img/tx.jpg";
export default {
  data(){
    return {
      name:"",
      img,
      img1:img1,
      isOpen:0
    }
  },
  created(){
    this.$nextTick(()=>{
      this.name = localStorage.getItem("username")
    })
  },
  methods:{
    open(){
      this.isOpen = !this.isOpen
    },
    infoOpen(){
      this.$emit("openAside")
      this.isOpen = 0
    },
    signout(){
      this.$router.push("/")
      this.isOpen = 0
      localStorage.removeItem("username")
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/header.styl";
.fade-enter-active,.fade-leave-active
  transition all .5s
.fade-enter,.fade-leave-to
  opacity 0
</style>