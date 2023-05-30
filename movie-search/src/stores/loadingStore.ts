import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore("loading", () => {
  const isLoading = ref(false);

  const setLoading = (newValueForLoading: boolean) => {
    isLoading.value = newValueForLoading;
  };

  return { isLoading, setLoading };
});
