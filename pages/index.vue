<template>
  <div>
    <div class="flex h-screen w-full flex-col items-center justify-center p-1 text-center md:p-4">
      <p class="text-6xl font-bold tracking-tight md:text-9xl">
        Bay School <span class="text-blue-600">XC/TF</span>
      </p>
      <p class="mt-2 w-full text-xl font-semibold tracking-tight md:w-5/6 md:text-3xl 2xl:w-1/2">
        This is about <span class="underline decoration-blue-500 decoration-4 md:underline-offset-2">us</span> against the <span class="underline decoration-red-500 decoration-4 md:underline-offset-2">system</span>. The system that kills the <span class="underline decoration-yellow-500 decoration-4 md:underline-offset-2">human spirit</span>.
      </p>
      <div class="mt-4 flex flex-row space-x-4 md:mt-8">
        <div class="flex flex-col">
          <NuxtLink to="/players">
            <button class="rounded-full bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-800">
              Player Profiles
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/photos">
            <button class="rounded-full bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-800">
              Photo Gallery (Coming Soon)
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/xc">
            <button class="rounded-full bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-800">
              Race Sims (WIP)
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
            <a
              href="https://www.instagram.com/bayschool.xctf/"
              target="_blank"
            >
              <Icon
                name="mdi:instagram"
                size="32"
              />
            </a>
          </div>
          <div class="flex flex-col text-orange-500">
            <a
              href="https://www.strava.com/clubs/BayBreakers"
              target="_blank"
            >
              <Icon
                name="mdi:strava"
                size="32"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-6 text-center">
      <p class="text-lg">
        Created by <a
          href="https://www.lucaskchang.com/"
          target="_blank"
          class="text-blue-500 hover:text-blue-700"
        >Lucas Chang</a>
      </p>
    </div>
  </div>
</template>
