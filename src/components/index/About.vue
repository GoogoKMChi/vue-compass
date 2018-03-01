<template>
  <div class="about blue-cute">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '一个使用Compass的Demo'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../node_modules/compass-mixins/lib/compass/css3/images";

  .about {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.15rem;
    border-radius: 0.15rem;
    text-align: center;
    font-size: 0.32rem;
    box-shadow: 0 0.02rem 0.2rem -0.05rem #000;
    @include background(linear-gradient(to right, #ffffff, #ffdfdf, #FFFFFF)); //刚接触compass们目前就知道这个，比较丑请见谅...
  }
</style>
