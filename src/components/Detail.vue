<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-between">
        <p class="mt-2 text-muted">Detail</p>
        <p class="fw-bold text-uppercase">{{ getDataPokemon['name'] }}</p>
        <a href="/" class="btn btn-primary btn-sm">Back</a>
    </div> 
    <!-- {{ getDataPokemon }} -->
    <div class="card mb-3" style="width: 21rem;">
        <img :src="`${getDataPokemon['sprites']['front_default']}`" class="card-img-top rounded mx-auto d-block" style="width: 50%; height: auto" >
        <div class="card-body">
            <h5 class="card-title text-uppercase fw-bold text-primary">{{ getDataPokemon['name'] }}</h5>
            <span class="card-text text-capitalize">Abiliti </span>
            <ol class="">
                <li v-for="(item, index) in getDataPokemon['abilities']" :key="index" class="fw-light text-muted text-capitalize">{{ item['ability']['name'] }}</li>
            </ol>
            
            <span class="card-text text-capitalize">
                Height <span class="badge bg-dark">{{ getDataPokemon['height'] }} </span> 
                Weight <span class="badge bg-dark">{{ getDataPokemon['weight'] }} </span>
            </span>

            <br>
            
            <span>Types :</span>
            <ol class="list-group mb-3 list-group-numbered">
                <li v-for="(item, index) in getDataPokemon['types']" :key="index" class="list-group-item text-capitalize">{{ item['type']['name'] }}</li>
            </ol>
            
            
            <span>Stats :</span>
            <ol class="list-group mb-3 list-group-numbered">
                <li v-for="(item, index) in getDataPokemon['stats']" :key="index" class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold text-capitalize">{{ item['stat']['name'] }}</div>
                    {{ item['base_stat'] }}
                    </div>
                    <span class="badge bg-primary rounded-pill">{{ item['base_stat'] }}</span>
                </li>
            </ol>

            <span>Move :</span>
            <ol class="list-group mb-3 list-group-numbered">
                <li v-for="(item, index) in getDataPokemon['moves']" :key="index" class="list-group-item text-capitalize">{{ item['move']['name'] }}</li>
            </ol>
            
            <router-link to="/" class="btn btn-primary">Cari lagi</router-link>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  watch,
  computed,
} from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

interface State {
  dataPokemon: any;
  dataPrepare: Object;
}

export default defineComponent({

  setup() {
    const store = useStore();
    const router = useRouter();
    
    onMounted(() => { 
       
    })

    const getDataPokemon = computed(() => {
        return store.getters.getDetailPokemon
    })
    
    store.dispatch("getDetailPokemon");

    const state = reactive<State>({
      dataPokemon: {},
      dataPrepare: {},
    });

    return {
      ...toRefs(state),
      getDataPokemon
    };
  },
});
</script>
