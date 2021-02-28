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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');

* {
    margin: 0px;
    padding: 0px;
    height: 100%;
}

html {
    font-family: "Segoe UI", Times, serif;
    font-weight: normal;
    text-align: center;
    color: white;
    background-color: #0F1621;
}

#app {
    display: grid;
    grid-template-columns: 300px 4fr;
}

p {
    font-family: 'Roboto Condensed', sans-serif;
}

</style>
