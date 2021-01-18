<script>
export default {
    name: "ProjectCard",
    props: ["project"]
}
</script>


<template>
    <div id="projectCard">
        <h4>{{ project.name }}</h4>
        <img v-bind:src="require('../assets/' + project.image)" v-bind:alt="project.description"/>
        <p class="description">{{ project.description }}</p>
        <p class="category">{{ project.category }}</p>
        <span/>
    </div>
</template>


<style scoped>
#projectCard {
    border-radius: 20px;
    display:grid;
    grid-template-rows: 30px 3fr 2fr 30px 30px;
    align-items: center;
    justify-content: center;
    color: #C8C8C8;
    transition: 0.1s;
}

#projectCard:hover {
    background-color: #0D131C;
}

h4 {
    font-weight: bold;
    font-size: 20px;
}

img {
    margin-left: auto;
    margin-right: auto;
}

.description {
    font-size: 15px;
}

.category {
    font-size: 15px;
    font-weight: bold;
}
</style>
