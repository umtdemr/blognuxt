<template>
    <div>
        <transition name="slide">
            <TheMobileSideNav v-if="isOpen"/>
        </transition>
        <div 
            @click="closeMenu"
            class="mobile_menu_overlay" v-if="isOpen"></div>
        <TheMobilebar />
    </div>
</template>

<script>
import TheMobilebar from './mobile/TheMobilebar';
import TheMobileSideNav from './mobile/TheMobileSideNav';

export default {
    components: {
        TheMobileSideNav,
        TheMobilebar
    },
    computed: {
        isOpen() {
            return this.$store.getters['navigation/isOpenMenu'];
        }
    },
    methods: {
        closeMenu() {
            let body = document.querySelector("body");
            body.style.overflow = "auto";
            this.$store.commit('navigation/closeMenu')
        }
    }
}
</script>

<style scoped>
    .slide-enter-active{
        animation: slide_menu_from_left .4s;
    }
    .slide-leave-active{
        animation: slide_menu_from_right .4s;
    }

    @keyframes slide_menu_from_left {
        from {
            transform: translateX(-300px);
        }
        to {
            transform: translateX(0px);
        }
    }
    @keyframes slide_menu_from_right {
        from {
            transform: translateX(-0px);
        }
        to {
            transform: translateX(-300px);
        }
    }
    .mobile_menu_overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        background:rgba(0,0,0,.4);
        z-index: 1;
    }
</style>