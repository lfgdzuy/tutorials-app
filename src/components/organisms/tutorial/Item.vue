<template>
  <div class="mt-2 w-full">
    <core-card>
      <template v-slot:body>
        <span class="block text-left">{{ tutorial.title }}</span>
      </template>
    </core-card>
  </div>
</template>

<script>
import CoreCard from "@/components/atoms/CoreCard.vue";

export default {
  name: "TutorialItem",
  components: {
    CoreCard,
  },
  props: ["tutorial"],
};
</script>

<style></style>
