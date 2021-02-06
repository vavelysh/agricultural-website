<template>
  <main>
    <video
           class="video-container"
           autoplay
           loop
           playsinline
           muted
           :poster='require(`~/assets/poster.png`)'
    >
      <source :src="$cloudinary.video.url('/agrolp/video_agro.mp4')" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <AboutBox :extended="true" />
  </main>
</template>

<script>
import AboutBox from '../components/AboutBox';
export default {
  name: 'o-nas',
  components: { AboutBox },
  data() {
    return {
      title: 'O naszej firmie',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'O firmie Agro-Mar z miejscowości Chybie, która oferuje profesjonalne usługi komunalne i rolnicze na terenie całego województwa śląskiego i okolicach.',
        },
      ],
    };
  },
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
    height: 50vh;
    background-position: center center;
  }
}
</style>
