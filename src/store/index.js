import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses:[]
  },
  getters: {
  },
  mutations: {
    ADD_COURSE(state, course){
      state.courses.push({
        id:course.id,
        img:course.data().img,
        name:course.data().name,
        cost:course.data().cost,
        duration:course.data().duration,
        quota:course.data().quota,
        enrolled:course.data().enrolled,
        completed:course.data().completed,
        date:course.data().date,
        description:course.data().description
      })
    },
      RESET_COURSES(state){
        state.courses = []
      }
  },
  actions: {
    async fetchCourses({commit}){
      let querySnapShot = await getDocs(collection(db, 'courses'))

      commit('RESET_COURSES')

      querySnapShot.forEach((doc)=>{
        commit('ADD_COURSE', doc)
      })
    }
  },
  modules: {
  }
})
