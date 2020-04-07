<template>
  <div class="main">
    <b-container class="main_ctn">
      <b-row>
        <b-col cols="10">
          <leftcomponent></leftcomponent>
        </b-col>
        <b-col cols="2" class="main_info">
          <span>备注：</span>
          <p>
          1、条形图内拖动/滚动鼠标可看全局
          </p>
          <p>
          2、饼图（左）呈现的是各区间比重，饼图（右）呈现了同一小区间中收入的分布情况（比如在 B-区间中，大部分人的收入是偏左侧
              300 或偏右侧 500)
          </p>
          <p>
          3、饼图的圆心角大小和凹凸高低都代表了区间占比情况
          </p>
          <p>
          4、条形图图例和饼图图例对等，可参考条形图图例各个区间数据
          </p>
        </b-col>
        <b-col cols="10">
          <rightcomponent></rightcomponent>
        </b-col>
        <b-col cols="2" class="main_data">
          <img :src="img" alt="" @click="refresh">
          <ul>
            <li>总业绩：{{incomeObj.allIncome}}万元</li>
            <li>A: {{incomeObj.a}}万元</li>
            <li>A-:{{incomeObj.aa}}万元</li>
            <li>B+:{{incomeObj.B}}万元</li>
            <li>B: {{incomeObj.b}}万元</li>
            <li>B-:{{incomeObj.bb}}万元</li>
            <li>C: {{incomeObj.C}}万元</li>
            <li>D: {{incomeObj.D}}万元</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import leftcomponent from "./mainLeft.vue"
import rightcomponent from "./mainRight.vue"
import data from "../../public/data.js"
import img from "../../public/img/sx.svg"

export default {
  data(){
    return {
      incomeObj:{},
      img
    }
  },
  components:{
    leftcomponent,
    rightcomponent
  },
  created(){
    ////各区间金额
    let obj = localStorage.getItem("incomeObj")
    if (obj.allIncome) {
      this.incomeObj = obj
    }else{
      this.incomeObj = this.setIncome()
      localStorage.setItem("incomeObj",this.incomeObj)
    }
  },
  methods:{
    //获取各区间金额
    setIncome(){
      let allIncome,a,aa,B,b,bb,C,D;
      allIncome = data.data.reduce((pre,cur)=>{
      return pre += cur.income
      },0)
      a = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="A"?cur.income:0
      },0)
      aa = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="A-"?cur.income:0
      },0)
      B = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="B+"?cur.income:0
      },0)
      b = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="B "?cur.income:0
      },0)
      bb = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="B-"?cur.income:0
      },0)
      C = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="C "?cur.income:0
      },0)
      D = data.data.reduce((pre,cur)=>{
        return pre += cur.grade=="D"?cur.income:0
      },0)
      return {
        allIncome,
        a,
        aa,
        B,
        b,
        bb,
        C,
        D,
      }
    },
    //刷新数据
    refresh(){
      localStorage.removeItem("incomeObj")
      this.incomeObj = this.setIncome()
      localStorage.setItem("incomeObj",this.incomeObj)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/main.styl"
</style>