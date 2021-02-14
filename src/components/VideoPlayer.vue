<script>
export default {
    name: "VideoPlayer",
    data: () => {
        return {
            videos: [
                "../assets/video/reel-drone.mp4",
                "../assets/video/reel-buildingGenerator.mp4",
                "../assets/video/reel-mazeGenerator.mp4",
                "../assets/video/reel-environment.mp4",
                "../assets/video/reel-mystique.mp4",
            ]
        }
    }
}
</script>


<template>
    <div id="videoplayer">
        <video id="video">
            <source controls src="../assets/video/reel-drone.mp4" type="video/mp4" autoplay="true">
            Video could not be loaded
        </video>
    </div>
</template>


<style scoped>
#videoplayer {
    overflow: hidden;
    max-height: 500px;
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
