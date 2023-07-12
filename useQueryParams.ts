import { LocationQueryValue } from '.nuxt/vue-router';

interface UseQueryParamsOptions {
  defaultValue?: LocationQueryValue | LocationQueryValue[];
}

export function useQueryParams(name: string, options?: UseQueryParamsOptions) {
  const defaultValue: LocationQueryValue | LocationQueryValue[] =
    options?.defaultValue ?? '';

  const route = useRoute();
  const qp = ref(route.query[name] ?? defaultValue);

  watch([qp], () => {
    if (qp.value !== route.query[name]) {
      const query = {
        ...route.query,
        [name]: qp.value === defaultValue ? undefined : qp.value,
      };
      navigateTo({
        path: route.path,
        query,
      });
    }
  });

  return qp;
}
