<template>
  <div class="app-main-layout">
    <navbar />
      <router-view></router-view>
    </div>
</template>


<script>
import navbar from '@/components/navbar.vue'


export default {
    name: 'Main-layout'
}

components: {
    navbar
}

</script>