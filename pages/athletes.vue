<template>
  <div class="w-full px-4 pb-4 md:px-8">
    <PlayerBio
      v-if="panel === 'bio'"
      :index="playerIndex"
      @show-stats="panel = 'stats'"
    />
    <PlayerStats
      v-if="panel === 'stats'"
      :index="playerIndex"
      @show-bio="panel = 'bio'"
    />
    <div class="flex flex-row justify-center space-x-4 text-slate-50">
      <div class="flex flex-col">
        <UButton
          :class="{ 'bg-slate-300': playerIndex == 0, 'hover:bg-slate-300': playerIndex == 0, 'cursor-not-allowed': playerIndex == 0 }"
          @click="goBack()"
        >
          <Icon
            name="ic:outline-arrow-left"
            size="32"
          />
        </UButton>
      </div>
      <div class="flex flex-col">
        <UButton
          :class="{ 'bg-slate-300': playerIndex == numberOfPlayers - 1, 'hover:bg-slate-300': playerIndex == numberOfPlayers - 1, 'cursor-not-allowed': playerIndex == numberOfPlayers - 1 }"
          @click="goForward()"
        >
          <Icon
            name="ic:outline-arrow-right"
            size="32"
          />
        </UButton>
      </div>
    </div>
    <div class="mt-10">
      <div
        class="mx-auto flex cursor-pointer flex-row items-center justify-center"
        @click="showRoster = !showRoster"
      >
        <p class="text-center text-xl">
          Roster ({{ numberOfPlayers }})
        </p>
        <Icon
          :name="showRoster ? 'material-symbols:arrow-drop-down' : 'material-symbols:arrow-drop-up'"
          size="32"
        />
      </div>
      <Transition>
        <div
          v-if="showRoster"
          class="caption flex flex-wrap justify-center text-center"
        >
          <div
            v-for="(player, index) in bios"
            :key="index"
            class="flex w-1/2 flex-col items-center px-4 py-1 md:w-1/3 lg:w-1/5"
          >
            <p
              class="cursor-pointer text-lg"
              @click="playerIndex = index"
            >
              {{ player.first_name }} {{ player.last_name }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import bios from '~/assets/data/bios.json';

const numberOfPlayers = bios.length;

const panel = ref('bio');
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
