<template>
  <header class='box'>
    <h3 class='title'>
      {{text}}
    </h3>
  </header>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    text: String
  }
}
</script>

<style lang='scss' scoped>
@import "assets/styles/viewport-sizes";
.box {
  padding: 10px 0;
  margin:0;
  text-transform: uppercase;
  font-family: 'Poppins','Roboto',sans-serif;
  color: hsl(0, 2%, 20%);
  user-select: none;
}
.title {
  font-weight: 600;
  font-size: 30px;
  @media screen and (min-width: $tablet){
    font-size: 50px;
  }
}
</style>
