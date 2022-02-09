<template>
  <div class="">
    <core-card
      :description="`No se encontraron tutoriales con el término de búsqueda: ${searchTerm}`"
    >
      <template v-slot:footer>
        <p class="mt-2 text-gray-600">
          <router-link to="/new">Mostrar todos</router-link>
        </p>
      </template>
    </core-card>
  </div>
</template>

<script>
import CoreCard from "@/components/atoms/CoreCard.vue";
export default {
  name: "TutorialsZeroResults",
  components: { CoreCard },
  props: ["searchTerm"],
};
</script>

<style></style>
