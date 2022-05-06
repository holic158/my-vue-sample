<template>
    <div>
        <input type="file" @change="changImage($event)">
    </div>
</template>
<script>
import EXIF from 'exif-js'
// import loadImage from 'blueimp-load-image'
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
    // this.sequencialCallTest();
  },
  methods: {
    changImage(e) {
      console.log('onChange!')
      if (e) {
          // eslint-disable-next-line no-undef
          EXIF.getData(e.target.files[0], function() {
              console.log('image info', this)
              console.log('exif data', this.exifdata)
          })
      } else {
          console.log(`it's not image`)
      }
    },
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
