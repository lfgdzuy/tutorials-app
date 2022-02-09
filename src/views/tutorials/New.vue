<template>
  <div>
    <tutorial-form action="create" title="Nuevo Tutorial"></tutorial-form>
  </div>
</template>

<script>
import TutorialForm from "@/components/organisms/tutorial/Form.vue";
export default {
  name: "NewTutorial",
  components: { TutorialForm },
};
</script>

<style></style>
