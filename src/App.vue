<template>
<h1>Application qui fetch une ressource en ligne</h1>
  <div class="container">
    <table>
      <thead>
        <tr >
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(utilisateur, index) in allUtilisateurs" :key="index">
          <td>{{ utilisateur.id }}</td>
          <td>{{ utilisateur.pseudo }}</td>
          <td>{{ utilisateur.motdepasse }}</td>
          <td>{{ utilisateur.mail }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <input type="button" v-on:click="chargerComposant = !chargerComposant" :value="chargerComposant ? textButton[1] : textButton[0]"> -->
    <input type="button" v-on:click="chargerComposant = !chargerComposant" :value="chargerComposant ? 'Décharger composant' : 'Charger composant'">
  </div>
  <!-- <transition> -->
    <MyComponent v-if="chargerComposant"/>
  <!-- </transition> -->
  
</template>

<script>
import MyComponent  from "@/components/MyComponent.vue";
export default {
  name: 'App',
  components: {
    MyComponent
  },
  data : function () {
    return {
      allUtilisateurs: [],
      columns: [],
      chargerComposant: false,
      // textButton: ["Charger composant", "Décharger composant"]
    }
  },
  beforeMount () {
    const urlJson = "https://api.jsonbin.io/v3/b/6286a436402a5b38020398f6";
    const apiJsonKey = "$2b$10$J2YCvlT8PriRCj51g2q3lu8XaUOhNVlbPngCzk8Pzc/gKj4epPSxW";
    const headers = {
      "Content-Type": "application/json",
      "X-Master-Key": apiJsonKey
     };
    fetch(urlJson, { headers })
    .then(response => response.json())
    .then(data => {
      this.columns = Object.keys(data.record.categories.utilisateurs[0]);
      this.allUtilisateurs = data.record.categories.utilisateurs;
      }
    );
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  width: 300px;
  margin: auto;
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  text-align: center;
  padding: 1rem;
  border: 1px solid black;
}
input[type="button"]{
  margin: 1rem;
}
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
