<template>
  <div id="index-page">
    <header>
      <about/>
    </header>
  </div>
</template>

<script>
import About from '../components/index/About'

export default {
  components: {About},
  name: 'index'
}
</script>

<style scoped lang="scss">
  $whatever-border: 0.05rem solid #62cb50;
  #index-page {
    height: 100%;
    border-top: $whatever-border;
  }
</style>
