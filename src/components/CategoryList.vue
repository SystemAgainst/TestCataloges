<script setup>
import {storeToRefs} from "pinia";
import {useCategoryStore} from "@/store/categories.js";
import {onMounted} from "vue";
import {getCategoriesById} from "@/api/menuTags.js";

const store = useCategoryStore();
const {categories} = storeToRefs(store);

// Функция для загрузки категорий по cityId
const loadCategories = async (cityId) => {
  try {
    const response = await getCategoriesById(cityId);
    store.fetchCategories(response.data.tags.children);
    alert(response.data.tags.children.id);
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
  }
};

onMounted(() => {
  const cityId = 1; // Замените на нужный cityId
  loadCategories(cityId);
});

</script>

<template>
  <div class="container">
    <div class="products">
      <h2 class="products__title">Категории товаров</h2>
      <ul class="products__list" v-if="categories.length">
        <li
            class="products__item"
            v-for="item in categories.value"
            :key="item.id"
            :value="item"
            :style="{ backgroundColor: item.text_color }"
        >
          <a class="products__link" :href="item.api_url">
            <h3 class="products__link-title">{{ item.name }}</h3>
            <img class="products__link-img" :src="item.image" :alt="item.name">
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
