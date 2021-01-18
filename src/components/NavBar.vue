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
                { index: 0, name:  "HOME", link: "/"},
                { index: 1, name: "ABOUT", link: "/about" },
                { index: 2, name: "PORTFOLIO", link: "/portfolio" },
                { index: 3, name: "CONTACT", link: "/contact" }
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
        <span/>
        <div class="name">
            <div>
                <h2 class="simon">Simon</h2>
            </div>
            <div>
                <h2 class="lambin">LAMBIN</h2>
            </div>
            <div class="job">
                <span class="line"/>
                <h3 class="td">Technical Director</h3>
                <span class="line"/>
            </div>
        </div>
        <span/>
        <ul style="display: grid;" class="nav">
            <li v-for="button in buttons" v-bind:key="button.key">
                <router-link v-bind:to="button.link" class="button">
                    {{ button.name }}
                </router-link>
            </li>
        </ul>
        <span/>
        <p class="footer">made with vueJS</p>
    </div>
</template>


<style scoped>
#navbar {
    display: grid;
    grid-template-rows: 2fr 6fr 2fr 10fr 3fr 1fr;
    background-color: #292F3E;
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
    font-size: 45px;
}

.lambin {
    position: relative;
    bottom: 20px;
    font-weight: bold;
    font-size: 45px;
}

.job {
    display: grid;
    width: 100%;
    align-items: center;
    font-weight: normal;
}

.td {
    display:grid;
    align-items: center;
    font-weight: normal;
}

.line {
    height: 2px;
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
    font-size: 20px;
    color: #C8C8C8;
    transition: 0.1s;
}

.button:hover {
    background-color: #252A38;
}

.footer {
    font-size: 12px;
    color: #C8C8C8;
}

</style>
