<template>
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data : function () {
    return {
      allUtilisateurs: [],
      columns: []
    }
  },
  created() {
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
</style>
