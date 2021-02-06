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
  text-transform: uppercase;
  text-align: center;
  font-family: 'Open Sans','Roboto',"Adobe Arabic",sans-serif;
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
  color: whitesmoke;
  text-decoration: none;
  transition:font-weight 0.1s ease-in,color 0.3s ease-in;
  padding:0 25px;
  &.nuxt-link-exact-active {
    font-weight: bolder;
  }
  &:hover{
    font-weight: bolder;
  }
  @media screen and (min-width: $tablet) {
    color: whitesmoke;
  }
}
</style>
