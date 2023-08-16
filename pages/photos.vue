<template>
  <div class="h-screen w-full flex flex-col justify-center items-center text-center p-4 bg-cover" style="background-image: url('/images/gallery_bg.jpg')">
    <p class="text-5xl md:text-9xl tracking-tight text-white font-bold">Coming Soon...</p>
    <NuxtLink to="/">
      <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full mt-4 md:mt-8">
        Back Home
      </button>
    </NuxtLink>
  </div>
</template>

<!--
<template>
  <div class="h-screen w-full text-center p-2 md:p-8 bg-cover" style="background-image: url('/images/gallery_bg.jpg')">
    <p class="text-3xl md:text-5xl my-4 tracking-tight text-white font-bold ">Photo Gallery</p>
    <div class="flex flex-wrap lg:px-8">
      <div v-for="(link, name) of albums" :key="name" class="flex flex-col w-full md:w-1/3 lg:w-1/4 p-2 lg:p-4" :href="link">
        <img :src="`/images/albums/${name}.jpg`" alt="gallery_1" class="w-full aspect-square object-cover rounded-lg shadow-lg hover:scale-105 transition ease-in-out duration-300">
        <p class="text-white text-xl font-bold mt-2">{{ name }}</p>
      </div>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import albums from '~/assets/data/albums.json'
</script>
-->