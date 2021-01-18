<script>
import ProjectCard from "./ProjectCard.vue"

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
                category: "No category",
                description: "Project description : This is an example project, this text will be fetched from a markdown file that will describe the project.",
                image: "default/warning.svg"
            }
        }
    }
}
</script>


<template>
    <div id="portfolio">
        <span/>
        <div class="title">
            <h3>MY PROJECTS</h3>
            <span class="line"/>
        </div>
        <ul class="nav">
            <li v-for="index in 6" v-bind:key="index" class="card">
                <ProjectCard v-bind:project="getProjects(index)"/>
            </li>
        </ul>
        <span/>
    </div>
</template>


<style scoped>
#portfolio {
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 1px 1fr 10fr 30px;
}

ul {
    list-style: none;
}

.title {
    display: grid;
    grid-template-rows: 1fr 2px;
}

.title h3 {
    display: grid;
    align-items: center;
    font-weight: normal;
    font-size: 30px;
    color: #C8C8C8;
}

.line {
    height: 2px;
    width: 95%;
    background-color: #A542DC;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
}

.nav {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
</style>
