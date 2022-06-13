<template>
  <div id="app">
    <headerBar v-bind:headerTitle="headerTitle"></headerBar>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import HeaderBar from '@/components/common/HeaderBar.vue'
export default {
  name: 'app',
  components: {
    HeaderBar,
  },
  watch: {
    $route(to) {
      this.headerTitle = to.name;
      console.log('App.vue headerTitle', this.headerTitle);
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
</style>
