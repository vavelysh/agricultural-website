<template>
  <section class='container-service'>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'ContainerService'
}
</script>

<style lang='scss' scoped>
.container-service {
  margin-bottom: 30px;
  background: hsl(205, 99%, 44%);
  padding: 30px;
  font-family: 'Open Sans',sans-serif;
  font-size: 16px;
  color: white;
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
