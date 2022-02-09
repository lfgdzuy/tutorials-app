<template>
  <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md">
    <header v-if="title">
      <h2 class="text-left text-3xl font-bold pb-2 border-b-2 mb-2">
        {{ title }}
      </h2>
      <slot name="header-action"></slot>
    </header>
    <div class="mt-2">
      <p v-if="description" class="text-2xl font-bold text-gray-700">
        {{ description }}
      </p>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    actionIcon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
