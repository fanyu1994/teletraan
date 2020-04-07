<template>
  <div class="main_right">
  </div>
</template>
<script>
import data from "../../public/data.js"

export default {
  data(){
    return {
      name:"",
      index:0,
      nameArr:[],
      incomeArr:[],
      gradeArr:[
        {value:0,name:"A"},
        {value:0,name:"A-"},
        {value:0,name:"B+"},
        {value:0,name:"B"},
        {value:0,name:"B-"},
        {value:0,name:"C"},
        {value:0,name:"D"}
      ],
      gradeTwoArr:[
        {value:0,name:"A"},
        {value:0,name:"A-左"},
        {value:0,name:"A-右"},
        {value:0,name:"B+左"},
        {value:0,name:"B+右"},
        {value:0,name:"B左"},
        {value:0,name:"B右"},
        {value:0,name:"B左-"},
        {value:0,name:"B右-"},
        {value:0,name:"C左"},
        {value:0,name:"C右"},
        {value:0,name:"D"}
      ],
    }
  },
  created(){
    // //登陆者姓名
    // this.name = localStorage.getItem("username")
    // //员工名字集合
    // this.nameArr = data.data.reduce((pre,cur)=>{
    //   return pre.concat(cur.name)
    // },[])
    // //定位员工位置
    // this.index=this.nameArr.indexOf(this.name)
    // //隐藏其它员工名字
    // this.nameArr = this.nameArr.reduce((pre,cur,index)=>{
    //   return pre.concat(index==this.index?cur:"")
    // },[])
    // //销售业绩数据集合
    // this.incomeArr = data.data.reduce((pre,cur)=>{
    //   return pre.concat(cur.income)
    // },[])
    this.grade()
    this.gradeTwo()
  },
  mounted(){
    this.ec()   
  },
  methods:{
    grade(){
      let A=0,B=0,C=0,D=0,E=0,F=0,G=0;
      data.data.forEach(item=>{
      switch (item.grade) {
        case "A":
          A++
          break;
        case "A-":
          B++
          break;
        case "B+":
          C++
          break;
        case "B ":
          D++
          break;
        case "B-":
          E++
          break;
        case "C ":
          F++
          break;
        case "D":
          G++
          break;          
        default:
          break;
      }
      })
      this.gradeArr = [
        {value:A,name:"A"},
        {value:B,name:"A-"},
        {value:C,name:"B+"},
        {value:D,name:"B"},
        {value:E,name:"B-"},
        {value:F,name:"C"},
        {value:G,name:"D"}
      ]
    },
    gradeTwo(){
      let A=0,B=0,C=0,D=0,E=0,F=0,G=0,
          H=0,I=0,J=0,K=0,L=0;
      data.data.forEach(item=>{
      switch (item.grade) {
        case "A":
          A++
          break;
        case "A-":
          if (item.income < 3500) {
            B++
          }else{
            C++
          }
          break;
        case "B+":
           if (item.income < 1500) {
            D++
          }else{
            E++
          }
          break;
        case "B ":
           if (item.income < 750) {
            F++
          }else{
            G++
          }
          break;
        case "B-":
           if (item.income < 400) {
            H++
          }else{
            I++
          }
          break;
        case "C ":
           if (item.income < 250) {
            J++
          }else{
            K++
          }
          break;
        case "D":
          L++
          break;          
        default:
          break;
      }
      })
      this.gradeTwoArr=[
        {value:A,name:"A"},
        {value:B,name:"A-左"},
        {value:C,name:"A-右"},
        {value:D,name:"B+左"},
        {value:E,name:"B+右"},
        {value:F,name:"B左"},
        {value:G,name:"B右"},
        {value:H,name:"B-左"},
        {value:I,name:"B-右"},
        {value:J,name:"C左"},
        {value:K,name:"C右"},
        {value:L,name:"D"}
      ]
    },
    ec(){
      let myEcharts = this.$echarts.init(document.querySelector(".main_right"));
      myEcharts.setOption({
        // backgroundColor: '#2c343c',
        //标题
        title:{
          text: '各评分区间员工人数占比',
          left: 10,
          top: 10,
          textStyle:{
            color:"#f9ee8c"
          }
        },
        //提示框组件
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}人 ({d}%)',
          extraCssText:'width:130px;height:60px;'
        },
        //图例
        legend: {
          orient: 'vertical',
          left: 'left',
          bottom: 30,
          data: ['A', 'A-', 'B+', 'B', 'B-', 'C', 'D'],
          itemWidth:10,
          itemHeight:10,
          textStyle: {
            fontSize:8,
            color: 'b#f9ee8c',//图例文字颜色，大小等配置
          },
        },
        //系列列表，图标类型
        series:[
          {
            color : [ '#006600', '#80ff00', '#ff0', '#f9ee8c', '#00ffff', '#ff0080', '#f00' ],
            center: ['25%', '60%'],
            name:"评分",
            type:"pie",
            radius: [20, 90],
            roseType: 'radius',
            data:this.gradeArr, 
          },
          {
            color : [ '#006600','#006600', '#80ff00', '#80ff00',
            '#ff0', '#ff0','#f9ee8c','#f9ee8c',
             '#00ffff', '#00ffff','#ff0080', '#ff0080' ],
            center: ['75%', '50%'],
            name:"评分",
            type:"pie",
            radius: [50, 110],
            roseType: 'radius',
            data:this.gradeTwoArr
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.main_right
  height: 300px
  border-radius: 10px
  background-color: #2c343c
  margin 10px
  padding 10px
  box-shadow 0 0 10px black
</style>