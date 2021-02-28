<script>
import experience from "../assets/curiculum/experience.json"
import formation from "../assets/curiculum/formation.json"
import skills from "../assets/curiculum/skills.json"

import PageTitle from "./PageTitle.vue"
import CuriculumCategory from "./CuriculumCategory.vue"

export default {
    name: "About",
    components : {
        PageTitle,
        CuriculumCategory
    },
    data: () => {
        return {
            experience: experience,
            formation: formation,
            skills: skills
        }
    },
}
</script>


<template>
    <div id="about">
        <PageTitle title="ABOUT ME"/>
        <div class="header">
            <img title="profile" class="profile" src="../assets/images/identité.jpg"/>
        </div>
        <ul class="elements">
            <li class="element"><CuriculumCategory name="Formations" v-bind:curiculum="formation"/></li>
            <span class="line"/>
            <li class="element"><CuriculumCategory name="Experience" v-bind:curiculum="experience"/></li>
            <span class="line"/>
            <li class="element"><CuriculumCategory name="Skills" v-bind:curiculum="skills"/></li>
        </ul>
    </div>
</template>


<style scoped>
#about {
    overflow: auto;
    display: grid;
    grid-template-rows: 50px 300px 1fr;
}

.header {
    width: 100%;
    height: 300px;
    display: flex;
}

.profile {
    overflow: hide;
    margin: auto;
    width: auto;
    height: 50%;
    max-width: 80%;
    border-radius: 50%;
}

.elements {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    color: #C8C8C8;
}

.element {
    flex-grow: 4;
    list-style: none;
    width: 300px;
}

.line {
    flex-shrink: 4;
    height: 80%;
    width: 2px;
    background-color: #6857B3;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
}
</style>
