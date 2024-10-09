//    がんばれ!  🌻

<template>
  <v-container class="mx-auto my-50 d-flex flex-column align-center">

    <v-item text-h1>Admin</v-item>

    <!-- ALERTS -->
    <v-container>
      <!-- Total Availability -->
      <v-alert outlined color="red lighten-1" text>
      Cantidad total de alumnos permitidos: <b>190</b> alumnos.
      </v-alert>

      <!-- Total Enrolled -->
      <v-alert outlined color="pink lighten-1" text>
      Cantidad total de alumnos inscritos: <b>103</b> alumnos.
      </v-alert>

      <!-- Availability Left -->
      <v-alert outlined color="deep-purple lighten-1" text>
      Cantidad total de cupos restantes : <b>87</b> alumnos.
      </v-alert>

      <!-- Finished Courses -->
      <v-alert outlined color="blue lighten-1" text>
      Cantidad de cursos terminados: <b>2</b> cursos.
      </v-alert>

      <!-- Active Courses -->
      <v-alert outlined color="teal lighten-1" text>
      Cantidad total de cursos activos: <b>4</b> cursos.
      </v-alert>

      <!-- Total Courses -->
      <v-alert outlined color="orange lighten-1" text>
      Cantidad total de cursos: <b>6</b> cursos.
      </v-alert>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'admin-view',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  // methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>