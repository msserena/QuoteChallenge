<template>

  <div class="row">
    <div class="col-sm-3">
    </div>

    <div class="col-sm-6">
      <div class="form-group">

        <p> Quote</p>
        <textarea class="form-control" rows="3" v-model="text" ></textarea>
        <br>
        <div class="text-center">
          <button class="btn btn-primary"
                  @click="addQuote"
          :disabled="text.length === 0"> Add Quote
          </button>
        </div>
      </div>
    </div>

    <div class="col-sm-3">
    </div>

  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {

    name: 'NewQuote',
    data() {
      return {
        counter: 1,
        quotesText: [],
        text: ''
      }
    },
    methods:  {
      addQuote() {
            this.counter = this.quotesText.length + 1;
            if ((this.counter >= 1) && (this.counter <= 9)) {
              this.counter++;
              this.quotesText.push(this.text);
              eventBus.$emit('anotherQuote', this.counter);
              eventBus.$emit('newQuote', this.quotesText);
              this.text = '';
            }
            else {
              alert('Delete a Quote to add another one!');
            }
          }
      },


  }

</script>

<style scoped>

  .form-group {
    margin-top: 40px;
  }

  p {
    font-weight: bold;
  }

</style>