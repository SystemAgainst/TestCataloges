import { defineStore } from 'pinia';
import axios from "axios";

export const useCategoryStore = defineStore("category", {
    state: () => ({
        categories: [],
    }),
    getters: {
        getCategories(state) {
            return state.categories;
        }
    },
    actions: {

    }
});
