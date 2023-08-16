<template>
  <div class="p-4 text-center">
    <p class="text-4xl">
      {{ playerBio.first_name }} "{{ playerBio.nickname }}" {{ playerBio.last_name }}
    </p>
    <p v-if="Object.keys(playerStats).length == 0" class="text-2xl">No results</p>
    <div 
      v-for="event in Object.keys(playerStats)" 
      :key="event"
      class="max-h-96 my-4 md:w-5/6 md:mx-auto"
    >
      <p class="text-2xl">
        {{ event }} | PR: {{ getPR(event) }}
      </p>
      <div v-if="playerStats[event]['labels'].length > 1">
        <Line
          :options="chartOptions"
          :data="getRaceData(event)"
        />
      </div>
    </div>
    <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full mt-10" @click="$emit('showBio')">
      View Bio
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    index: number
}>()
const colorMode = useColorMode()

import stats_json from "~/assets/data/stats.json";
import bios_json from "~/assets/data/bios.json";
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales } from 'chart.js'

const stats : PlayerStats[] = Object.values(stats_json);
const bios : PlayerBio[] = bios_json;
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const playerStats = computed(() => stats[props.index])
const playerBio = computed(() => bios[props.index])

function getRaceData(event : string) {
  return {
    labels: playerStats.value[event].labels,
    datasets: [
      {
        label: 'Time (s)',
        backgroundColor: '#3b82f6',
        borderColor: colorMode.value == 'light' ? '#e2e8f0' : '#334155',
        data: playerStats.value[event].times,
      }
    ]
  } 
}

function getPR(event : string) {
  return secs_to_mins(Math.min(...playerStats.value[event].times))
}

function secs_to_mins(secs : number) {
  let minutes = Math.floor(secs / 60)
  let seconds = Math.round(secs % 60 * 100) / 100
  if (minutes === 0) {
    return `${seconds} sec`
  }
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y : {
      ticks: {
        callback: function(val : any) {
          return secs_to_mins(val)
        }
      }
    }
  },
  plugins: {
    legend : {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context : any) {
          return secs_to_mins(context.parsed.y)
        }
      }
    }
  }
}
</script>
