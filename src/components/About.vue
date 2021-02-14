<script>
import PageTitle from "./PageTitle.vue"
import CuriculumElement from "./Contact.vue"

export default {
    name: "About",
    components : {
        PageTitle,
        CuriculumElement
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
            <li><CuriculumElement/></li>
            <li><CuriculumElement/></li>
            <li><CuriculumElement/></li>
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
    width: 20%;
    height: auto;
    border-radius: 50%;
}

.curiculum {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #C8C8C8;
}
</style>
