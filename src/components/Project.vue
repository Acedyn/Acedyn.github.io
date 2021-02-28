<script>
import PageTitle from "./PageTitle.vue"

export default {
    name: "Project",
    components : {
        PageTitle
    },
    data: () => {
        return {
            markdown: "<p>No project description found</p>"
        }
    },
    beforeCreate() {
        let xhr_project = new XMLHttpRequest();
        xhr_project.addEventListener("load", (project_response) => {
            let parser = new DOMParser();
            let content = parser.parseFromString(project_response.srcElement.response, "text/html")
            this.markdown = content.getElementById("file").innerHTML
        })
        let url = "https://api.github.com/repos/acedyn/portfoliosimonlambin/contents/src/assets/projects/" + this.$route.params.project + ".md"
        xhr_project.open("GET", url)
        xhr_project.setRequestHeader("Accept", "application/vnd.github.v3.html")
        xhr_project.send()
    }
}
</script>


<template>
    <div id="project">
        <PageTitle v-bind:title="$route.params.project"/>
        <div class="description" v-html="markdown"></div>
    </div>
</template>


<style>
#project {
    overflow: auto;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 50px 1fr;
}

.markdown-body {
    display: flex;
    flex-direction: column;
}
</style>
