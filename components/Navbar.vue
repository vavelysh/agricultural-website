<template>
  <section class="wrapper">
    <div class="nav-container">
      <nuxt-link to="/" class="logo">
        <Logo />
      </nuxt-link>
      <nav class='nav-items'>
        <NavItems :menu-close-handler="toggleSidebar"/>
      </nav>
      <div @click="toggleSidebar" class="burger">
        <MenuOpen />
      </div>
    </div>
  </section>
</template>

<script>
import Logo from './UI/Logo';
import MenuOpen from './UI/MenuOpen';
import NavItems from './NavItems'
export default {
  name: 'Navbar',
  components: { NavItems, MenuOpen, Logo },
  props: {
    toggleSidebar: Function,
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/styles/viewport-sizes';
@import 'assets/styles/padding-sizes';

.nav-items {
  display: none;
  @media screen and(min-width: $tablet) {
    display: block;
  }
}
.logo,
.burger {
  display: block;
  fill: white;
}
.logo {
  width: 65px;
  @media screen and(min-width: $tablet) {
    width: 120px;
    padding-left: 35px;
    display: block;
  }
}
.burger {
  width: 34px;
  padding-right: 10px;
  @media screen and(min-width: $tablet) {
    display: none;
  }
}
.nav-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
}
.wrapper {
  display: flex;
  align-items: center;
  position: fixed;
  box-shadow: 1px -2px 5px black;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 10px;
  z-index: 10;
  background: #263238;
}
</style>
