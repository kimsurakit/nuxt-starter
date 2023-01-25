export const useBaseFetch = () => {
  const runtimeConfig = useRuntimeConfig();

  return $fetch.create({
    baseURL: runtimeConfig.public.apiBase,
  });
};
