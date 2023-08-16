<template>
  <div class="w-full min-h-screen p-4 md:p-8">
    <p class="text-5xl md:text-7xl font-bold text-center">Bay School <span class="text-blue-700 dark:text-blue-500">XC/TF</span></p>
    <PlayerBio v-if="panel === 'bio'" :index="playerIndex" @show-stats="panel = 'stats'" />
    <PlayerStats v-if="panel === 'stats'" :index="playerIndex" @show-bio="panel = 'bio'" />
    <div class="flex flex-row space-x-4 justify-center text-slate-50">
      <div class="flex flex-col">
        <button class="bg-blue-600 hover:bg-blue-800 font-bold py-3 px-4 rounded-full" :class="{'bg-slate-300': playerIndex == 0, 'hover:bg-slate-300': playerIndex == 0, 'cursor-not-allowed': playerIndex == 0}" @click="goBack()">
          <Icon name="ic:outline-arrow-left" size="32" />
        </button>
      </div>
      <div class="flex flex-col">
        <button class="bg-blue-600 hover:bg-blue-800 font-bold py-3 px-4 rounded-full" :class="{'bg-slate-300': playerIndex == numberOfPlayers - 1, 'hover:bg-slate-300': playerIndex == numberOfPlayers - 1, 'cursor-not-allowed': playerIndex == numberOfPlayers - 1}" @click="goForward()">
          <Icon name="ic:outline-arrow-right" size="32" />
        </button>
      </div>
    </div>
    <div class="mt-10">
      <div class="flex flex-row justify-center items-center mx-auto cursor-pointer" @click="showRoster = !showRoster">
        <p class="text-xl text-center">Roster ({{ numberOfPlayers }})</p>
        <Icon :name="showRoster ? 'material-symbols:arrow-drop-down' : 'material-symbols:arrow-drop-up'" size="32" />
      </div>
      <Transition>
        <div v-if="showRoster" class="flex flex-wrap justify-center text-center caption">
          <div v-for="(player, index) in bios" :key="index" class="flex flex-col items-center w-1/2 md:w-1/3 lg:w-1/5 px-4 py-1">
            <p class="text-lg cursor-pointer" @click="playerIndex = index">
              {{ player.first_name }} {{ player.last_name }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import bios from "~/assets/data/bios.json";
const numberOfPlayers = bios.length;

const panel = ref("bio")
const showRoster = ref(false);
const playerIndex = ref(0);

function goBack() {
  if (playerIndex.value > 0) {
    playerIndex.value -= 1;
  }
}
function goForward() {
  if (playerIndex.value < numberOfPlayers - 1) {
    playerIndex.value += 1;
  }
}
</script>