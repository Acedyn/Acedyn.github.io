<script>
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
            projects: []
        }
    },
    beforeCreate() {
        let xhr_projects = new XMLHttpRequest();
        xhr_projects.addEventListener("load", (projects_response) => {
            let projects = JSON.parse(projects_response.srcElement.response)
            
            for(let project in projects)
            {
                let xhr_project = new XMLHttpRequest();
                xhr_project.addEventListener("load", (project_response) => {
                    let parser = new DOMParser();
                    let content = parser.parseFromString(project_response.srcElement.response, "text/html")
                    let name = content.getElementsByTagName("h1")[0].textContent
                    let file = content.getElementById("file").getAttribute("data-path").match(/(?<=\/)[a-zA-Z.\-_]*$/gm)
                    let image = content.getElementById("user-content-image").parentNode.nextSibling.nextSibling.textContent
                    console.log(image)
                    let description = content.getElementById("user-content-description").parentNode.nextSibling.nextSibling.textContent
                    let categories = []
                    let categoriesDOM = content.getElementById("user-content-tools").parentNode.nextSibling.nextSibling.childNodes
                    for( let category in categoriesDOM)
                    {
                        if(typeof categoriesDOM[category].textContent !== "undefined" && categoriesDOM[category].textContent !== "\n")
                        {
                            categories.push(categoriesDOM[category].textContent)
                        }
                    }
                    
                    this.projects.push(
                        {
                            name: name,
                            file: file,
                            categories: categories,
                            description: description,
                            image: image
                        }
                    )
                })
                let url = "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects/" + projects[project].name
                xhr_project.open("GET", url)
                xhr_project.setRequestHeader("Accept", "application/vnd.github.v3.html")
                xhr_project.send()
            }
        })
        
        xhr_projects.open("GET", "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects")
        xhr_projects.send()
    }
}
</script>


<template>
    <div id="portfolio">
        <PageTitle title="MY PROJECTS"/>
        <ul class="nav">
            <li v-for="project in projects" v-bind:key="project.name" class="card">
                <ProjectCard v-bind:project="project"/>
            </li>
        </ul>
    </div>
</template>


<style scoped>
#portfolio {
    overflow: auto;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 50px 1fr;
}

.nav {
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    padding-top: 30px;
    padding-bottom: 30px;
    width: 400px;
    height: 500px;
}
</style>
