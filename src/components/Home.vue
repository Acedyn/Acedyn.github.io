<script>
import PageTitle from "./PageTitle.vue"
import VideoPlayer from "./VideoPlayer.vue"

export default {
    name: "Home",
    components : {
        PageTitle,
        VideoPlayer
    }
}
</script>


<template>
    <div id="home">
        <PageTitle title="HOME"/>
        <VideoPlayer/>
        <span/>
    </div>
</template>


<style scoped>
#home {
    overflow: auto;
    display: grid;
    grid-template-rows: 50px 1fr 50px;
}

VideoPlayer {
    display: grid;
}
</style>
