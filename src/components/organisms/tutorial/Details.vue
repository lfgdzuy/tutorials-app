<template>
  <div class="flex flex-col items-start">
    <p class="py-2"><strong>Títitulo:</strong> {{ tutorial.title }}</p>
    <p class="py-2"><strong>Descripción:</strong> {{ tutorial.description }}</p>
    <p class="py-2">
      <strong>Estado:</strong> {{ tutorial.status ? "Público" : "Oculto" }}
    </p>
    <core-button class="mt-2" @click="goToEdit">Editar</core-button>
  </div>
</template>
<script>
import CoreButton from "@/components/atoms/CoreButton.vue";
import { useRouter } from "vue-router";

export default {
  name: "TutorialDetails",
  components: {
    CoreButton,
  },
  props: ["tutorial"],
  setup(props) {
    const router = useRouter();
    function goToEdit() {
      router.push({
        path: `/tutorials/edit/${props.tutorial.id}`,
      });
    }

    return { goToEdit };
  },
};
</script>

<style></style>
