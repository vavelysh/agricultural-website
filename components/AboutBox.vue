<template>
  <div>
    <section class="info-container">
      <div class="info-header">
        <HeaderTitle text="O nas" />
      </div>
      <article class="info-article" :class='{boxUp:extended}'>
        <div>
          <p>
            <strong>AGRO-MAR</strong> to młoda, prężnie rozwijająca się firma,
            świadcząca profesjonalne usługi komunalne i rolnicze. Specjalizujemy
            się w koszeniu poboczy drogowych, wałów przeciwpowodziowych,
            utrzymaniu zieleni miejskiej (parki, skwery, boiska), zieleni przy
            firmach i zakładach produkcyjnych, ogrodów i innych terenów.
          </p>
          <p>
            W szczególności: koszenie traw z rozdrobnieniem, koszenie ze zbiorem i
            wywozem, grabienie traw i liści, wertykulacja, nawożenie, oprysk -
            trawników, boisk, wycinka drzew, cięcia pielęgnacyjne, zrębkowanie
            resztek, utrzymanie czystości.
          </p>
        </div>
        <div v-if='extended' class='ext-sep'>
          <p>
            W sezonie zimowym zajmujemy się odśnieżaniem i posypywaniem dróg,
            parkingów, chodników, placów i innych terenów, usługa w razie potrzeby
            obejmuje wywóz śniegu.
          </p>
          <p>
            Sprzedaż i transport kruszyw drogowych i budowlanych oraz materiałów
            do zimowego utrzymania dróg.
          </p>
          <p>
            Roboty ziemne i drogowe, usługi koparko - ładowarką, koparką i innym
            sprzętem budowlanym (walce, ubijarki), wynajem ciągników rolniczych
            wraz z przyczepami, wywrotek itd. Z usług rolniczych świadczymy
            całoroczne utrzymanie upraw, w tym: orka, uprawa i siew, talerzowanie,
            zbiór płodów, mulczowanie i wiele innych.
          </p>
        </div>
        <ul>
          <li>
            Działamy głównie na terenie <b>województwa śląskiego</b>, ale również
            obejmujemy dalsze regiony
          </li>
          <li>Oferujemy <b>darmową wycenę usług</b></li>
          <li>Posiadamy <b>nowoczesny sprzęt</b> renomowanych firm</li>
        </ul>
        <div v-if="!extended" class="button-wrapper">
          <nuxt-link to="/o-nas" class="info-link"> Czytaj więcej </nuxt-link>
        </div>
      </article>
    </section>
    <div v-if="!extended"
         class="bar-image"
    />

  </div>

</template>

<script>
import HeaderTitle from './HeaderTitle';
export default {
  name: 'AboutBox',
  components: { HeaderTitle },
  props: {
    extended: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'assets/styles/viewport-sizes';
@import 'assets/styles/padding-sizes';

.boxUp {
  margin-bottom: 50px;
}
.info-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr repeat(2, auto);
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding: $mobilePadding;
  @media screen and (min-width: $tablet) {
    width: 750px;
    padding: 0;
  }
  @media screen and (min-width: $desktop-hd) {
    width: 1150px;
    grid-template-columns: 2fr 3fr;
  }
}
.info-header {
  display: flex;
  justify-content: center;
  @media screen and (min-width: $tablet) {
    grid-column: 1/3;
    padding: 15px 0;
  }
}
.info-article {
  grid-column: 1/3;
  color: hsl(0, 2%, 20%);
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 15px;
  padding-bottom: 25px;
  font-weight: 400;
  & > * {
    font-size: 13px;
    padding-bottom: 15px;
    @media screen and (min-width: $tablet) {
      width: 750px;
      font-size: 18px;
    }
  }
  & ul {
    padding-left: 20px;
  }
  & li {
    padding: 5px 0;
  }
  &:last-child {
    padding-right: 0;
    padding-bottom: 0;
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;
  @media screen and (min-width: $tablet) {
    margin-bottom: 25px;
  }
}
.bar-image{
  width: 100%;
  height: 180px;
  background-image: url("~assets/images/bar.jpg");
  filter: saturate(140%);
  background-size: cover;
  background-position: center 20%;
  @media screen and (min-width: $tablet) {
    height: 380px;
    background-position: center center;
  }
}
.info-link {
  display: block;
  padding: 10px 15px;
  font-size: 15px;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  width: max-content;
  transition: background 0.4s ease-out;
  &:hover {
    background: hsla(0, 58%, 94%, 0.5);
  }
}
</style>
