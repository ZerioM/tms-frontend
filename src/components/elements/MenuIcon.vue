<template>
    <div ref="menu" id="menu" @click="toggleMenu()">
        <div class="menu-bar" :class="{rotation1: isOpen}" id="menu-bar-1">
        </div>
        <div class="menu-bar" :class="{hidden: isOpen}" id="menu-bar-2">
        </div>
        <div class="menu-bar" :class="{rotation2: isOpen}" id="menu-bar-3">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style scoped>
    
#menu {
    display: flex;
    flex-direction: column;
    z-index: inherit;
}

.menu-bar {
    width: 24.22px;
    height: 2.5px;
    margin-top: 22.5%;

    background: #FFFFFF;
}

.rotation1 {
    position: absolute;
    top: -20%;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

.rotation2 {
    position: absolute;
    top: -20%;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

.hidden {
    visibility: hidden;
}
</style>