<template>
  <div class="info">
    <asidecomponent :name="name" ref="aside"></asidecomponent>
    <headercomponent 
      :name="name"
      @openAside="oa"></headercomponent>
    <maincomponent></maincomponent>
    <footercomponent></footercomponent>
  </div>
</template>
<script>
import asidecomponent from "../components/aside.vue";
import headercomponent from "../components/header.vue";
import maincomponent from "../components/main.vue";
import footercomponent from "../components/footer.vue"
export default {
  data(){
    return {
      name:""
    }
  },
  components:{
    asidecomponent,
    headercomponent,
    maincomponent,
    footercomponent
  },
  created(){
  },
  mounted(){
    this.name = this.$route.params.name
    localStorage.setItem("username",this.$route.params.name)
  },
  methods:{
    oa(){
      this.$refs.aside.oa()
    }
  }
}
</script>
<style lang="stylus" scoped>
.info
  height 100%
  position relative
  background-image linear-gradient(to bottom, #b5f0f9, #f2f4f6)
</style>