import {defineStore} from "pinia";
import {getCategoriesById, getProducts} from "@/api/menuTags.js";

export const useCategoryStore = defineStore("category", {
    state: () => ({
        cityId: 1,
        categories: [],
    }),
    getters: {
        getCategories(state) {
            return state.categories;
        },
    },
    actions: {
        /**
         * Метод получения категорий
         * @param cityId
         * @returns {Promise<void>}
         */
        async fetchCategories(cityId = 1) {
            await getCategoriesById(cityId).then((res) => {
                this.categories = res.data.tags;
            });
        },
        async fetchProducts(cityId = 1, slug) {
            await getProducts(cityId, slug).then((res) => {
                console.log(res.data);
            })
        }
    },
});
