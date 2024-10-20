//    がんばれ!  🌻

<template>
    <v-row> 
        <!-- EDIT -->
        <v-col>
            <v-btn
            elevation="2"
            icon
            raised
            x-small
            ><i class="fa-solid fa-pen"></i></v-btn>
        </v-col>
        <!-- DELETE -->
        <v-col>
            <v-btn
            elevation="2"
            icon
            raised
            x-small
            ><i class="fa-solid fa-trash"></i></v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'actionsbuttons-comp',
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