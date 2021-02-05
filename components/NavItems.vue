<template>
    <ul class='nav-list-items'>
      <li v-for='opt in navOptions' @click='menuCloseHandler'>
        <nuxt-link :to='opt.path' class='nuxt-link'>
          {{opt.name}}
        </nuxt-link>
      </li>
    </ul>
</template>

<script>
import navOptions from '../data/navOptions';

export default {
  name: 'NavItems',
  props: {
    menuCloseHandler: Function
  },
  data() {
    return {
      navOptions,
    };
  },
}
</script>

<style lang='scss' scoped>
@import 'assets/styles/viewport-sizes';

.nav-list-items {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  font-family: 'Open Sans',"Adobe Arabic",sans-serif;
  & > li {
    margin: 20px;
  }
  @media screen and (min-width: $tablet) {
    flex-direction: row;
    & > li {
      margin: 0;
    }
  }
}
.nuxt-link {
  width: 100%;
  color: hsl(0, 22%, 96%);
  text-decoration: none;
  transition:font-weight 0.1s ease-in,color 0.3s ease-in;
  padding:0 40px;
  &.nuxt-link-exact-active {
    color: hsl(205, 99%, 44%);
    font-weight: bolder;
    @media screen and (min-width: $tablet) {
      color: hsl(205, 99%, 44%);
    }
  }
  &:hover{
    color: #fcd7d7;
    font-weight: bolder;
    @media screen and (min-width: $tablet) {
      color: #0e0d0d;
    }
  }
  @media screen and (min-width: $tablet) {
    color: hsl(0, 2%, 20%);
  }
}
</style>
