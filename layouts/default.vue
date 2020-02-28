<template>
  <div>
    <TheMobile />
    <div class="page">
      <TheSideNav />
      <nuxt />
      <TheSidebar />
      
    </div>
    
  </div>
</template>

<script>
import TheMobile from '@/components/navigation/TheMobile';
import TheSideNav from '@/components/navigation/TheSideNav';
import TheSidebar from '@/components/navigation/TheSidebar';


export default {
  components: {
    TheMobile,
    TheSideNav,
    TheSidebar
  }
}
</script>
