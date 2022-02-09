<template>
  <div class="flex items-center">
    <input type="radio" />
    <label class="text-gray-900 ml-2">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
