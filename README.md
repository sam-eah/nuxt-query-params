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

<script setup>
const q = useQueryParams('q');
</script>
```

## Default value

By default, query params will not be shown in url when it's value is empty string.

```
/         <=> q.value = ''
/?q=test  <=> q.value = 'test'
```

It is possible to change this default value through the options.

Example:

```vue
<template>
  <select v-model="searchIn">
    <option value="title">title</option>
    <option value="author">author</option>
    <option value="category">category</option>
  </select>
</template>

<script setup>
const searchIn = useQueryParams('in', { defaultValue: 'title' });
</script>
```

```
/          <=> searchIn.value = 'title'
/?in=test  <=> searchIn.value = 'test'
```