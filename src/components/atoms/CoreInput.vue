<template>
  <div class="flex flex-col items-start">
    <label class="text-gray-900 font-bold font-bold" for="username">{{
      label
    }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
      :value="modelValue"
      @input="updateValue"
    />
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
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
    };
    return { updateValue };
  },
};
</script>

<style></style>
