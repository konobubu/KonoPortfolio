<template>
  <div class="home">
    <Top/>
  </div>
  <!-- <Footer/> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Some from '@/components/Some.vue'
import Top from '@/components/Top.vue'
// import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    // Some,
    Top,
    // Footer
  }
}
</script>

<style scoped lang="scss">

$home-height: calc(100vh - 110px);

.home{
  height: $home-height;
  line-height: calc(100vh - 420px);
  /* line-height: 570px; */
}
</style>
