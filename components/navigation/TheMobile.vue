<template>
    <div>
        <transition name="slide">
            <TheMobileSideNav v-if="isOpen" />
        </transition>
        
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
        
    }
}
</script>