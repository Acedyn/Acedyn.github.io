<script>
import videoDrone from "../assets/video/reel-drone.mp4"
import videoBuilding from "../assets/video/reel-buildingGenerator.mp4"
import videoMaze from "../assets/video/reel-mazeGenerator.mp4"
import videoEnvironment from "../assets/video/reel-environment.mp4"
import videoMystique from "../assets/video/reel-mystique.mp4"


export default {
    name: "VideoPlayer",
    data: () => {
        return {
            videos: [
                videoDrone,
                videoBuilding,
                videoMaze,
                videoEnvironment,
                videoMystique
            ],
            index: 0
        }
    },
    mounted() {
        this.videos.sort(() => { return 0.5 - Math.random() })
        let videoPlayer = document.getElementById("videoforeground")
        videoPlayer.setAttribute("src", this.videos[this.index])
        videoPlayer.load()
        videoPlayer.play()
        videoPlayer.addEventListener("ended", () => { 
            if(this.index < this.videos.length - 1) { this.index += 1 }
            else { this.index = 0 }

            videoPlayer.setAttribute("src", this.videos[this.index])
            videoPlayer.load()
            videoPlayer.play()
        })
    }
}
</script>


<template>
    <div id="videoplayer">
        <video id="videoforeground" muted="muted">
            <source controls src="../assets/video/reel-drone.mp4" type="video/mp4">
            Video could not be loaded
        </video>
        <div class="introduction">
            <h2 class="title">HI, I'M SIMON LAMBIN</h2>
            <p class="description">
                I am currently a student in computer programming at ArtFX. 
                I started as a 3D generalist and now focus more on programming. 
                My main softwares are Houdini, Maya and Unreal, I am mostly interested in procedual modeling but also in procedural in general (Animation, FX...) 
            </p>
        </div>
    </div>
</template>


<style scoped>
#videoplayer {
    overflow: hidden;
    height: 100%;
}

#videoforeground {
    z-index: 1;
    position: relative;
    opacity: 50%;
    width: auto;
    height: 100%;
    float: right;
    bottom: 0;
    transform: translateX(calc((100% - 100vw) / 2));

}

.introduction {
    background: linear-gradient(90deg, rgba(8,11,16,0) 0%, rgba(8,11,16,0.5) 20%, rgba(8,11,16,0.7) 50%);
    z-index: 2;
    justify-content: right;
    position: relative;
    top: -100%;
    width: 600px;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr;
    float: right;
}

.title, h2 {
    font-size: 50px;
    color: #C8C8C8;
    text-align: right;
    padding: 50px;
}

.description{
    font-size: 20px;
    text-align: right;
    color: #C8C8C8;
    padding: 50px;
    padding-left: 200px;
}

</style>
