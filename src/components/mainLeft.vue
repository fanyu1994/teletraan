<template>
  <div class="main_left">
  </div>
</template>
<script>
import data from "../../public/data.js"

export default {
  data(){
    return {
      name:'',
      index:0,
      nameArr:[],
      incomeArr:[]
    }
  },
  created(){
    this.$nextTick(()=>{
      //登陆者姓名
    this.name = localStorage.getItem("username")
    //员工名字集合
    this.nameArr = data.data.reduce((pre,cur)=>{
      return pre.concat(cur.name)
    },[])
    //定位员工位置
    this.index=this.nameArr.indexOf(this.name)
    //隐藏其它员工名字
    if (this.name != "admin") {
      this.nameArr = this.nameArr.reduce((pre,cur,index)=>{
        return pre.concat(index==this.index ? "第"+(index+1)+"名："+cur+"("+data.data[this.index].income+"万)":"")
      },[])
    }
    //销售业绩数据集合
    this.incomeArr = data.data.reduce((pre,cur)=>{
      return pre.concat(cur.income)
    },[])
    })
  },
  mounted(){
    this.$nextTick(()=>{
      //管理员能看整体数据
      if (this.name!="admin") {
        this.ec()
      }else{
        this.adminEc()
      }
    })
  },
  methods:{
    //员工
    ec(){
      let myEcharts = this.$echarts.init(document.querySelector(".main_left"))
      myEcharts.setOption({
            title: { 
              text: '员工销售业绩/排名',
              left: 10,
              top:10,
              textStyle:{
                color:"#f9ee8c"
              }
            },
            tooltip: {
              show: false,
              extraCssText:'width:120px;height:60px;'
            },
            xAxis: {
              name:"收入（万元）",
              axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle:{
                  show: true ,
                  color:"#f9ee8c",
                  width:2,
                },  
              },
            },
            yAxis: {
              name:"员工",
              nameGap: 15 , 
              data: this.nameArr,
              inverse:true,
              nameLocation: 'start',
              axisLine: {
                lineStyle:{
                  show: true ,
                  color:"#f9ee8c",
                  width:2
                }
              },
            },
            //图缩放功能
            dataZoom: [
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'inside', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: this.index-10,      // 左边的位置。
                    end: this.index+10,         // 右边的位置。
                    yAxisIndex: 0,//默认控制x轴。换成y轴
                }
            ],
            series: [{
                showAllSymbol: true,
                name: '收入/业绩（万元）',
                type: 'bar',
                data: this.incomeArr,
                itemStyle: {
                //鼠标悬停时：
                  emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'red'
                  }
                }
            }],
            //图位置定位
            grid:{
              x:240,x2:80,y:60,y2:40
            },
            //图例
            visualMap: {
              itemWidth:10,
              itemHeight:10,
              dimension:0,
              left:"0",
              bottom:"40",
              // backgroundColor:"red",   
              // orient:"horizontal",//横竖显示 
              textStyle: {
                fontSize:8,
                color: 'b#f9ee8c',//图例文字颜色，大小等配置
              },
              pieces: [{
                  gte: 0,
                  lt: 200,
                  label:'D（<=199）万',
                  color: '#f00'
                }, {
                    gte: 200,
                    lt: 300,
                    label:'C（200~299）万',
                    color: '#ff0080'
                }, {
                    gte: 300,
                    lt: 500,
                    label:'B-（300~499）万',
                    color: '#00ffff'
                },{
                    gte: 500,
                    lt: 1000,
                    label:'B（500~999）万',
                    color: '#f9ee8c'
                },{
                    gte: 1000,
                    lt: 2000,
                    label:'B+（1000~1999）万',
                    color: '#ff0'
                },{
                    gte: 2000,
                    lt: 5000,
                    label:'A-（2000~4999）万',
                    color: '#80ff00'
                },{
                    gte: 5000,
                    label:'A（>=5000）万',
                    color: '#006600'
                }
                ],
                outOfRange: {
                    color: '#999'
                }
          },
        });
    },
    //管理员
    adminEc(){
      let myEcharts = this.$echarts.init(document.querySelector(".main_left"))
      myEcharts.setOption({
            title: { 
              text: '员工销售业绩/排名',
              left: 10,
              top:10,
              textStyle:{
                color:"#f9ee8c"
              }
            },
            tooltip: {
              show: true,
              extraCssText:'width:120px;height:60px;'
            },
            xAxis: {
              name:"收入（万元）",
              axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle:{
                  show: true ,
                  color:"#f9ee8c",
                  width:2,
                },  
              },
            },
            yAxis: {
              name:"员工",
              nameGap: 15 , 
              data: this.nameArr,
              inverse:true,
              nameLocation: 'start' ,
              axisLine: {
                lineStyle:{
                  show: true ,
                  color:"#f9ee8c",
                  width:2
                }
              },
            },
            dataZoom: [
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'inside', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: this.index-10,      // 左边的位置。
                    end: this.index+10,         // 右边的位置。
                    yAxisIndex: 0,//默认控制x轴。换成y轴

                }
            ],
            series: [{
              showAllSymbol: true,
                name: '收入/业绩（万元）',
                type: 'bar',
                data: this.incomeArr
            }],
            grid:{
              x:240,x2:80,y:60,y2:40
            },
            visualMap: {
              itemWidth:10,
              itemHeight:10,
              dimension:0,
              left:"0",
              bottom:"40",
              // backgroundColor:"red",   
              // orient:"horizontal",//横竖显示 
              textStyle: {
                fontSize:9,
                color: 'c#f9ee8c',//图例文字颜色，大小等配置
              },
              pieces: [{
                  gte: 0,
                  lt: 200,
                  label:'D（<=199）万',
                  color: '#f00'
              }, {
                  gte: 200,
                  lt: 300,
                  label:'C（200~299）万',
                  color: '#ff0080'
              }, {
                  gte: 300,
                  lt: 500,
                  label:'B-（300~499）万',
                  color: '#00ffff'
              },{
                  gte: 500,
                  lt: 1000,
                  label:'B（500~999）万',
                  color: '#f9ee8c'
              },{
                  gte: 1000,
                  lt: 2000,
                  label:'B+（1000~1999）万',
                  color: '#ff0'
              },{
                  gte: 2000,
                  lt: 5000,
                  label:'A-（2000~4999）万',
                  color: '#80ff00'
              },{
                  gte: 5000,
                  label:'A（>=5000）万',
                  color: '#006600'
              }
              ],
              outOfRange: {
                  color: '#999'
              }
          },
        });
    },
  }
}
</script>
<style lang="stylus" scoped>
@font-face
{
  font-family: title
  src url("../../public/font/font2.ttf")
}
.main_left
  height: 500px
  border-radius: 10px
  background-color: #2c343c
  margin 10px
  padding 10px
  box-shadow 0 0 10px black
</style>