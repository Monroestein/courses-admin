<template>
  <v-app>
     <!-- NAVBAR -->
     <Navbar/>

  <!-- VIEWS -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navbar
  }
};
</script>
