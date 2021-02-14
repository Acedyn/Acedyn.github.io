<script>
export default {
    name: "CuriculumElement",
    props: [ "name" ]
}
</script>


<template>
    <div id="CuriculumElement">
        <h3>{{ name }}</h3>
    </div>
</template>

<style scoped>
#CuriculumElement {
    background-color: pink;
}
</style>
