<template>
  <div class="flex">
    <div class="flex flex-col w-1/2 pr-2">
      <h2 class="text-left text-3xl font-bold pb-2 border-b-2 mb-2">
        Tutoriales
      </h2>
      <tutorial-item
        v-for="(tutorial, index) in tutorials"
        :key="index"
        :tutorial="tutorial"
        @click="selectTutorial(index)"
        class="self-start"
      ></tutorial-item>
      <core-button class="self-start mt-4">Eliminar todos</core-button>
    </div>
    <div class="flex flex-col w-1/2 pl-2">
      <h2 class="text-left text-3xl font-bold pb-2 border-b-2 mb-2">
        Tutorial
      </h2>
      <tutorial-details
        v-if="selectedTutorial"
        :tutorial="selectedTutorial"
      ></tutorial-details>
    </div>
  </div>
</template>
<script>
import TutorialItem from "@/components/organisms/tutorial/Item.vue";
import TutorialDetails from "@/components/organisms/tutorial/Details.vue";
import CoreButton from "@/components/atoms/CoreButton.vue";

export default {
  name: "TutorialsList",
  components: {
    TutorialItem,
    TutorialDetails,
    CoreButton,
  },
  props: ["tutorials"],
  data() {
    return {
      selectedTutorial: null,
    };
  },
  methods: {
    selectTutorial(index) {
      this.selectedTutorial = this.tutorials[index];
    },
  },
};
</script>

<style></style>
