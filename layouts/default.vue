<template>
  <div>
    <TheHeader />
    <div class="page">
      <TheSideNav />
      <nuxt />
      <TheSidebar />
      
    </div>
    
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader';
import TheSideNav from '@/components/navigation/TheSideNav';
import TheSidebar from '@/components/navigation/TheSidebar';


export default {
  components: {
    TheHeader,
    TheSideNav,
    TheSidebar
  }
}
</script>
