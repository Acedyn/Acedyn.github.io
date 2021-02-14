<script>
export default {
    name: "PageTitle",
    props: [ "title" ]
}
</script>


<template>
    <div id="pageTitle">
        <span/>
        <h3>{{ title }}</h3>
        <span/>
        <span class="line"/>
    </div>
</template>


<style scoped>
#pageTitle {
    display: grid;
    grid-template-rows: 2fr 30px 15px 2px;
}

h3 {
    display: grid;
    align-items: center;
    font-weight: normal;
    font-size: 30px;
    color: #C8C8C8;
}

.line {
    height: 2px;
    width: 95%;
    background-color: #6836b3;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
}

</style>
