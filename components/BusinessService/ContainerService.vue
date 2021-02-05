<template>
  <div class='cs-wrapper'>
    <section class='container-service'>
      <slot/>
    </section>
    <img :srcSet='image.srcSet' :src='image.src' alt='j'>
  </div>

</template>

<script>
export default {
  name: 'ContainerService',
  props: {
    image: Object
  },
}
</script>

<style lang='scss' scoped>
@import "assets/styles/viewport-sizes";
.cs-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: saturate(130% );
    @media screen and (min-width: $tablet){
      width: 600px;
      height: 400px;
      border-radius:15px;
      transform: scale(1.03);
      margin-bottom: 30px;
    }
    @media screen and (min-width: $desktop){
      width: 800px;
    }
  }
}

.container-service {
  width: 100%;
  background: hsl(205, 99%, 44%);
  padding: 30px;
  font-family: 'Open Sans',sans-serif;
  font-size: 13px;
  color: white;
  @media screen and (min-width: $tablet){
    font-size: 1rem;
    width: 600px;
    border-radius:5px 5px 0 0;
  }
  @media screen and (min-width: $desktop){
    width: 800px;
  }
  & > p {
    padding: 10px 0;
    font-size: 1em;
  }
  & > h5 {
    font-weight: 700;
    font-size: 1.6em;
    margin: 15px 0;
  }
  & li {
    margin-left: 30px;
    padding: 5px 0;
  }
}
</style>
