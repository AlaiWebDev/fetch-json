<template>
  <div class="hello">
    <h1>Composant enfant 'MyComponent' chargé</h1>
    <!-- <h2>Le mail de l'admin est {{ adminMail }}</h2> Contenu récupéré via le Store-->
    <button v-on:click="this.$emit('bonjourParent', bonjourParent)">Envoyer message au parent</button>
    <p>{{ messageFromParent }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
    props: ["messageFromParent"],
  data: function () {
    return {
  //     adminMail: "",
      bonjourParent: "Coucou de l'enfant à son parent"
    }
  },
  // created() {
  // On récupère le contenu du state 'mailAdminFromVuex' du Store
  //   this.adminMail = this.$store.state.mailAdminFromVuex;
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  border:1px solid black;
  background-color: #f4f4f4;
}
</style>
