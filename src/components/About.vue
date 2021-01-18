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
    </div>
</template>


<style scoped>
#about {
    display: grid;
}
</style>
