<template>
  <div class="container">
    <div clas="row">
      <div class="col-sm-12">

        <app-header></app-header>
        <app-new-quote></app-new-quote>
        <app-single-quote>
          <p slot="quoteText"> {{ quote }} </p>
        </app-single-quote>
        <app-all-quotes>
        </app-all-quotes>

        <div class="info">
          <p> {{ infoText }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import NewQuote from './components/NewQuote.vue'
  import SingleQuotes from './components/SingleQuotes.vue'
  import AllQuotes from './components/AllQuotes.vue'

  export default {
    name: 'App',
    data: function () {
      return {
        infoText: 'Info: Click on a Quote to delete it!',
        quote: 'Just a Quote to start with something!',
        counter: 1
      }
    },
    components: {
      appHeader: Header,
      appSingleQuote: SingleQuotes,
      appAllQuotes: AllQuotes,
      appNewQuote: NewQuote

    }
  }
</script>

<style scoped>

  .info {
    text-align: center;
    background-color: lightblue;
    padding: 8px;
    font-weight: bold;
  }

</style>
