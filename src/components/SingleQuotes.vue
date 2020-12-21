<template>
  <div class="cards">
    <slot name="quoteText"></slot>
  </div>
</template>

<script>

  export default {
    name: 'SingleQuotes',
    data: function () {
      return {}
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Arizonia&display=swap');

  .cards {
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: 'Arizonia', cursive;
    font-size: 22px;
    padding-left: 5px;
    padding-top: 3px;
    font-weight: bold;
    margin: 15px;
    height: 5rem;
    width: 15rem;
  }

  .cards:hover {
    background-color: lightpink;
  }

</style>