<template>
    <div class="p-8 min-h-screen">
  <p class="text-5xl md:text-7xl font-bold text-center tracking-tight">Race Simulations (WIP)</p>
  <div class="flex flex-row mt-20">
    <div class="flex flex-col w-1/4 px-2">
      <p class="mx-auto text-4xl font-medium mb-4">{{ formattedClock }}</p>
      <p v-for="(time, athlete) of results" :key="athlete" class="mx-auto text-2xl text-center">{{ athlete }}: {{ time }}</p>
    </div>
    <div class="flex flex-col w-3/4">
  <div class="mx-auto w-full aspect-video">
    <l-map :useGlobalLeaflet="false" v-model:zoom="zoom" :center="center">
        <!--
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      -->

        <l-geo-json :geojson="geojson" :options-style="geojsonOptions"></l-geo-json>
        <l-marker v-for="(coords, athlete) of markerCoords" :key="athlete" :lat-lng="coords">
            <l-icon :icon-url="`/images/athletes/${athlete}.jpeg`" :icon-size="[32, 32]" class="rounded-full"></l-icon>
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
const times = ref({}) as Ref<{[key: string]: number}>
const results = ref({}) as Ref<{[key: string]: string}>

for (const athlete in races) {
    const time = races[athlete]['BCL West Meet No. 1'];
    markerCoords.value[athlete] = [
        coordinatePoints[0][1],
        coordinatePoints[0][0]
    ]
    times.value[athlete] = time;
}

function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
}

for (const athlete in races) {
    const tickSpeed = 0.1 * times.value[athlete];
    let tick = 0;
    const loop = setInterval(() => {
        markerCoords.value[athlete] = [
            coordinatePoints[tick][1],
            coordinatePoints[tick][0]
        ]
        if (Object.keys(races).indexOf(athlete) === Object.keys(races).length - 1) {
            const time = races[athlete]['BCL West Meet No. 1'];
            clock.value += time / length
        }
        if (tick >= length - 1) {
            results.value[athlete] = formatTime(races[athlete]['BCL West Meet No. 1'])
            clearInterval(loop);
        }
        tick++;
    }, tickSpeed);
}
</script>
