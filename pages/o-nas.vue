<template>
  <div class='f'>
    <video
           class="video-container"
           src="~/assets/siema.mp4"
           autoplay
           loop
           playsinline
           muted
    />
    <AboutBox extended="true" />
  </div>
</template>

<script>
import AboutBox from '../components/AboutBox';
export default {
  name: 'o-nas',
  components: { AboutBox },
};
</script>

<style lang='scss' scoped>
@import 'assets/styles/viewport-sizes';
.video-container {
  width: 100%;
  object-fit: cover;
  height: 40vh;
  @media screen and (min-width: $mobile) {
    height: 70vh;
    background-position: center center;
  }
}
</style>
