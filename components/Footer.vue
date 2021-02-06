<template>
  <footer class="footer-wrapper">
    <section class="footer-container">
      <p>© 2021 AGRO-MAR - usługi komunalne i rolnicze. Roboty ziemne i drogowe</p>
      <p>Stronę wykonał <a class="footer-link" target="_blank" rel="noreferrer external nofollow" href="https://www.linkedin.com/in/adrianpykacz/">Adrian Pykacz</a></p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import 'assets/styles/viewport-sizes';
.footer-wrapper {
  background: #efeaea;
  text-align: center;
  color: #666;
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-family: 'Open Sans',sans-serif;
}
.footer-container {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: $tablet) {
    width: 750px;
  }
  @media screen and (min-width: $desktop-hd) {
    grid-template-columns: 1fr 2fr 3fr;
    grid-template-rows: 3fr 1fr;
    width: 1150px;
  }

}

.footer-link {
  color: hsla(270, 2%, 18%,0.7);
  text-decoration: none;
}
</style>
