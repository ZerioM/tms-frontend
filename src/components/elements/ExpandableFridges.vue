<template>
    <Accordion class="in_box" :multiple="true">
        <AccordionTab v-for="element in iterable" :key="element['_id']">
            <template #header>
                <span v-if="element.humOK && element.tempOK">🟢 {{element.name}}</span>
                <span v-if="(element.humOK && !element.tempOK) || (!element.humOK && element.tempOK)"> 🟡 {{element.name}}</span>
                <span v-if="!element.humOK && !element.tempOK"> 🔴 {{element.name}} </span>
                <img class="battery_icon" src="@/assets/icons/battery_full.svg">
            </template>
            {{element.name}} | {{element["_id"]}}
        </AccordionTab>
    </Accordion> 
    <div class="in_box">
        <div>Icons erstellt von <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a></div>
    </div>
</template>

<script>
export default {
    props: {
        iterable: [],
    },
}
</script>

<style scoped>

.in_box {
    margin: 2.5%;
}

.battery_icon {
    width: 5%;
    height: auto;
}
</style>