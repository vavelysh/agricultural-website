<template>
  <main class="service-box-wrapper">
    <ServicesBox/>
  </main>
</template>

<script>
import ServicesBox from '../../components/ServicesBox'
export default {
  name: 'index',
  components: { ServicesBox },
  data() {
    return {
      title: 'Nasza oferta',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Usługi świadczone przez firmę Agro-Mar',
        },
      ],
    };
  },
}
</script>

<style scoped>
.service-box-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
