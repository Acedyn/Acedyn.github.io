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
        <p>My name is Simon, I am currently a student in computer programming at ArtFX. I started as a 3D generalist and now focus more on programming. My main softwares are Houdini and Unreal, I am highly interested in procedual modeling but also in procedural in general (Animation, FX...)</p>
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

p {
    text-align: center;
}
</style>
