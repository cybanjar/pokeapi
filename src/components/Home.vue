<template>
    {{ title }}
    <div class="container">
        Home Page
        <div class="overflow" style="max-height: 70vh">
            <div class="row">
                <div v-for="(item, index) in getDataPokemon" :key="index" class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">{{ item['name'] }}</h5>
                        <button @click="detail(item.url)" :dataPokemon="dataPokemon" type="button" class="btn btn-primary btn-sm text-white">Detail</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

interface State {
    dataPokemon: Object;
    getDataPokemon: Object;
}

export default defineComponent({

    setup() {
        const store = useStore();
        const router = useRouter();
        
        store.dispatch("getDataPokemon");
        
        const state = reactive<State>({
            dataPokemon: {},
            getDataPokemon: computed(() => { return store.getters.getPokemon }),
        })

        
        const detail = (val) => {
            store.commit("setUrl", val);
            router.push({ path: '/detail' })
        }

        onMounted(() => { 
         })

        return {
            ...toRefs(state), 
            detail,
        }
        
    },
})
</script>
