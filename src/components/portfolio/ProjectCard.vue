<script>
export default {
    name: "ProjectCard",
    props: ["project"]
}
</script>


<template>
    <div id="projectCard">
        <h4>{{ project.name }}</h4>
        <img v-bind:src="require('../../assets/' + project.image)" v-bind:alt="project.description"/>
        <p>{{ project.category }}</p>
        <p>{{ project.description }}</p>
    </div>
</template>


<style scoped>
#projectCard {
    border-radius: 10px;
    display:grid;
}

h4 {
    color: pink;
}
</style>
