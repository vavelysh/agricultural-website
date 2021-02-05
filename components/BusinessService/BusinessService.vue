<template>
  <div class='wrapp'>
    <header class='box'>
      <button class='sender' @click='$router.back()'>
        <img src='~/assets/back-icon.svg' alt='d'>
      </button>
      <h6 class='title'>
        <slot name='title' />
      </h6>
    </header>
    <slot name='content' />
  </div>
</template>

<script>
export default {
  name: 'BusinessService'
}
</script>

<style lang='scss' scoped>
@import "assets/styles/viewport-sizes";
.wrapp {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sender {
  width: 50px;
  height: 50px;
  border: 0;
  background: hsl(205, 99%, 44%);
  padding: 15px;

  & > img {
    width: 100%;
    height: 100%;
  }
}

.box {
  @media screen and (min-width: $tablet) {
    width: 600px;
  }
  @media screen and (min-width: $desktop) {
    width: 800px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
  text-transform: uppercase;
  font-family: 'Poppins', 'Roboto', sans-serif;
  color: hsl(205, 99%, 44%);
  user-select: none;
}

.title {
  margin: 50px 0;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: $tablet) {
    font-size: 40px;
  }
}

</style>
