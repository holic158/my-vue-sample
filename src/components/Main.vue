<template>
  <div class="page">
    <h1>{{ msg }}</h1>
    <div v-for="(item, index) in projects" :key="index">
      <span @click="movePage(item)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  data () {
    return {
      msg: 'Vue.js 사용 샘플 모듈 목록',
      projects: ['v-calendar', 'async-await', 'unAsync-await', 'sequencialCall', 'loadImage']
    }
  },
  methods: {
    /**
     * 화면이동
     * @param {String} page
     */
    movePage (page) {
      console.log(page)
      switch (page) {
        case 'v-calendar':
          this.$router.push('/views/vCalendar');
          break;
        case 'async-await':
          this.$router.push('/views/asyncAwait');
          break;
        case 'unAsync-await':
          this.$router.push('/views/unAsyncAwait');
          break;
        case 'sequencialCall':
          this.$router.push('/views/sequencialCall');
          break;
        case 'loadImage':
          this.$router.push('/views/loadImage');
          break;
        default:
          break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
