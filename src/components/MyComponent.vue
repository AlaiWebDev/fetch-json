<template>
  <div class="hello">
    <h1>Composant MyComponent chargé</h1>
    <button v-on:click="this.$emit('bonjourParent', bonjourParent)">Envoyer message</button>
  </div>
  <p>{{ messagefromParent }}</p>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      bonjourParent: "Coucou de l'enfant à son parent"
    }
  },
  props: ["messagefromParent"],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  border:1px solid black;
  background-color: #f4f4f4;
}
</style>
