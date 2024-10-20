//    がんばれ!  🌻

<template>
  <v-container class="body mx-auto my-50 cols-9 d-flex flex-column align-center">

    <v-item class="my-8"><h1>Administración</h1></v-item>

    <!-- LIST OF COURSES -->
     <v-container class="my-8 table">
      <v-row>
        <v-col>
          <v-simple-table light>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"> Curso </th>
              <th class="text-left"> Cupos </th>
              <th class="text-left"> Inscritos </th>
              <th class="text-left"> Duración </th>
              <th class="text-left"> Costo </th>
              <th class="text-left"> Estado </th>
              <th class="text-left"> Fecha </th>
              <th class="text-left"> <!-- Acciones --> </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="course in courses" :key="course.id">
              <td>{{ course.name }}</td>
              <td>{{ course.quota }}</td>
              <td>{{ course.enrolled }}</td>
              <td>{{ course.duration }}</td>
              <td>$ {{ course.cost.toLocaleString('es-CL') }}</td>
    <!--❌--> <td id="status">{{ courseStatus }}</td>
              <td>{{ course.date }}</td>
              <td><ActionsButtons/></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
        </v-col>
      </v-row>
     </v-container>

     <!-- BUTTON ADD COURSE -->

     <v-row justify="center">
        <v-col>
          <v-btn
            depressed
            elevation="2"
            large
            raised>
            Agregar curso
          </v-btn>
        </v-col>
     </v-row>


            <!-- FORM MODAL -->

    <!-- ALERTS -->
    <v-container class="alerts mt-8">
      <!-- Total Availability ✅ -->
      <v-alert outlined color="red lighten-1" text>
        <i class="fa-solid fa-user-group"></i> Cantidad total de alumnos permitidos: <b>{{ sumStudentsInTotal }}</b> alumnos.
      </v-alert>

      <!-- Total Enrolled ✅ -->
      <v-alert outlined color="pink lighten-1" text>
        <i class="fa-solid fa-user-check"></i> Cantidad total de alumnos inscritos: <b>{{ sumStudentsEnrolled }}</b> alumnos.
      </v-alert>

      <!-- Availability Left ✅ -->
      <v-alert outlined color="deep-purple lighten-1" text>
        <i class="fa-solid fa-user-plus"></i> Cantidad total de cupos restantes: <b>{{ sumAvailability }}</b> alumnos.
      </v-alert>

      <!-- Finished Courses ✅ -->
      <v-alert outlined color="blue lighten-1" text>
        <i class="fa-solid fa-ban"></i> Cantidad de cursos terminados: <b>{{ sumFinishedCourses }}</b> cursos.
      </v-alert>

      <!-- Active Courses ✅ -->
      <v-alert outlined color="teal lighten-1" text>
        <i class="fa-solid fa-bell"></i> Cantidad total de cursos activos: <b>{{ sumActiveCourses }}</b> cursos.
      </v-alert>

      <!-- Total Courses ✅ -->
      <v-alert outlined color="orange lighten-1" text>
        <i class="fa-solid fa-book-open"></i> Cantidad total de cursos: <b>{{ sumCoursesInTotal }}</b> cursos.
      </v-alert>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import ActionsButtons from '@/components/ActionsButtons.vue';

export default {
  name: 'admin-view',
  // props: {},
  data: function(){
    return { }
  },
  computed: {
    ...mapState(['courses']),
    ...mapGetters([ 'sumCoursesInTotal',
                    'sumStudentsInTotal',
                    'sumStudentsEnrolled',
                    'sumAvailability',
                    'sumFinishedCourses',
                    'sumActiveCourses',
                    'courseStatus'
                  ]),
  },
  methods: {
    ...mapActions(['fetchCourses'])
  },
  // watch: {},
  components: {
    ActionsButtons
  },
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

  .body{
    margin: 4% auto;
  }

  .table{
    width: 70vw;
  }
  
  .alerts{
    width: 50vw;
  }
</style>