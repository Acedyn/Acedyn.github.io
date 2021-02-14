<script>
export default {
    name: "CuriculumCategory",
    props: [ "name", "curiculum"],
}
</script>


<template>
    <div id="curiculumcategory">
        <h3>{{ name }}</h3>
        <ul class="elements">
            <li v-for="element in curiculum.curiculum" v-bind:key="element.name" class="element">
                <h4 class="name">{{ element.name }}</h4>
                <p>{{ element.dateStart }} - {{ element.dateEnd }}</p>
                <p>{{ element.place }}</p>
                <p v-for="extra in element.extra" v-bind:key="extra">{{ extra }}</p>
                <p>{{ element.level }}</p>
            </li>
        </ul>
    </div>
</template>


<style scoped>
#curiculumcategory {
    display: grid;
    grid-template-rows: 50px 1fr;
}

.elements {
    list-style: none;
    display: grid;
    grid-gap: 10px;
}

.element {
    display: flex;
    flex-direction: row;
    text-align: center;
}

.name {
    color: #6836b3;
    font-size: 16px;
    font-weight: normal;
}

</style>
