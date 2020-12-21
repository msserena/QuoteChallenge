<template>
  <div class="row">
    <div class="col-sm-3">
    </div>
    <div v-for="(quoteText, index) in quotesText"
         :key="index">
      <div class="cards" @click="deleteQuote(index)" > {{ quoteText }} </div>
    </div>

  </div>
</template>


<script>

  import {eventBus} from '../main';

  export default {
    name: 'AllQuotes',
    data: function () {
      return {
        text: '',
        quotesText: [],
      }
    },
    methods: {
      deleteQuote(index) {
        this.counter = this.quotesText.length + 1 ;
        this.quotesText.splice(index, 1);
        this.counter--;
        eventBus.$emit('decreaseBar', this.counter);
        if (this.counter === 0) {
          alert('Can`t delete more!');
        }
      }
    },
    created() {
      eventBus.$on('newQuote', (data) => {
        this.quotesText = data;
      });
    },


  }
</script>


<style>


</style>