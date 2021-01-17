<script>
import ProjectCard from "./portfolio/ProjectCard.vue"

export default {
    name: "Portfolio",
    components : {
        ProjectCard
    },
    methods: {
        getProjects(_index) {
            return {
                index: _index,
                name: "None",
                category: "None",
                description: "This project does not exists",
                image: "default/warning.svg"
            }
        }
    }
}
</script>


<template>
    <div id="portfolio">
        <h3>My projects</h3>
        <div v-for="index in 10" v-bind:key="index" class="card">
            <ProjectCard v-bind:project="getProjects(index)"/>
        </div>
    </div>
</template>


<style scoped>
#portfolio {
    background-color: yellow;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: repeat(3, 1fr);
}

h3 {
    color: red;
}
</style>
