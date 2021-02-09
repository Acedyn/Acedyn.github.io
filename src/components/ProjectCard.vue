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
        <span/>
        <div class="categories">
            <p class="category">{{ project.category[0] }}</p>
        </div>
    </div>
</template>


<style scoped>
#projectCard {
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #C8C8C8;
    transition: 0.1s;
    padding-top: 15px;
}

#projectCard:hover {
    background-color: #0B111A;
}

h4 {
    font-weight: bold;
    font-size: 20px;
}

img {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 60%;
}

.description {
    font-size: 15px;
    text-overflow: ellipsis;
}

.category {
    font-size: 15px;
    font-weight: bold;
}
</style>
