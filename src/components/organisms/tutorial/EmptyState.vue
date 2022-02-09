<template>
  <div class="">
    <core-card description="No hay tutoriales aquí" class="py-8">
      <template v-slot:footer>
        <p class="mt-2 text-gray-600">
          Comencemos por
          <router-link
            to="/tutorials/new"
            class="text-green-600 underline font-bold"
            >agregar</router-link
          >
          uno
        </p>
      </template>
    </core-card>
  </div>
</template>

<script>
import CoreCard from "@/components/atoms/CoreCard.vue";
export default {
  name: "TutorialsEmptyState",
  components: { CoreCard },
};
</script>

<style></style>
