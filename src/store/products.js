import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            products: [
                {id: 1, title: "БАД", img: "src/assets/products/БАД.png", bgColor: "#01CC52"},
                {id: 2, title: "Функциональные коктейли", img: "src/assets/products/Питание.png", bgColor: "#FFAE00"},
                {id: 3, title: "Адаптогены", img: "src/assets/products/Адаптогены.png", bgColor: "#5C28F1"},
                {id: 4, title: "Сбалансированное питание", img: "src/assets/products/Group 2743.png", bgColor: "#FFAE00"},

                {id: 5, title: "Похудение", img: "src/assets/products/Похудение.png", bgColor: "#8BCD00"},
                {id: 6, title: "Напитки", img: "src/assets/products/Напитки.png", bgColor: "#FF6E00"},
                {id: 7, title: "Полезные лакомства", img: "src/assets/products/Сладости.png", bgColor: "#FC7AFF"},
                {id: 8, title: "Уход за лицом", img: "src/assets/products/Group 2724.png", bgColor: "#FF9BB3"},

                {id: 9, title: "Уход за телом", img: "src/assets/products/Без имени-14 1.png", bgColor: "#F6B76D"},
                {id: 10, title: "Уход за волосами", img: "src/assets/products/Без имени-9 1.png", bgColor: "#773232"},
                {id: 11, title: "Мужская косметика", img: "src/assets/products/Для мужчин.png", bgColor: "#DD3126"},
                {id: 12, title: "Макияж", img: "src/assets/products/Декоративная.png", bgColor: "#9108E5"},

            ],
            cityId: 1
        }
    },
});
