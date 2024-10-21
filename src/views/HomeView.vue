//    がんばれ!  🌻

<template>
  <v-container mx-auto my-60>

    <v-row class="d-flex justify-center my-5">
      <h1>Cursos</h1>
    </v-row>
    
    <!-- CARDS -->
    <v-row justify="center">

      <v-col cols="12" md="3" v-for="course in courses" :key="course.id">
        <v-card class="mx-auto" max-width="344">
          
          <!-- Card Image -->
          <v-img :src="course.img" height="200px"></v-img>

          <!-- Title -->
          <v-card-title>
            {{ course.name }}
          </v-card-title>

          <!-- Details -->
          <v-card-subtitle>
                  Costo: ${{ course.cost.toLocaleString('es-CL') }}
            <br>  Cupos: {{ course.quota }}
            <br>  Inicio: {{ course.date }}
          </v-card-subtitle>

          <!-- Description -->
          <v-card-text>
            {{ course.description }}
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>


  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'home-view',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    ...mapState(['courses'])
  },
  methods: {
    ...mapActions(['fetchCourses'])
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
    this.fetchCourses()
  }
  // -- End Lifecycle Methods
}
</script>

<style scoped>

</style>