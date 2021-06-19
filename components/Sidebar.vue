<template>
  <section class='wrapper' :class='{open:show}'>
    <div @click='showHandler' class="burger-close-wrapper">
      <div class='close-icon-wrapper'>
        <MenuClose />
      </div>
    </div>
    <div class='nav-mobile'>
      <NavItems :menu-close-handler='showHandler'/>
    </div>
  </section>
</template>

<script>
import MenuClose from './UI/MenuClose'
import NavItems from './NavItems'
export default {
  name: 'Sidebar',
  components: { NavItems, MenuClose },
  props: {
    showHandler: Function,
    show: Boolean
  },
}
</script>

<style scoped>
.nav-mobile {
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
}
.close-icon-wrapper{
  width: 50px;
  padding-right: 10px;
  fill: #130101;
}
.wrapper {
  z-index: 10;
  position: fixed;
  top:0;
  right: 0;
  width: 80%;
  height: 100vh;
  background: rgb(255, 255, 255);
  transform: translateX(100%);
  transition: transform 0.4s ease-out;
}
.open {
  transform: translateX(0);
}
.burger-close-wrapper{
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  fill: white;
}
</style>
