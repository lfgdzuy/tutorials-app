<template>
  <div>
    <tutorial-form
      action="create"
      title="Nuevo Tutorial"
      @newCreated="newTutorial = false"
      v-if="newTutorial"
    ></tutorial-form>
    <create-success v-else @addOther="newTutorial = true"></create-success>
  </div>
</template>

<script>
import TutorialForm from "@/components/organisms/tutorial/Form.vue";
import CreateSuccess from "@/components/organisms/tutorial/CreateSuccess.vue";
export default {
  name: "NewTutorial",
  components: { TutorialForm, CreateSuccess },
  data() {
    return {
      newTutorial: true,
    };
  },
};
</script>

<style></style>
