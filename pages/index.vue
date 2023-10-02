<template>
  <div>
    <div class="h-screen w-full flex flex-col justify-center items-center text-center p-1 md:p-4">
      <p class="text-6xl md:text-9xl font-bold tracking-tight">Bay School <span class="text-blue-600">XC/TF</span></p>
      <p class="text-xl md:text-3xl w-full md:w-5/6 2xl:w-1/2 mt-2 font-semibold tracking-tight">
        This is about <span class="underline decoration-blue-500 decoration-4 md:underline-offset-2">us</span> against the <span class="underline decoration-red-500 decoration-4 md:underline-offset-2">system</span>. The system that kills the <span class="underline decoration-yellow-500 decoration-4 md:underline-offset-2">human spirit</span>.
      </p>
      <div class="flex flex-row space-x-4 mt-4 md:mt-8">
        <div class="flex flex-col">
          <NuxtLink to="/players">
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full">
              Player Profiles
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/photos">
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full">
              Photo Gallery
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/xc">
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full">
              Race Sims
            </button>
          </NuxtLink>
        </div>
        <!--
        <div class="flex flex-col">
          <NuxtLink to="/races">
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full">
              Race Simulations
            </button>
          </NuxtLink>
        </div>
        -->
      </div>
      <div class="absolute bottom-0 p-6 text-2xl">
        <div class="flex flex-row justify-center">
          <div class="flex flex-col text-purple-500">
            <a href="https://www.instagram.com/bayschool.xctf/" target="_blank">
              <Icon name="mdi:instagram" size="32" />
            </a>
          </div>
          <div class="flex flex-col text-orange-500">
            <a href="https://www.strava.com/clubs/BayBreakers" target="_blank">
              <Icon name="mdi:strava" size="32" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-6 w-full text-center">
      <p class="text-lg">Created by <a href="https://www.lucaskchang.com/" target="_blank" class="text-blue-500 hover:text-blue-700">Lucas Chang</a></p>
    </div>
  </div>
</template>