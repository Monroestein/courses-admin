
//    がんばれ!  🌻

<template>
  <v-container>
    <v-row class="text-start">
      
      <!-- CARD -->
      <v-card class="mx-auto" max-width="344">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

        <v-card-title>
          Course
        </v-card-title>

        <v-card-subtitle>
            Cost
          <br>  Availability
          <br>  {{ date }}
        </v-card-subtitle>

        <v-card-subtitle>
          Description
        </v-card-subtitle>
      
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'helloworld-comp',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    date(){
      let date = new Date().toLocaleDateString("es-CL");
      return date
    }
  },
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

