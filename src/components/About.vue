<script>
import PageTitle from "./PageTitle.vue"
import CuriculumCategory from "./CuriculumCategory.vue"

export default {
    name: "About",
    components : {
        PageTitle,
        CuriculumCategory
    }
}
</script>


<template>
    <div id="about">
        <PageTitle title="ABOUT ME"/>
        <div class="header">
            <img title="profile" class="profile" src="../assets/photos/identité.jpg"/>
        </div>
        <ul class="Curiculum">
            <li><CuriculumCategory name="Formations"/></li>
            <li><CuriculumCategory name="Professionnal Experience"/></li>
            <li><CuriculumCategory name="Skills"/></li>
        </ul>
    </div>
</template>


<style scoped>
#about {
    overflow: auto;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 50px 1fr 1fr;
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

.curiculum {
    display: flex;
    flex-direction: row;
    flex-wrap: warp;
    justify-content: space-between;
    color: #C8C8C8;
}
</style>
