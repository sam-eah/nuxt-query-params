export function useQueryParams(name: string) {
  const route = useRoute();
  const qp = ref(route.query[name]);

  watch([qp], () => {
    if (qp.value !== route.query[name]) {
      const query = {
        ...route.query,
        [name]: qp.value || undefined,
      };
      navigateTo({
        path: route.path,
        query,
      });
    }
  });

  return qp;
}
