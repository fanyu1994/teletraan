<template>
  <div class="aside" ref="aside">
    <span class="aside_name">{{name}}</span>
    <div class="aside_tx"> 
      <img :src="img" alt="我是头像" class="aside_tx_img">
      <!-- 蒙层转动 -->
      <div class="aside_tx_one"></div>
    </div>
    <ul class="aside_ui">
      <li>性别：男</li>
      <li>部门：销售部</li>
      <li>职务：销售员</li>
      <li>编号：NO.{{num}}</li>
      <li>收入：{{obj[0].income}}万</li>
      <li>评分：{{obj[0].grade}}</li>
      <li>排名：{{obj[0].rank}}</li>
    </ul>
  </div>
</template>
<script>
import img1 from "../../public/img/tx.jpg"
import data from "../../public/data.js"

export default {
  data(){
    return{
      img:img1,
      name:"",
      num:0,
      obj:[{
        income:"***",
        grade:"***",
        rank:"***"
      }]
    }
  },
  created(){
    this.num = Math.floor(Math.random()*100)
    this.$nextTick(()=>{
      this.name = localStorage.getItem("username")
      if (this.name != "admin") {
        this.obj = data.data.filter(item=>item.name == this.name)
      }
    })
  },
  methods:{
    oa(){
      this.$refs.aside.className = "aside_B"
      setTimeout(() => {
        this.$refs.aside.className = "aside"
      }, 3000);
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/aside.styl"
</style>