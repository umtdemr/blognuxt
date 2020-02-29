<template>
    <div class="mobile_menu">
        <div class="mobile_menu__items">
            <div class="mobile_menu__item">
                <a @click="openMenu" class="menu__togle">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div class="mobile_menu__item">
                <img class="mobile-menu--logo" src="~assets/images/logo-small.png" alt="mediumgoal logosu">
            </div>
        </div>
        <TheMobileRight />
        
    </div>
</template>

<script>
import TheMobileRight from './TheMobileRight';
export default {
    components: {
        TheMobileRight
    },
    methods: {
        openMenu() {
            let body = document.querySelector("body");
            body.style.overflow = "hidden";
            this.$store.commit("navigation/openMenu")
        }
    }
    
}
</script>