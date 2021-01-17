<script>
import NavBar from "./components/NavBar.vue"

export default {
    name: "App",
    components: {
        NavBar
    }
}
</script>


<template>
    <div id="app">
        <NavBar id="navbar"/>
        <router-view/>
    </div>
</template>


<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: pink;

    display: grid;
    grid-template-columns: 1fr 4fr;
}

#navbar {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
