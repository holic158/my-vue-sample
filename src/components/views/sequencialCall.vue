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
        .then(this.getCoffee);
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
          console.log('4.1 getAleBeer Success', res, time);
        })
        .catch((error) => {
          time = new Date().toISOString();
          console.log('4.2 getAleBeer Fail', error, time);
          throw error;
        })
    },
    /**
     * Get Coffee
     */
    getCoffee () {
      let time = new Date().toISOString();
      console.log('5. getCoffee Called', time);
      axios.get('https://api.sampleapis.com/coffee/hot')
        .then(res => {
          time = new Date().toISOString();
          console.log('6. getCoffee Success', res, time);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
})
</script>
