<template>
  <button
    type="submit"
    :class="`px-4 py-2 font-medium tracking-wide text-${textColor} capitalize transition-colors duration-200 transform bg-${baseColor}-900 border border-${baseColor}-900 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    baseColor: {
      type: String,
      default: "neutral",
    },
    textColor: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style></style>
