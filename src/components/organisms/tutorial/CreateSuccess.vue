<template>
  <div class="">
    <core-card description="El tutorial se agregó correctamente">
      <template v-slot:footer>
        <p class="mt-2 text-gray-600">
          <core-button base-color="green" @click="$emit('addOther')"
            >Agregar otro</core-button
          >
        </p>
      </template>
    </core-card>
  </div>
</template>

<script>
import CoreCard from "@/components/atoms/CoreCard.vue";
import CoreButton from "@/components/atoms/CoreButton.vue";
export default {
  components: { CoreCard, CoreButton },
};
</script>

<style></style>
