<template>
  <section>
    <div class='contact-container'>
      <div class='info-header'>
        <HeaderTitle text='Kontakt'/>
      </div>
      <section class='wrapper'>
        <a rel='noreferrer' href='tel:48798307900' class='contact-item'>
          <img src='~assets/phone-icon.svg' alt='Phone icon'>
          <span>+48 798 307 900</span>
        </a>
        <a rel='noreferrer' href='mailto:agromar.chybie@gmail.com' class='contact-item'>
          <img src='~assets/email-icon.svg' alt='Phone icon'>
          <span>agromar.chybie@gmail.com</span>
        </a>
        <a rel='noreferrer' href='https://goo.gl/maps/ffBY9fTkRuwNiR1M8' class='contact-item'>
          <img src='~assets/map-icon.svg' alt='Phone icon'>
          <span>ul. Bielska 14<br>
43-520 Chybie</span>
        </a>
        <a rel='noreferrer' href='https://www.facebook.com/Agro-Mar-Pykacz-Marcin-Us%C5%82ugi-Komunalne-i-Rolnicze-Roboty-Ziemne-Chybie-1924696791078849' class='contact-item'>
          <img src='~assets/facebook-icon.svg' alt='Phone icon'>
          <span>@agromarchybie</span>
        </a>
      </section>
      <div class="image-p" />
    </div>
    <GoogleMap/>
  </section>
</template>

<script>
import HeaderTitle from './HeaderTitle';
import GoogleMap from './GoogleMap'
export default {
  name: 'ServicesBox',
  components: {
    HeaderTitle,
    GoogleMap
  }
};
</script>

<style lang='scss' scoped>
@import 'assets/styles/viewport-sizes';
@import 'assets/styles/padding-sizes';
.image-p {
  background-image: url('~assets/images/contact.jpg?resize&size=500');
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

}
.contact-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  width: 100%;
  padding: $mobilePadding;
  margin: 0 auto 40px;
  @media screen and (min-width: $tablet) {
    background: transparent;
    padding: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    width: 750px;

  }
  @media screen and (min-width: $desktop-hd) {
    width: 1150px;
  }
}
.info-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 30px;
  @media screen and (min-width: $tablet) {
    grid-column: 1/3;
    padding: 25px 0;
  }
}
.btn {
  display: block;
  padding: 10px 15px;
  font-size: 15px;
  background-color: transparent;
  border: 2px solid #0e0d0d;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  margin: 10px 0;
  width: max-content;
}
.wrapper {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.contact-item {
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-left:1px solid hsla(120, 0%, 40%, 0.2);
  border-top:1px solid hsla(120, 0%, 40%, 0.2);
  transition: background 0.4s ease-out;
  &:nth-child(n + 3) {
    border-bottom:1px solid hsla(120, 0%, 40%, 0.2);
  }
  padding: 20px 0;
  & span {
    font-size: 10px;
    text-align: center;
    font-family: 'Open Sans','Verdana',sans-serif;
    color:#0e0d0d;
    font-weight: 600;
    @media screen and (min-width: $desktop-hd) {
      font-size: 15px;

    }
  }
  & img {
    width: 40px;
    margin: 15px 0;
  }
  &:hover {
    background: hsla(0, 1%, 68%, 0.1);
  }
}
</style>
