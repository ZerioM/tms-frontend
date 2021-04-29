<template>
    <Accordion :multiple="true">
        <AccordionTab v-for="element in iterable" :key="element['_id']" :header="element.name">
            {{element.name}} | {{element["_id"]}}
        </AccordionTab>
    </Accordion> 
</template>

<script>
export default {
    props: {
        iterable: [],
    },
}
</script>

<style>

</style>