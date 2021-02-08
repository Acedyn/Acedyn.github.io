<script>

function getProjectContent(project) {
    // let base64 = require('js-base64').Base64
    console.log(project.name)
    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            // let response = base64.decode(JSON.parse(this.responseText).content)
            console.log(this.responseText)
        }
    });

    xhr.open("GET", "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects/BuildingGenerator.md");
    xhr.setRequestHeader("Accept", "application/vnd.github.v3.html");

    // xhr.send();
}

function getProjets() {
    let req = new XMLHttpRequest();
    req.addEventListener("load", (response) => {
        let projects = JSON.parse(response.srcElement.response)
        for(let index in projects)
        {
            let project = projects[index]
            getProjectContent(project)
        }
    })
    req.open("GET", "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects")
    // req.send()
}


import ProjectCard from "./ProjectCard.vue"
import PageTitle from "./PageTitle.vue"

export default {
    name: "Portfolio",
    components : {
        ProjectCard,
        PageTitle
    },
    data: () => {
        return {
            projects: [
                {
                    name: "None",
                    category: "Loading",
                    description: "Loading project",
                    image: "default/warning.svg"
                }
            ]
        }
    },
    methods: {
        getProjects(_index) {
            if(this.projects[0].name == "None") {
                return {
                    index: _index,
                    name: "None",
                    category: "No category",
                    description: "No description",
                    image: "default/warning.svg"
                }
            }
        }
    },
    beforeCreate() {
        let req = new XMLHttpRequest();
        req.addEventListener("load", (response) => {
            // this.projects = JSON.parse(response.srcElement.response)
            console.log(JSON.parse(response.srcElement.response))
        })
        
        req.open("GET", "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects")
        req.send()
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
    </div>
</template>


<style scoped>
#portfolio {
    overflow: auto;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 50px 1fr 50px;
}

.nav {
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.card {
    width: 400px;
    height: 500px;
}
</style>
