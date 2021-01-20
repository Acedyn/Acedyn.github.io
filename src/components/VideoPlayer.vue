<script>
let videoList = [
    "../assets/video/reel-drone.mp4",
    "../assets/video/reel-buildingGenerator.mp4",
    "../assets/video/reel-mazeGenerator.mp4",
    "../assets/video/reel-environment.mp4",
    "../assets/video/reel-mystique.mp4",
]

function playVideos() {
    videoList.sort(() => {return 0.5 - Math.random()})
    let video = document.getElementById("video")
    let source = videoList[0]
    console.log(source)
    // video.setAttribute("src", source)
    video.load()
    video.play()
}

function resizeVideo() {
    let video = document.getElementById("video")
    if(video.offsetHeight > 300)
    {
        let height = (video.offsetHeight - 300) / 2 + "px"
        video.style.bottom = height
    }
}


export default {
    name: "VideoPlayer",
    mounted() {
        playVideos()
        resizeVideo()
        window.addEventListener("resize", resizeVideo)
    },
    destroyed() {
        window.removeEventListener("resize", resizeVideo)
    }
}
</script>


<template>
    <div id="videoplayer">
        <video id="video">
            <source src="../assets/video/reel-buildingGenerator.mp4" type="video/mp4">
            Video could not be loaded
        </video>
    </div>
</template>


<style scoped>
#videoplayer {
    overflow: hidden;
    max-height: 300px;
    display: grid;
    margin-top: 20px;
}

video {
    opacity: 50%;
    width: 100%;
    height: auto;
    position: relative;
}

</style>
