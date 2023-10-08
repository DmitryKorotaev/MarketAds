<template>
  <div id="app">
    <Navbar/>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import MainLayout from "./layout/MainLayout.vue";
import EmptyLayout from "./layout/EmptyLayout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },

  components: {
    MainLayout,
    EmptyLayout,
    Navbar
  },
};
</script>
