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
        <ul>
            <li v-for="index in 10" v-bind:key="index">
                <ProjectCard v-bind:project="getProjects(index)"/>
            </li>
        </ul>
    </div>
</template>


<style scoped>
#portfolio {
    flex-direction: column;
    border: solid 1px;
}

h3 {
    color: red;
}

ul {
    flex-direction: column;
}
</style>
