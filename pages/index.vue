<template>
  <div>
    <section class="container">
      <header class="container-text">
        <h2>Roboty ziemne i drogowe</h2>
        <h1>Usługi komunalne i rolnicze</h1>
        <p>Pykacz Marcin</p>
      </header>
    </section>
    <main>
      <AboutBox />
    </main>
    <ServicesBox />
    <ContactBox/>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/viewport-sizes";
.container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 40vh;
  background-image: linear-gradient(to bottom, hsla(225, 33%, 5%, 0.6), hsla(211, 93%, 16%, 0.5)),
    url('~assets/images/hero.jpg?resize&size=1500');
  background-size: cover;
  background-attachment: scroll;
  filter: saturate(150%);
  background-position: bottom center;
  @media screen and (min-width: $mobile) {
    height: 50vh;
    background-position: center;
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
