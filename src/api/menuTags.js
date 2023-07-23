import instance from "@/api/http";

export const getCategoriesById = (cityId) => instance.get(`catalog3/v1/menutags/`, {
    params: { city_id: cityId },
});
