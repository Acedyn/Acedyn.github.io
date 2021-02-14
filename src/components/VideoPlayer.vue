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
            this.index += 1
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
    </div>
</template>


<style scoped>
#videoplayer {
    overflow: hidden;
}

#videoforeground {
    opacity: 70%;
    width: auto;
    max-width: 100%;
    margin: auto;
}

</style>
