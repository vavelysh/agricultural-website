<template>
  <div class='box-app'>
    <Navbar :toggleSidebar='toggleSidebar'/>
    <Sidebar :show='showSidebar' :showHandler='toggleSidebar' />
    <div class="content">
        <Nuxt />
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
export default {
  components: { Footer, Navbar,Sidebar },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar(){
      if(window.innerWidth < 780){
        this.showSidebar = !this.showSidebar
      }
    }
  }
}
</script>
<style scoped>
.box-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  margin-top: 55px;
  flex: 1 0 auto;
  @media screen and (min-width: $mobile) {
    margin-top: 75px;
  }
}
.footer {
  flex-shrink: 0;
}
</style>
