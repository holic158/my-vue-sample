<template>
    <div>
        <pre></pre>
    </div>
</template>
<script>
import axios from 'axios';

export default ({
  name: 'sequencialCall',
  data () {
    return {

    }
  },
  created () {
    let time = new Date().toISOString();
    console.log('1. created called', time);
    this.sequencialCallTest();
  },
  methods: {
    sequencialCallTest () {
      let time = new Date().toISOString();
      console.log('2. sequencialCallTest', time);
      this.getAleBeer()
        .then(this.getCoffee)
        .then(this.getCoffee2);
    },
    /**
     * Get Ale Beer
     */
    getAleBeer () {
      let time = new Date().toISOString();
      console.log('3. getAleBeer Called', time);
      return axios.get('https://api.sampleapis.com/beers/ale')
        .then(res => {
          time = new Date().toISOString();
          console.log('3.1 getAleBeer Success', res, time);
        })
        .catch((error) => {
          time = new Date().toISOString();
          console.log('3.2 getAleBeer Fail', error, time);
          throw error;
        })
    },
    /**
     * Get Coffee
     */
    getCoffee () {
      let time = new Date().toISOString();
      console.log('4. getCoffee Called', time);
      axios.get('https://api.sampleapis.com/coffee/hot')
        .then(res => {
          time = new Date().toISOString();
          console.log('4.1 getCoffee Success', res, time);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    /**
     * Get Coffee
     */
    getCoffee2 () {
      let time = new Date().toISOString();
      console.log('5. getCoffee Called2', time);
      axios.get('https://api.sampleapis.com/coffee/hot')
        .then(res => {
          time = new Date().toISOString();
          console.log('5.1 getCoffee Success', res, time);
        })
        .catch((error) => {
          console.log(error);
        })
    }    
  }
})
</script>
