import { createStore } from "vuex";
import axios from 'axios';

export const store = createStore({

    state() {
        return {
            dataPokemon: [],
            url: '',
            user: '',
            foto: '',
        };
    },
    getters: {
        getPokemon(state) {
            return state.dataPokemon;
        },
        getDetailPokemon(state) {
            return state.url
        },
        getUser(state) {
            return state.user
        },
        getFoto(state) {
            return state.foto
        }
    },
    mutations: {
        setDataPokemon(state, payload) {
           return state.dataPokemon = payload;
        },
        setUrl(state, payload) {
            return state.url = payload;
        },
        setDataUser(state, payload) {
            return state.user = payload;
        },
        setDataFoto(state, payload) {
            return state.foto = payload;
        },
    },
    actions: {
        async getDataPokemon({ commit }) {
            await axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((response) => {
                commit("setDataPokemon", response.data.results)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        // 'https://pokeapi.co/api/v2/pokemon/4/'
        async getDetailPokemon({ commit }) {
            await axios
            .get(store.state.url)
            .then((response) => {
                commit("setUrl", response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getDataUser({ commit }) {
            await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                commit("setDataUser", response.data)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        async getDataFoto({ commit }) {
            await axios
            .get("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((response) => {
                commit("setDataFoto", response.data)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
    },
     

});