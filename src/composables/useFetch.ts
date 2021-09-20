// the code in this file is not used in this project. Though these are meant to be reusable.
import { ref, computed, reactive } from "vue";
import axios, { AxiosRequestConfig } from "axios";

interface IConfig extends AxiosRequestConfig {
  skip?: boolean;
}

export const useFetch = (url: string, config: IConfig = {}) => {
  const response = ref<any>();
  const error = ref<any>();
  const loading = ref<boolean>(true);
  const data = ref<any>();
  // const data = computed(() => (response.value ? response.value.data : null));

  const fetch = async () => {
    loading.value = true;
    try {
      const result = await axios.request({ url, ...config });
      response.value = result;
      data.value = result.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  !config.skip && fetch();

  return {
    fetch,
    response,
    data,
    loading,
    error,
  };
};

const cacheMap = reactive(new Map());

export const useFetchCache = (
  key: any,
  url: string,
  config: AxiosRequestConfig
) => {
  const info = useFetch(url, { skip: true, ...config });

  const update = () => cacheMap.set(key, info.response.value);
  const clear = () => cacheMap.set(key, undefined);

  const fetch = async () => {
    try {
      await info.fetch();
      update();
    } catch (err) {
      clear();
    }
  };

  const response = computed(() => cacheMap.get(key));
  const data = computed(() => cacheMap.get(response.value?.data));

  if (response.value == null) fetch();

  return { ...info, fetch, data, response, clear };
};
