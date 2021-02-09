<script>
import PageTitle from "./PageTitle.vue"

export default {
    name: "About",
    components : {
        PageTitle
    }
}
</script>


<template>
    <div id="about">
        <PageTitle title="ABOUT ME"/>
        <img title="profile" class="profile" src="../assets/photos/identité.jpg"/>
        <div class="curiculum">
            <ul class="formation">
            </ul>
            <ul class="experience">
            </ul>
        </div>
    </div>
</template>


<style scoped>
#about {
    display: grid;
}
</style>
