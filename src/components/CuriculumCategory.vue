<script>
export default {
    name: "CuriculumCategory",
    props: [ "name" ],
}
</script>


<template>
    <div id="curiculumcategory">
        <h3>{{ name }}</h3>
    </div>
</template>


<style scoped>
#curiculumcategory {
    width: 100px;
    background-color: pink;
}

</style>
