<template>
  <div>
    <tutorial-form
      v-if="tutorial !== null"
      action="edit"
      title="Editar Tutorial"
      :tutorial="tutorial"
    ></tutorial-form>
  </div>
</template>

<script>
import TutorialForm from "@/components/organisms/tutorial/Form.vue";
import tutorialsService from "@/services/tutorials";

export default {
  name: "EditTutorial",
  components: { TutorialForm },
  data() {
    return {
      tutorial: null,
    };
  },
  created() {
    this.getTutorial();
  },
  methods: {
    getTutorial() {
      const tutorialId = this.$route.params.id;
      return tutorialsService.get(tutorialId).then((res) => {
        this.tutorial = res.data;
      });
    },
  },
};
</script>

<style></style>
