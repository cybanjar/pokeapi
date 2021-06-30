<template>
  <div class="container mb-7">
    <span>Data User :</span>
    <ol class="list-group mb-3 list-group-numbered">
        <li v-for="(item, index) in getDataUser" :key="index" class="list-group-item text-capitalize">{{ item['name'] }}</li>
    </ol>

    <!-- {{ getDataFoto }} -->
    <div v-for="(item, index) in getDataFoto" :key="index" class="card mb-3" style="width: 18rem;">
        <img :src="`${item['thumbnailUrl']}`" class="card-img-top">
        <div class="card-body">
            <p class="card-text">{{ item['title'] }}</p>
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
  dataUser: any;
  dataFoto: any;
  dataPrepare: Object;
}

export default defineComponent({

  setup() {
    const store = useStore();
    const router = useRouter();
    
    onMounted(() => { 
       
    })

    const getDataUser = computed(() => {
        return store.getters.getUser
    })

    const getDataFoto = computed(() => {
        return store.getters.getFoto
    })
    
    store.dispatch("getDataUser");
    store.dispatch("getDataFoto");

    const state = reactive<State>({
      dataUser: {},
      dataFoto: {},
      dataPrepare: {},
    });

    return {
      ...toRefs(state),
      getDataUser,
      getDataFoto
    };
  },
});
</script>
