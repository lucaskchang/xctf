<template :class="$colorMode.value">
  <div class="transition duration-300 bg-white dark:bg-slate-900 text-black dark:text-slate-50">
    <ThemeSwitch />
    <slot />
  </div>
</template>