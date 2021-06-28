<template>
  <main class="wrapp">
    <header class="box">
      <div class="btn-link-group">
        <nuxt-link :to="toBackPath">
          <button class="sender" @click="$router.back()">
            <img width="100%" height="100%" src="~/assets/back-icon.svg" alt="Back svg icon">
          </button>
          <strong>{{toBackText}}</strong>
        </nuxt-link>
        <nuxt-link :to="toForwardPath">
          <strong>{{toForwardText}}</strong>
          <button class="sender" @click="$router.back()">
            <img width="100%" height="100%" src="~/assets/forward-icon.svg" alt="Forward svg icon">
          </button>
        </nuxt-link>
      </div>
      <h6 class="title">
        <slot name="title" />
      </h6>
    </header>
    <slot name="content" />
  </main>
</template>

<script>
export default {
  name: "BusinessService",
  props: {
    toBackPath: String,
    toForwardPath: String,
    toBackText: String,
    toForwardText: String,
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/viewport-sizes";

.btn-link-group {
  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: #455A64;
    display: flex;
    align-items: center;
    text-align: center;
    & strong {
      font-size: 12px;
      margin: 5px;
      @media screen and (min-width: $tablet) {
        margin: 10px;
        font-size: 15px;
      }
    }
  }
}

.wrapp {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sender {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 0;
  background: #455A64;
  padding: 10px;
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
  color: #455A64;
  user-select: none;
}

.title {
  margin: 20px 0;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: $tablet) {
    font-size: 40px;
  }
}

</style>
