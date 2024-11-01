<template>
  <div class="flex flex-wrap">
    <div class="flex w-full shrink grow flex-col items-center justify-center md:m-0 md:w-1/2 md:p-8">
      <img
        class="aspect-square w-full rounded-xl object-cover"
        :src="'/images/athletes/' + playerFullName + '.jpeg'"
      >
    </div>
    <div class="flex w-full shrink grow flex-col justify-center p-4 md:w-1/2 md:p-8">
      <p class="text-4xl font-bold tracking-tight md:text-5xl">
        {{ playerBio.first_name }} "{{ playerBio.nickname }}" {{ playerBio.last_name }}
      </p>
      <p class="mt-2 text-3xl tracking-tight md:text-4xl">
        {{ playerGrade }} <span v-if="playerBio.captain"> - Captain</span>
      </p>
      <div class="text-lg tracking-tight md:text-xl">
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
      <p class="mt-2 text-xl text-black dark:text-slate-50">
        Seasons Run:
      </p>
      <div class="flex flex-wrap font-bold text-white">
        <div
          v-for="season in playerBio.seasons"
          :key="season"
          class="flex flex-col p-2 pl-0"
        >
          <div class="rounded-full bg-yellow-500 px-6 py-1">
            {{ season }}
          </div>
        </div>
      </div>
      <UButton
        size="xl"
        block
        @click="$emit('showStats')"
      >
        View Stats
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import bios_json from '~/assets/data/bios.json';

const props = defineProps<{
  index: number
}>();

const bios: PlayerBio[] = bios_json;

const playerBio = computed(() => bios[props.index]);
const playerFullName = computed(() => playerBio.value.first_name + ' ' + playerBio.value.last_name);
const playerHeight = computed(() => {
  if (typeof (playerBio.value.height) == 'string') {
    return playerBio.value.height;
  }
  else {
    const feet = Math.floor(playerBio.value.height / 12);
    const inches = playerBio.value.height % 12;
    return feet + '\'' + inches + '"';
  }
});
// calculate player grade ( freshman, sophomore, junior, senior ) given their graduation year
const playerGrade = computed(() => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const gradYear = playerBio.value.grad_year;
  let yearsLeft;
  if (currentMonth > 6) {
    yearsLeft = gradYear - (currentYear + 1);
  }
  else {
    yearsLeft = gradYear - currentYear;
  }
  if (yearsLeft == 0) {
    return 'Senior';
  }
  else if (yearsLeft == 1) {
    return 'Junior';
  }
  else if (yearsLeft == 2) {
    return 'Sophomore';
  }
  else if (yearsLeft == 3) {
    return 'Freshman';
  }
  else {
    return 'Alumni';
  }
});
</script>
