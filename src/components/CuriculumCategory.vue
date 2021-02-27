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
                <div class="details">
                    <p v-if="element.dateStart">From {{ element.dateStart }} to {{ element.dateEnd }}</p>
                    <p v-if="element.place">{{ element.place }}</p>
                    <p v-for="extra in element.extra" v-bind:key="extra">{{ extra }}</p>
                    <p v-if="element.level" class="level">{{ element.level }} </p>
                </div>
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
    grid-gap: 20px;
}

.element {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.name {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    color: #6857B3;
    font-size: 16px;
    font-weight: normal;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>
