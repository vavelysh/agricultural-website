<template>
  <div class='box-app'>
    <Navbar :toggle-sidebar='toggleSidebar'/>
    <Sidebar :show='showSidebar' :show-handler='toggleSidebar' />
    <div class="content">
      <Nuxt />
    </div>
    <footer class="footer">d</footer>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import ServicesBox from '../components/ServicesBox'
export default {
  components: { ServicesBox, Navbar,Sidebar },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar(){
      this.showSidebar = !this.showSidebar
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
  margin-top: 80px;
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>
