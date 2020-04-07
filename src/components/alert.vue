<template>
  <div class="alert" :style="{color:color,backgroundColor:bg}">
      {{alert}}
  </div>
</template>
<script>
export default {
  props:{
    alert:{
      type:String,
      required:true
    },
    color:{
      type:String,
      required:true,
      default:"#909399"
    },
    bg:{
      type:String,
      required:true,
      default:"#edf2fc"
    }
  }
}
</script>
<style lang="stylus" scoped> 
.alert
  width 370px
  height 60px
  position absolute
  left 50%
  top: 20px
  transform translate(-50%)
  font-size: 25px
  border 1px solid #ebeef5
</style>