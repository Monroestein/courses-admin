//    がんばれ!  🌻

<template>
    <div> 
    
    <v-app-bar color="teal lighten-1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/study-8.svg"
          transition="scale-transition"
          width="40"
        />   
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="teal-lighten-4--text text--accent-4">

        <!-- Navigation Items -->
          <v-list-item v-for="route in routes" :key="route.title" @click="redirectTo(route.name)" >

            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 
    </div>
</template>

<script>
export default {
    name: 'navbar-comp',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:'mdi-home',
                    title:'Cursos',
                    name:'home'
                },
                {
                    icon:'mdi-account',
                    title:'Administración',
                    name:'admin'
                },
            ]
        }
    },
    // computed: {},
    methods: {
        redirectTo(routeName){
            this.$router.push({name:routeName})
        }
    }
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