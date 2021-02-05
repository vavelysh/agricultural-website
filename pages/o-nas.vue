<template>
  <div>
    <video
           class="video-container"
           autoplay
           loop
           playsinline
           muted
           :poster='require(`~/assets/poster.png`)'
    >
<!--      https://res.cloudinary.com/dtvvkwgbg/video/upload/v1612010002/agrolp/video_agro.mp4-->
      <source :src="$cloudinary.video.url('/agrolp/video_agro.mp4')" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <AboutBox :extended="true" />
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
  filter: brightness(70%);
  width: 100%;
  object-fit: cover;
  height: 40vh;
  @media screen and (min-width: $mobile) {
    height: 70vh;
    background-position: center center;
  }
}
</style>
