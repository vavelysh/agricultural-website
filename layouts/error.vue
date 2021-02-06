<template>
  <div class="error-wrapper">
    <h1>Błąd 😔 </h1>
    <p v-if="error.statusCode === 404">Nie znaleziono takiej strony</p>
    <p v-else>Znaleziono błąd</p>
    <NuxtLink to="/">Powrót na stronę główną</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  head(){
    return {
      meta: {
        name: 'robots',
        content: 'noindex',
      },
    }
  }
}
</script>
<style lang="scss" scoped>
.error-wrapper {
  background: #E2E3E3;
  font-family: 'Open Sans',sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    margin: 10px;
  }
}
</style>
