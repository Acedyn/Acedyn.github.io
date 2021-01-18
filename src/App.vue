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
    font-family: "Segoe UI", Times, serif;
    font-weight: normal;
    text-align: center;
    background-color: #0F1621;
    color: white;

    display: grid;
    grid-template-columns: 300px 4fr;
}

</style>
