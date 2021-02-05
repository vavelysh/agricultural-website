<template>
  <div class='wrapper'>
    <header class='box'>
      <h6 class='title'>
        <slot name='title'/>
      </h6>
    </header>
    <slot name='content'/>
  </div>
</template>

<script>
export default {
  name: 'BusinessService'
}
</script>

<style lang='scss' scoped>
@import "assets/styles/viewport-sizes";
.box {
  padding: 10px 0;
  margin:0;
  text-transform: uppercase;
  font-family: 'Poppins','Roboto',sans-serif;
  color: hsl(205, 99%, 44%);
  user-select: none;
}
.title {
  margin: 50px 0;
  font-weight: 600;
  font-size: 20px;
  @media screen and (min-width: $tablet){
    font-size: 40px;
  }
}
.wrapper {
  padding: 0 30vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
