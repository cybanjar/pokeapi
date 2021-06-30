<template>
  {{ version }}
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"> 
        <img src="../src/assets/edu.png">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"> Home </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/user"> User </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script lang="ts">
import.meta.env.PROD
import { defineComponent, reactive, toRefs, onMounted } from 'vue'

interface State {
  version: string;
}

export default defineComponent({
  
  setup() {
      const state = reactive<State>({
            version: ''
      })

      onMounted(() => { 
        state.version = process.env.NODE_ENV
      })

      return {
          ...toRefs(state), 
      }
      
  },

  components: {

  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
