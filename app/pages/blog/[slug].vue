<script setup lang="ts">
const { slug } = useRoute().params;
//   const { data: post } = await useFetch(`/api/cms/blog/${slug}`)
const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/1?slug=${slug}`);
</script>

<template>
    <NuxtLink to="/">Go to home</NuxtLink>
    <h1>{{ post.title }}</h1>
    <div class="w-full bg-gray-200">
        {{ post.body }}
    </div>
</template>
