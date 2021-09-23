<template>
  <div id="app">
    <div id="nav">
      <b-container>
        <router-link class="font-big m-2" to="/">Home</router-link> |
        <router-link class="font-big" to="/list">List</router-link>
      </b-container>
    </div>
    <router-view/>
  </div>
</template>

<style>

body {
  background-image: url('https://wallup.net/wp-content/uploads/2016/05/24/143432-nature-Pokemon.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-family: 'Gluten', cursive;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.debug {
  border: 1px dashed red;
}

.search .input-group > .form-control, .input-group > .form-select {
  border: 3px solid #000;
}

.font-big {
  font-size: 2.3em;
}
</style>
