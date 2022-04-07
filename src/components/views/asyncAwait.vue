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
    this.apiTest2();
    // this.apiTest();
    // this.getAleBeer2();
    // this.getCoffee();
  },
  methods: {
    /**
     * 잘못된 사용법 
     */
    async apiTest () {
      console.log('apiTest called');
      try {
        console.log('try 진입')
        const response = await this.getAleBeer2();
        console.log('response', response);
        const response2 = await this.getCoffee();
        console.log('response2', response2);
        console.log('try 끝')
      } catch (err) {
        console.log('err', err);
      }
    },
    /**
     * promise then을 사용하지 않은 방법
     */
    async apiTest2 () {
      console.log('apiTest called');
      try {
        console.log('try 진입')
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        console.log('response', response);
        const response2 = await axios.get('https://api.sampleapis.com/coffee/hot');
        console.log('response2', response2);
        console.log('try 끝')
      } catch (err) {
        console.log('err', err);
      }
    },
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
    /**
     * Get Ale Beer2 샘플
     */
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
    /**
     * Get Coffee 샘플
     */
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
    /**
     * Display Data 샘플
     */
    displayData (data) {
      document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    }
  }
}
</script>
