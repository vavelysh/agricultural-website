<template>
  <main class="contact-box-wrapper">
    <ContactBox/>
  </main>
</template>

<script>
import ContactBox from '../components/ContactBox'
export default {
  name: 'kontakt',
  components: { ContactBox },
  data() {
    return {
      title: 'Kontakt',
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
            'Zadzwoń pod +48 798 307 900 lub napisz do nas na agromar.chybie@gmail.com',
        },
      ],
    };
  },
}
</script>

<style scoped>
.contact-box-wrapper{
  margin: 0 auto;
}
</style>
