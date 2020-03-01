<template>
    <div class="left-menu desktop">
        <div class="left-menu__wrapper">
            <img class="left-menu--logo" src="~assets/images/logo-small.png" alt="mediumgoal logosu">
            <div class="left-menu__menu">
                <div class="menu__selection" id="menu__selection"></div>
                <nuxt-link 
                    to="/"
                    tag="a" 
                    class="menu__item" 
                    active-class="active">
                        Blog
                </nuxt-link>
                <nuxt-link 
                    :to="{name:'about'}"
                    tag="a" 
                    class="menu__item" 
                    active-class="active">
                        Hakkımda
                </nuxt-link>
                <nuxt-link 
                    :to="{name:'contact'}"
                    tag="a" 
                    class="menu__item" 
                    active-class="active">
                        İletişim
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mixinSidenav } from '@/plugins/mixin-sidenav.js';
export default {
    mixins: [mixinSidenav]
}
</script>