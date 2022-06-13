<template>
  <div class="main-container">
    <headerBar v-bind:headerTitle="headerTitle"></headerBar>
    <LeftSideBar></LeftSideBar>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import HeaderBar from '@/components/common/HeaderBar.vue'
import LeftSideBar from '@/components/common/LeftSideBar.vue'
export default {
  name: 'app',
  components: {
    HeaderBar,
    LeftSideBar,
  },
  watch: {
    $route(to) {
      this.headerTitle = to.name;
    },
  },  
  data() {
    return {
      headerTitle: 'title',
    };
  },
};

</script>

<style>
  @import './assets/css/import.css'
</style>
