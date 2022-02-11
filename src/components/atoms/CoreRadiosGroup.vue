<template>
  <fieldset class="flex items-center">
    <legend v-if="label">{{ label }}</legend>
    <div v-for="(option, index) in options" :key="index" class="mt-2 mr-2">
      <input
        name="status"
        type="radio"
        :value="option.value"
        :checked="option.value === value"
        @change="updateValue"
      />
      <label :for="option.text.toLowerCase()" class="text-gray-900 ml-2">{{
        option.text
      }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  model: {
    event: "change",
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null,
    },
    options: {
      type: [Array],
      required: true,
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
