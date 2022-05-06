<template>
    <div>
        <input type="file" @change="changImage($event)">
    </div>
</template>
<script>
import loadImage from 'blueimp-load-image'
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
    changImage (e) {
      var image = loadImage(e.target.files[0]).then(function(data) {
        console.log('00000');
        console.log('data', data);
        // console.log(data.get('Orientation'));
        console.log('data.exif', data.exif);
        console.log('data.image.exif', data.image.exif);
        console.log('000001111');
      });
      console.log('aaaaaaaaaa');
      console.log(image);
      console.log('bbbbbbbbb');
      loadImage.parseMetaData(image).then(function(data) {
        console.log('12121212');
        console.log(data);
        console.log(data.get('Orientation'));
        console.log(data.exif);
        console.log('34343434');
      });
      loadImage.parseMetaData(e.target.files[0]).then(function(data) {
        console.log('56565656');
        console.log(data);
        console.log(data.get('Orientation'));
        console.log(data.exif);
        console.log('78787878');
      });
      console.log('1111111');
      console.log('1111111');
      console.log(e.target.files[0]);
      loadImage.fetchBlob(e.target.files[0], (blob) => {
          if (blob) {
            console.log('2222');
            console.log('2222');
            console.log('2222');
            console.log(blob);
            let imageBlob = new Blob([blob], { type: 'image/jpeg' })
            loadImage.parseMetaData(imageBlob, (data) => {
              let options = {
                contain: true
              }

            console.log('333');
            console.log('333');
            console.log('333');
              if (data.exif) {
                options.orientation = data.exif.get('Orientation')
              }
            }, {})
          }
        }, { meta: true })
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
