<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 mt-4 md:m-0 md:p-12 flex flex-col flex-grow flex-shrink justify-center items-center">
      <img class="object-cover rounded-xl w-full aspect-square" :src="'/images/athletes/' + playerFullName + '.jpeg'" />
    </div>
    <div class="w-full md:w-1/2 p-4 md:p-12 flex flex-col flex-grow flex-shrink justify-center">
      <p class="text-4xl md:text-5xl font-bold tracking-tight">
        {{ playerBio.first_name }} "{{ playerBio.nickname }}" {{ playerBio.last_name }}
      </p>
      <p class="text-3xl md:text-4xl mt-2 tracking-tight">
        {{ playerGrade }} <span v-if="playerBio.captain"> - Captain</span>
      </p>
      <div class="text-lg md:text-xl caption tracking-tight">
        <p class="mt-4">
          Height: {{ playerHeight }}
        </p>
        <p class="mt-2">
          Likes: {{ playerBio.likes }}
        </p>
        <p class="mt-2">
          Dislikes: {{ playerBio.dislikes }}
        </p>
        <p class="mt-2">
          Fun Fact: {{ playerBio.fun_fact }}
        </p>
      </div>
      <p class="text-black dark:text-slate-50 text-xl mt-10 caption">Seasons Run:</p>
      <div class="flex flex-wrap text-white font-bold">
        <div
          v-for="season in playerBio.seasons" 
          :key="season"
          class="flex flex-col p-2 pl-0"
        >
          <div class="bg-yellow-500 py-1 px-6 rounded-full">
            {{ season }}
          </div>
        </div>
      </div>
      <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full mt-4" @click="$emit('showStats')">
        View Stats
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    index: number
}>()

import bios_json from "~/assets/data/bios.json";

const bios : PlayerBio[] = bios_json;

const playerBio = computed(() => bios[props.index]);
const playerFullName = computed(() => playerBio.value.first_name + " " + playerBio.value.last_name);
const playerHeight = computed(() => {
    if (typeof(playerBio.value.height) == "string") {
        return playerBio.value.height;
    } else {
        let feet = Math.floor(playerBio.value.height / 12);
        let inches = playerBio.value.height % 12;
        return feet + "'" + inches + '"';
    }
})
// calculate player grade ( freshman, sophomore, junior, senior ) given their graduation year
const playerGrade = computed(() => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const gradYear = playerBio.value.grad_year;
  let yearsLeft;
  if (currentMonth > 6) {
    yearsLeft = gradYear - (currentYear + 1);
  } else {
    yearsLeft = gradYear - currentYear;
  }
  if (yearsLeft == 0) {
    return "Senior";
  } else if (yearsLeft == 1) {
    return "Junior";
  } else if (yearsLeft == 2) {
    return "Sophomore";
  } else if (yearsLeft == 3) {
    return "Freshman";
  } else {
    return "Alumni";
  }
})
</script>