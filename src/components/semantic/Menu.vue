<template>
<div id="menu">
    <img id="back-m" src="@/assets/icons/big_m.svg" />
    <nav>
        <h2>Menü</h2>
        <hr/>
        <ul id="navigation">
            <li><router-link @click="toggleMenu()" class="nav-list-el" to="/">Home</router-link></li>
            <li><router-link @click="toggleMenu()" class="nav-list-el" to="/fridges">Monitoring</router-link></li>
            <li><router-link @click="toggleMenu()" class="nav-list-el" to="/information">Information</router-link></li>
            <li><router-link @click="toggleMenu()" class="nav-list-el" to="/">Impressum</router-link></li>
        </ul>
    </nav>
</div> 
</template>

<script>
import { store } from '../../store';

export default {
    data () {
        return {
            sharedState: store.state,
        }
    },
    methods: {
        toggleMenu() {
            store.changeMenuVisibleAction(!this.sharedState.isMenuVisible);
        }
    }
}
</script>

<style lang="scss" scoped>
#menu {
    width: 100%;
    height: 250px;
    padding: 0%;
    padding-top: 5%;
    text-align: center;
    background: dodgerblue;
}
 
#back-m {
    z-index: 0;
    top: -30px;
    left: -10px;
    position: absolute;
    opacity: 0.3;
    max-width: 102%;
    width: 102%;
    height: auto;
    pointer-events: none;
}

h2 {
    margin-top: 0%;
    font-family: Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
    color: white;
}

ul {
    margin-left: -10%;
}

li {
    margin-bottom: 7.5%;
}

hr {
    border-top: 2px solid white;
    width: 104px;
}

#horizontal-line {
    border: 5px white;
}

#navigation {
    list-style-type: none;
}

.nav-list-el {
    font-family: Spartan;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0px;
    margin-bottom: 20%;
    color: white;
    text-decoration: none;
}
</style>