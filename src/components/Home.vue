<script>
import PageTitle from "./PageTitle.vue"
import VideoPlayer from "./VideoPlayer.vue"

export default {
    name: "Home",
    components : {
        PageTitle,
        VideoPlayer
    },
    data: () => {
        return {
            videos: [
                "../assets/video/reel-drone.mp4",
                "../assets/video/reel-buildingGenerator.mp4",
                "../assets/video/reel-mazeGenerator.mp4",
                "../assets/video/reel-environment.mp4",
                "../assets/video/reel-mystique.mp4",
            ],
            logos: [
                "../assets/logos/c++.png",
                "../assets/logos/houdini.png",
                "../assets/logos/maya.png",
                "../assets/logos/python.png",
                "../assets/logos/unity.png",
                "../assets/logos/unreal.png",
                "../assets/logos/vim",
                "../assets/logos/vs.png",
                "../assets/logos/web.png",
            ]
        }
    },
    methods: {
        getLogo(index){
            console.log(index)
            return index
        }
    }
}
</script>


<template>
    <div id="home">
        <PageTitle title="HOME"/>
        <VideoPlayer/>
        <p class="introduction">My name is Simon, I am currently a student in computer programming at ArtFX. I started as a 3D generalist and now focus more on programming. My main softwares are Houdini and Unreal, I am highly interested in procedual modeling but also in procedural in general (Animation, FX...)</p>
        <ul class="logos">
            <li class="logo" v-for="logo in logos" v-bind:key="logo"><img v-bind:src="getLogo(logo)" alt=""></li>
        </ul>
    </div>
</template>


<style scoped>
#home {
    overflow: auto;
    display: grid;
    grid-template-rows: 51px 4fr 4fr 1fr;
}

VideoPlayer {
    display: grid;
}

.introduction {
    margin: 20px;
    text-align: center;
    color: #C8C8C8;
    padding: auto;
}

.logos {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.logo {
    height: 80px;
    width: auto;
    opacity: 70%;
}
</style>
