<template>
    <div>
        <div class="mobile_menu__right">
            <span 
                v-if="isSearchOpen"
                @click="isSearchOpen = false"
                class="mobile_menu__search_closer"><i class="fa fa-times"></i></span>
            <transition name="fade">
                <input
                    v-if="isSearchOpen" 
                    ref="mobile_menu__search"
                    type="search" 
                    id="mobile_menu__search" 
                    placeholder="Blog durumlarında ara...">
            </transition>
            <span
                @click="openSearch"
                class="mobile_menu__search_opener"><i class="fa fa-search"></i></span>
        </div>
        <transition name="fade">
            <searchResults v-if="isSearchOpen" />
            
        </transition>
        <div
            @click="isSearchOpen = false" 
            v-if="isSearchOpen"
            class="mobile_search_overlay"></div>
    </div>
</template>

<script>
import searchResults from './search/searchResults'

export default {
    components: {
        searchResults
    },
    data() {
        return {
           isSearchOpen: false
        }
    },
    methods: {
        openSearch() {
           this.isSearchOpen = true;
        }
    }
}
</script>

<style scoped>
.mobile_search_overlay {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    background:rgba(0,0,0,.4);
    top: 50px;
    z-index: 2;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>