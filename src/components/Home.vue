<script>
import PageTitle from "./PageTitle.vue"

export default {
    name: "Home",
    components : {
        PageTitle
    }
}
</script>


<template>
    <div id="home">
        <PageTitle title="HOME"/>
    </div>
</template>


<style scoped>
#home {
    display: grid;
}
</style>
