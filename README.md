# useQueryParams

Composable for Nuxt3 used to bind a ref with a query search param.

The ref value must be of type `LocationQueryValue | LocationQueryValue[]`  
(basically `string | string[]`)

When the query search param changes, the ref will automatically be updated,  
and when the ref is changed, the query search param will be updated.  
(Circullar references have been taken care of)

## How to use

Basic usage: 

```vue
<template>
  <input type="text" v-model="q" />
</template>

<script setup >
const q = useQueryParams('q');
</script>
```