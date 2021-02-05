<template>
  <div>
    <section class="container">
      <header class="container-text">
        <h2>Roboty ziemne i drogowe</h2>
        <h1>Usługi komunalne i rolnicze</h1>
        <p>Pykacz Marcin</p>
      </header>
    </section>
    <AboutBox />
    <ServicesBox />
    <ContactBox/>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/viewport-sizes";
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  background-image: linear-gradient(to right, hsla(282, 10%, 20%, 0.7), hsla(120, 7%, 9%, 0.8)),
    url('~assets/images/hero.jpg?resize&size=1100?webp');
  background-size: cover;
  background-attachment: scroll;
  background-position: bottom center;
  @media screen and (min-width: $mobile) {
    height: 70vh;
    background-position: center center;
  }

}
.container-text {
  padding: 20px 15px;
  font-size: 3.3vmin;
  text-align: center;
  color: white;
  line-height: 1.8em;
  text-transform: uppercase;
  font-family: 'Poppins', 'Open Sans', sans-serif;

  & h1 {
    font-weight: 600;
    font-size: 1.6em;
  }
  & h2 {
    font-weight: 500;
  }
  & p {
    font-weight:100;
  }
  & h2,
  & p {
    font-size: 1.3em;
  }
}
</style>

<script>
import HeaderTitle from '../components/HeaderTitle';
import AboutBox from '../components/AboutBox';
import ServicesBox from '../components/ServicesBox';
import ContactBox from '../components/ContactBox'

export default {
  components: { ContactBox, ServicesBox, AboutBox, HeaderTitle },
};
</script>
