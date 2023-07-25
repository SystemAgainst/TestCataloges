<script setup>
import {storeToRefs} from "pinia";
import {useCategoryStore} from "@/store/categories.js";
import {onMounted} from "vue";

const store = useCategoryStore();

const {categories, cityId} = storeToRefs(store);

onMounted(() => {
  store.fetchCategories(cityId.value);
});

</script>

<template>
  <div class="container">
    <div class="products">
      <h2 class="products__title">Категории товаров</h2>
      <ul v-if="categories.length > 0" class="products__list">
        <li
            v-for="item in categories"
            :key="item.id"
            :style="{ backgroundColor: item.text_color }"
            :value="item"
            class="products__item"
        >
          <a :href="item.api_url" class="products__link">
            <h3 class="products__link-title">{{ item.name }}</h3>
            <img :alt="item.name" :src="item.image" class="products__link-img">
          </a>
        </li>
      </ul>
      <span v-else>Данные не загрузились</span>
    </div>
  </div>
</template>

<style scoped>
.products {
  margin-top: 35px;
}

.products__title {
  margin-bottom: 20px;
}

.products__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.products__item {
  position: relative;
  width: 271px;
  height: 152px;
  padding: 20px;
}

.products__link-title {
  color: white;
  font-size: 1.25rem;
}

.products__link-img {
  position: absolute;
  bottom: 15px;
  right: 20px;
}

@media screen and (max-width: 1170px) {
  .products__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
}

@media screen and (max-width: 1120px) {
  .products__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }
}

@media screen and (max-width: 945px) {
  .products__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}

@media screen and (max-width: 920px) {
  .products__list {
    grid-template-columns: repeat(auto-fill, 1fr);
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 856px) {
  .products__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 560px) {
  .products__list {
    display: flex;
    flex-direction: column;
  }
}
</style>
