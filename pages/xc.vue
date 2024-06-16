<template>
  <div class="p-8 min-h-screen">
  <p class="text-5xl md:text-7xl font-bold text-center tracking-tight">Race Simulations (WIP)</p>
  <div class="flex flex-row mt-20">
    <div class="flex flex-col w-1/4 px-2">
      <p class="text-2xl font-semibold text-center mb-2">Pick a Race</p>
      <select v-model="currentRace" class="ring-1 ring-black text-xl py-1 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded text-center w-3/5 mx-auto">
        <option v-for="race of Object.keys(races)" :key="race">{{ race }}</option>
      </select>
      <p class="text-xl text-center my-2">{{ races[currentRace].overview.distance }} miles / {{ races[currentRace].overview.elevation }} ft elev.</p>
      <p class="text-2xl font-semibold text-center mt-20">Results</p>
      <p class="mx-auto text-4xl font-medium text-red-500 mb-2">{{ formattedClock }}</p>
      <p v-for="(time, athlete) of results" :key="athlete" class="mx-auto text-lg text-center">{{ Object.keys(results).indexOf(athlete) + 1 }}. {{ athlete }}: {{ formatTime(time) }} ({{ formatTime(Number(time) / races[currentRace].overview.distance) }} min/mi)</p>
    </div>
    <div class="flex flex-col w-3/4">
  <div class="mx-auto w-full aspect-video">
    <l-map :useGlobalLeaflet="false" v-model:zoom="zoom" :center="center" id="my-map" class="ring-8 rounded ring-red-500">
      <!--
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      -->
        <l-geo-json :geojson="geojson" :options-style="geojsonOptions"></l-geo-json>
        <l-marker v-for="(coords, athlete) of markerCoords" :key="athlete" :lat-lng="coords" class="my-marker">
            <l-icon :icon-url="`/images/athletes/${athlete}.jpeg`" :icon-size="[32, 32]" class="my-marker rounded-full"></l-icon>
        </l-marker>
    </l-map>
  </div>
    </div>

  </div>
  <BackButton />
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import races from "~/assets/data/races.json";
import geojson from "~/assets/geojsons/BCL1.json";
import { LMap, LGeoJson, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

const geojsonOptions = () => ({
    color: "#FE0000",
    weight: 5,
});
const zoom = ref(16);
const coordinatePoints = geojson.features[0].geometry.coordinates[0];
const length = coordinatePoints.length;
const center = [
    coordinatePoints[Math.floor(length/ 2)][1],
    coordinatePoints[Math.floor(length / 2)][0]
];
const clock = ref(0);
const formattedClock = computed(() => {
    const minutes = Math.floor(clock.value / 60);
    const seconds = Math.round(clock.value % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
});
const markerCoords = ref({}) as Ref<{[key: string]: number[]}>
const times = computed(() => {
  return races[currentRace]['results'];
}) as Ref<{[key: string]: number}>
const results = ref({}) as Ref<{[key: string]: number}>

const currentRace = "BCL West Meet No. 1";

for (const athlete in races[currentRace]['results']) {
  markerCoords.value[athlete] = [
      coordinatePoints[0][1],
      coordinatePoints[0][0]
  ]
}

function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
}

for (const athlete in times.value) {
    const tickSpeed = 0.1 * times.value[athlete];
    let tick = 0;
    const loop = setInterval(() => {
        markerCoords.value[athlete] = [
            coordinatePoints[tick][1],
            coordinatePoints[tick][0]
        ]
        if (Object.keys(races[currentRace]['results']).indexOf(athlete) === Object.keys(races[currentRace]['results']).length - 1) {
            const time = times.value[athlete];
            clock.value += time / length
        }
        if (tick >= length - 1) {
            results.value[athlete] = times.value[athlete]
            clearInterval(loop);
        }
        tick++;
    }, tickSpeed);
}
</script>
