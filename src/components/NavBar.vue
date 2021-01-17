<script>
export default {
    name: "NavBar",
    props: ["label", "button"],
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
        <h2>Hi, i'm {{ label }}</h2>
        <nav>
            <ul>
                <li v-for="button in buttons" v-bind:key="button.key">
                    <router-link v-bind:to="button.link">{{ button.name }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>


<style>
h2 {
    color : blue;
}

li {
    list-style : none;
}

#navbar {
    border: solid 1px;
}
</style>
