<template>
  <div class="service-container">
    <div class="info-header">
      <HeaderTitle text="Nasze usługi" />
    </div>
    <div
      class="image-content"
    />
    <ul class="service-list-container">
      <li>
        <nuxt-link to="/uslugi/komunalne">
          <span> Usługi <strong>komunalne</strong> </span>
          <div class="link-icon">
            <img src="~/assets/right-arrow.svg" alt="Right" />
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/uslugi/rolnicze">
          <span>Usługi <strong>rolnicze</strong></span>
          <div class="link-icon">
            <img src="~/assets/right-arrow.svg" alt="Right" />
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/uslugi/roboty">
          <span>Roboty <strong>ziemne</strong> i <strong>drogowe</strong></span>
          <div class="link-icon">
            <img src="~/assets/right-arrow.svg" alt="Right" />
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/uslugi/sezon-zimowy">
          <span>Sezon <strong>zimowy</strong></span>
          <div class="link-icon">
            <img src="~/assets/right-arrow.svg" alt="Right" />
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/uslugi/dzierzawa">
          <span><strong>Dzierżawa</strong> i <strong>sprzedaż</strong></span>
          <div class="link-icon">
            <img src="~/assets/right-arrow.svg" alt="Right" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderTitle from './HeaderTitle';
export default {
  name: 'ServicesBox',
  components: {
    HeaderTitle,
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/styles/viewport-sizes';
@import 'assets/styles/padding-sizes';

.service-container {

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 2fr;
  font-family: 'Open Sans', sans-serif;

  margin: 0 auto;
  padding: $mobilePadding;
  @media screen and (min-width: $tablet) {
    padding: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
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

.image-content {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  transition: all 0.9s ease;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  background-image: url("~assets/images/rolnicze/1.jpg?resize&size=500");
  width: 100%;
  height: 100%;
  order: 2;
  @media screen and (min-width: $tablet) {
    order: 0;
  }
}

.link-icon {
  width: 25px;
  fill: #474848;
}

.wrapper {
  display: flex;
  height: max-content;
  flex-wrap: wrap;
  padding: 10px 15px;
  @media screen and (min-width: $tablet) {
    padding: 0;
  }
}

.service-list-container {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  list-style: none;
  width: 100%;
  height: min-content;
  display: block;
  flex-direction: column;

  & li {
    border: 1px solid hsla(120, 0%, 40%, 0.2);
    display: flex;
    align-items: center;
    transition: background 0.4s ease-out;
    @media screen and (min-width: $tablet) {
      border-left: 0;
    }

    &:nth-child(n + 2) {
      border-top: 0;
    }

    &:hover {
      background: hsla(0, 1%, 68%, 0.1);
    }
  }

  & a {
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 10px;
    font-size: 15px;
    text-decoration: none;
    color: hsl(0, 2%, 20%);
    @media screen and (min-width: $tablet) {
      font-size: 1.3rem;
      padding: 20px 25px;
    }
    &.nuxt-link-exact-active {
      background: hsla(0, 1%, 68%, 0.1);
    }
  }
}
</style>
