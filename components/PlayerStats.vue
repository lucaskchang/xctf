<template>
  <div class="p-4 text-center">
    <p class="text-4xl font-medium tracking-tight">
      {{ playerBio.first_name }} "{{ playerBio.nickname }}" {{ playerBio.last_name }}
    </p>
    <p
      v-if="Object.keys(playerStats).length == 0"
      class="mt-4 text-3xl"
    >
      No results
    </p>
    <div
      v-for="event in Object.keys(playerStats)"
      :key="event"
      class="my-4 max-h-96 md:mx-auto md:w-5/6"
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
    <UButton
      size="xl"
      block
      class="mx-auto md:w-1/2"
      @click="$emit('showBio')"
    >
      View Bio
    </UButton>
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales } from 'chart.js';
import stats_json from '~/assets/data/stats.json';
import bios_json from '~/assets/data/bios.json';

const props = defineProps<{
  index: number
}>();
const colorMode = useColorMode();

const stats: PlayerStats[] = Object.values(stats_json);
const bios: PlayerBio[] = bios_json;
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const playerStats = computed(() => stats[props.index]);
const playerBio = computed(() => bios[props.index]);

function getRaceData(event: string) {
  return {
    labels: playerStats.value[event].labels,
    datasets: [
      {
        label: 'Time (s)',
        backgroundColor: '#3b82f6',
        borderColor: colorMode.value == 'light' ? '#e2e8f0' : '#334155',
        data: playerStats.value[event].times,
      },
    ],
  };
}

function getPR(event: string) {
  return secs_to_mins(Math.min(...playerStats.value[event].times));
}

function secs_to_mins(secs: number) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.round(secs % 60 * 100) / 100;
  if (minutes === 0) {
    return `${seconds} sec`;
  }
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: function (val: any) {
          return secs_to_mins(val);
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return secs_to_mins(context.parsed.y);
        },
      },
    },
  },
};
</script>
