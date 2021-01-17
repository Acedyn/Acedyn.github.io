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
        <div class="title">
            <h3>My projects</h3>
            <span class="line"/>
        </div>
        <ul class="nav">
            <li v-for="index in 6" v-bind:key="index" class="card">
                <ProjectCard v-bind:project="getProjects(index)"/>
            </li>
        </ul>
    </div>
</template>


<style scoped>
#portfolio {
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 1fr 5fr;
}

ul {
    list-style: none;
}

.title {
    display: grid;
}

.line {
    height: 3px;
    width: 95%;
    background-color: #A542DC;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
}

.nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
</style>
