<template>
  <pre></pre>
</template>
<script>
import axios from 'axios';
export default {
  name: 'asyncAwait',
  data () {
    return {
    }
  },
  created () {
    let time = new Date().toISOString();
    console.log('created called', time);
    this.getAleBeer2();
    this.getCoffee();
  },
  methods: {
    /**
     * GET Ale Beer Get 샘플
     * @deprecated 참고용이고 아래 형식으로 쓰자.
     */
    getAleBeer () {
      const baseURL = 'https://api.sampleapis.com/beers/ale';
      fetch(baseURL)
        .then(resp => resp.json())
        .then(data => this.displayData(data));
    },
    getAleBeer2 () {
      let time = new Date().toISOString();
      console.log('getAleBeer2 Called', time);
      axios.get('https://api.sampleapis.com/beers/ale')
        .then(res => {
          time = new Date().toISOString();
          console.log('getAleBeer2 Success', res, time);
        })
        .catch((error) => {
          if (error.resonse) {
            console.log(error);
          }
        })
    },
    getCoffee () {
      let time = new Date().toISOString();
      console.log('getCoffee Called', time);
      axios.get('https://api.sampleapis.com/coffee/hot')
        .then(res => {
          time = new Date().toISOString();
          console.log('getCoffee Success', res, time);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    displayData (data) {
      document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    }
  }
}
</script>
