import instance from "@/api/http";

export const getCategoriesById = (city_id) => instance.get(`catalog3/v1/menutags/`, {
    params: {
        city_id,
    },
});

export const getProducts = (city_id, slug) => instance.get(`catalog3/v1/menutags/${slug}`, {
    params: {
        city_id,
    },
});
