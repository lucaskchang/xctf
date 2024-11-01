<template>
  <div class="bg-white text-3xl font-semibold shadow">
    <div
      class="flex w-full flex-row items-center justify-between px-8 py-4"
    >
      <NuxtLink
        to="/"
        class="flex flex-row items-center space-x-4"
      >
        <NuxtImg
          format="webp"
          src="/logotext.png"
          alt="logo"
          class="h-20 rounded-full"
        />
      </NuxtLink>
      <div
        v-if="bigScreen"
        class="flex flex-row items-center space-x-6 py-2"
      >
        <NuxtLink
          v-for="link of links"
          :key="link.name"
          :to="link.to"
          class="hover:text-gray-600"
          :class="{
            'underline decoration-4 underline-offset-8': route.path === link.to,
          }"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="flex flex-row items-center space-x-4">
          <a
            v-for="social of socials"
            :key="social.icon"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col justify-center hover:text-gray-600"
          >
            <UIcon
              :name="social.icon"
              class="size-9"
            />
          </a>
        </div>
      </div>
      <div v-else>
        <UIcon
          name="i-mdi-menu"
          class="size-12"
          @click="showMenu = !showMenu"
        />
      </div>
    </div>
    <Transition>
      <div
        v-if="showMenu"
        ref="menu"
        class="absolute top-24 z-50 flex h-[576px] w-full flex-col items-center bg-white pt-24 shadow"
      >
        <NuxtLink
          v-for="link of links"
          :key="link.name"
          :to="link.to"
          class="mb-4 hover:text-gray-600"
          @click="showMenu = false"
        >
          {{ link.name }}
        </NuxtLink>
        <UDivider class="mx-auto w-1/2" />
        <p class="mb-2 mt-4">
          Socials
        </p>
        <div class="flex flex-row items-center space-x-4">
          <a
            v-for="social of socials"
            :key="social.icon"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col justify-center hover:text-gray-600"
          >
            <UIcon
              :name="social.icon"
              class="size-9"
            />
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import socials from '~/assets/data/socials.json';
import links from '~/assets/data/pages.json';

const route = useRoute();
const { width } = useWindowSize();
const bigScreen = computed(() => width.value >= 768);
const showMenu = ref(false);
const menu = ref(null);

onClickOutside(menu, () => {
  setTimeout(() => {
    if (showMenu.value) {
      showMenu.value = false;
    }
  }, 100);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
