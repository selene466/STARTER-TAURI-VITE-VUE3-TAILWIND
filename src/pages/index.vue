<script setup>
import { ref, onMounted } from "vue";
import { themeChange } from "theme-change";
import { useDebounceFn } from "@vueuse/core";

// ref
const showToast = ref(false);

// mounted
onMounted(() => {
    themeChange(false);
});

// function
const click = () => {
  console.log("clicked");
  showToast.value = true;
  const debounced = useDebounceFn(() => (showToast.value = false), 3000);
  debounced();
};

</script>

<template>
  <default-layout>
    <div
      class="container mx-auto flex max-w-screen-lg flex-col items-center justify-center border border-base-300 bg-base-100 p-5 shadow-xl h-[90%]"
    >
      <h1 class="mb-4 text-4xl font-bold">Welcome to Starter Template</h1>
      <p class="mb-16 tracking-wide">
        <ul class="list-disc list-inside">
            <li>Vite + Vue3 + Tailwind v3</li>
            <li>DaisyUI v4 + theme changer</li>
            <li>Iconify: mdi, ic, bxs, fluent, noto</li>
            <li>Auto import components + icons</li>
            <li>Auto router</li>
        </ul>
      </p>
      <div class="flex flex-col place-content-center gap-4">
        <button-click @click="click()"></button-click>
        <button
          class="btn btn-neutral text-neutral-content"
          data-toggle-theme="dark,light"
        >
          Change Theme
          <icons-mdi-theme-light-dark class="inline align-middle" />
        </button>
      </div>
      <div v-if="showToast" class="toast toast-end">
        <div class="alert alert-success shadow-xl">
          <span>This is toast</span>
        </div>
      </div>
    </div>
  </default-layout>
</template>

