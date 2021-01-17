<script>
export default {
    name: "NavBar",
    data: function() {
        return {
            buttons : [
                { index: 0, name:  "Home", link: "/"},
                { index: 1, name: "About", link: "/about" },
                { index: 2, name: "Portfolio", link: "/portfolio" },
                { index: 3, name: "Contact", link: "/contact" }
            ]
        }    
    }
}
</script>


<template>
    <div id="navbar">
        <h2>Hi, i'm Simon Lambin</h2>
        <div style="display: grid;" class="nav">
            <div v-for="button in buttons" v-bind:key="button.key">
                <router-link v-bind:to="button.link" class="button">
                    {{ button.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
#navbar {
    background-color: grey;
    display: grid;
    grid-template-rows: 1fr 5fr;
}

h2 {
    color : blue;
};

.nav {
    display: grid;
}

.button {
    background-color: black;
    display: grid;
}

</style>
