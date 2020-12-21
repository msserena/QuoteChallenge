<template>
  <div class="header">
    <div class="row">
      <div class="col-sm-12">
        <h4> Quotes Added</h4>
        <div class="progress">
          <div class="progress-bar"
               :style="progressbar">
            {{ counter }}/10
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    name: 'Header',
    data() {
      return {
        counter: 1
      }
    },
    computed: {
      progressbar: function () {
        return {
          width: this.counter + '1%'
        }
      }
    },
    created() {
      eventBus.$on('anotherQuote', (quoteCounted) => {
        this.counter = quoteCounted;
      });
      eventBus.$on('decreaseBar', (decrease) => {
        this.counter = decrease;
      });
    },

  }
</script>

<style scoped>

  .header {
    margin-top: 80px;
  }

  .progress-bar {
    width: 10%;
    transition: width 500ms;
  }


</style>