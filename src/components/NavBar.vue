<script>
function fitTitles(element) {
    let titles = element.getElementsByTagName("h1")
    for(let i = 0; i < titles.length; i++) {
        // titles[i].style.fontSize = titles[i].clientHeight + "px"
    }
    titles = element.getElementsByTagName("h2")
    for(let i = 0; i < titles.length; i++) {
        // titles[i].style.fontSize = titles[i].clientHeight + "px"
    }
    titles = element.getElementsByTagName("h3")
    for(let i = 0; i < titles.length; i++) {
        // titles[i].style.fontSize = titles[i].clientHeight + "px"
    }
}

export default {
    name: "NavBar",
    data: function() {
        return {
            buttons : [
                { index: 0, name:  "Home", link: "/"},
                { index: 1, name: "About", link: "/about" },
                { index: 2, name: "Portfolio", link: "/portfolio" },
                { index: 3, name: "Contact", link: "/contact" }
            ]
        }    
    },
    mounted() { 
        let navbar = document.getElementById("navbar")
        fitTitles(navbar)
        window.addEventListener("resize", fitTitles(navbar))
    }
}
</script>


<template>
    <div id="navbar">
        <div class="name">
            <div>
                <h2 class="simon">Simon</h2>
            </div>
            <div>
                <h2 class="lambin">LAMBIN</h2>
            </div>
            <div class="job">
                <span class="line"/>
                <div>
                    <h3>Technical Director</h3>
                </div>
                <span class="line"/>
            </div>
        </div>
        <ul style="display: grid;" class="nav">
            <li v-for="button in buttons" v-bind:key="button.key">
                <router-link v-bind:to="button.link" class="button">
                    {{ button.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>


<style scoped>
#navbar {
    display: grid;
    grid-template-rows: 3fr 5fr;
    background-color: #292F3E;
}

h2, h3 {
    display: grid;
    justify-content: center;
    align-items: center;
    font-weight: normal;
}

a {
    text-decoration: none;
    color: white;
}

a.router-link-exact-active {
    color: #A542DC;
}

.name {
    display: grid;
}

.simon {
    position: relative;
    font-weight: normal;
}

.lambin {
    position: relative;
    font-weight: bold;
}

.job {
    display: grid;
    width: 100%;
    align-items: center;
}

.line {
    height: 3px;
    width: 80%;
    background-color: #A542DC;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
}

.nav {
    display: grid;
}

.button {
    display: grid;
    justify-content: center;
    align-items: center;
}

</style>
