<script>
import PageTitle from "./PageTitle.vue"
import VideoPlayer from "./VideoPlayer.vue"

import logoCpp from "../assets/logos/c++.png"
import logoHoudini from "../assets/logos/houdini.png"
import logoMaya from "../assets/logos/maya.png"
import logoPython from "../assets/logos/python.png"
import logoUnity from "../assets/logos/unity.png"
import logoUnreal from "../assets/logos/unreal.png"
import logoVim from "../assets/logos/vim.png"
import logoVS from "../assets/logos/vs.png"
import logoWeb from "../assets/logos/web.png"

export default {
    name: "Home",
    components : {
        PageTitle,
        VideoPlayer,
    },
    data: () => {
        return {
            logos: [
                logoCpp,
                logoHoudini,
                logoMaya,
                logoPython,
                logoUnity,
                logoUnreal,
                logoVim,
                logoVS,
                logoWeb
            ]
        }
    },
    methods: {
        getLogo(path){
            console.log(path)
            return require(path)
        }
    }
}
</script>


<template>
    <div id="home">
        <PageTitle title="HOME"/>
        <VideoPlayer/>
        <ul class="logos">
            <li class="logo" v-for="logo in logos" v-bind:key="logo"><img v-bind:src="logo" alt=""></li>
        </ul>
    </div>
</template>


<style scoped>
#home {
    overflow: auto;
    display: grid;
    grid-template-rows: 50px 600px 4fr 1fr;
}

.logos {
    margin-top: 30px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.logo {
    height: 80px;
    width: auto;
    opacity: 50%;
    margin: auto;
    padding: 10px;
}
</style>
