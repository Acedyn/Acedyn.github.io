<script>
export default {
    name : "NavBar",
    props : ['label', 'button'],
    data : function() {
        return {
            buttons : [
                { index : 1, name : "About", link : "https://github.com/" },
                { index : 2, name : "Portfolio", link : "https://www.youtube.com/" },
                { index : 3, name : "Contact", link : "https://openclassrooms.com/fr/" }
            ]
        }    
    }
}
</script>


<template>
    <div id="app">
        <h2>Hi, i'm {{ label }}</h2>
        <nav>
            <ul>
                <li v-for="button in buttons" v-bind:key="button.key">
                    <a v-bind:href="button.link">{{ button.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<style>
h2 {
    color: blue;
}

button {
    text-decoration: none;
}
</style>
