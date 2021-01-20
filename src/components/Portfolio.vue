<script>
function getProjets() {
    let req = new XMLHttpRequest();
    req.addEventListener("load", (response) => { console.log(response) })
    req.open("GET", "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects")
    req.send()
}


import ProjectCard from "./ProjectCard.vue"
import PageTitle from "./PageTitle.vue"

export default {
    name: "Portfolio",
    components : {
        ProjectCard,
        PageTitle
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
    },
    mounted() {
        getProjets()
    }
}
</script>


<template>
    <div id="portfolio">
        <PageTitle title="MY PROJECTS"/>
        <ul class="nav">
            <li v-for="index in 6" v-bind:key="index" class="card">
                <ProjectCard v-bind:project="getProjects(index)"/>
            </li>
        </ul>
        <div class="pages">
            <span class="leftArrow"/>
            <span class="space"/>
            <p>1</p>
            <span class="space"/>
            <span class="rightArrow"/>
        </div>
    </div>
</template>


<style scoped>
#portfolio {
    overflow: auto;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 50px 1fr 50px;
}

ul {
    list-style: none;
}

.nav {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

@media screen and (max-width: 1200px) {
    .nav {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 800px) {
    .nav {
        grid-template-columns: repeat(1, 1fr);
    }
}

.pages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #C8C8C8;
}

.pages p {
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 2px;
}

.space {
    width: 30px;
}

.leftArrow {
    margin-top: auto;
    margin-bottom: auto;
    content: "";
    display: inline-block !important;
    width: 0;
    height: 0;
    border-right: 8px solid #6836b3;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    vertical-align: middle;
}

.rightArrow {
    margin-top: auto;
    margin-bottom: auto;
    content: "";
    display: inline-block !important;
    width: 0;
    height: 0;
    border-left: 8px solid #6836b3;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    vertical-align: middle;
}
</style>
