<template>
    <div>
        <input type="file" @change="changImage($event)">
    </div>
    <div style="padding-top:20px">
      <!--<textarea v-model="message" style="width:100%;height:500px"></textarea>-->
      <pre>{{message || pretty }}</pre>
    </div>
</template>
<script>
import EXIF from 'exif-js'

export default ({
  name: 'loadImage',
  data () {
    return {
      message: 'Vue exif meta info',
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(JSON.parse(value), null, 2);
    }
  },  
  created () {
    console.log('this.message', this.message);
    this.test();
  },
  methods: {
    changImage(e) {
      console.log('onChange!')
      const vm = this;
      if (e) {
          // eslint-disable-next-line no-undef
          EXIF.getData(e.target.files[0], function() {
              console.log('image info', this)
              console.log('exif data', this.exifdata)
              vm.message = this.exifdata;
              // vm.test();
          })
      } else {
          console.log(`it's not image`)
      }
    },
    test() {
      // console.log('test called ');
      // this.message = 'after test2';
    },
  }
})
</script>
