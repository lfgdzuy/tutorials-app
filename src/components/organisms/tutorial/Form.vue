<template>
  <core-card :title="title" :action-icon="action">
    <template v-slot:header-action>
      <core-icon
        v-if="action === 'edit'"
        @click="deleteTutorial"
        icon="trash"
      ></core-icon>
    </template>
    <template v-slot:body>
      <form>
        <div class="grid grid-cols-1 gap-6 mt-4">
          <div>
            <core-input
              type="text"
              label="Título"
              placeholder="Ingrese el títuto del tutorial aquí"
              :value="tutorial ? tutorial.name : ''"
            ></core-input>
          </div>

          <div>
            <core-input
              type="text"
              label="Descripción"
              placeholder="Ingrese la descripción del tutorial aquí"
              :value="tutorial ? tutorial.description : ''"
            ></core-input>
          </div>

          <div class="flex flex-col items-start">
            <p class="font-bold">Cómo quiere mantener el tutorial?</p>
            <div class="flex mt-2">
              <core-radio type="radio" label="Oculto" id="status"></core-radio>
              <core-radio
                type="radio"
                label="Público"
                id="status"
                class="ml-4"
              ></core-radio>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <core-button
            v-if="action === 'create'"
            class="font-bold"
            @click="createTutorial"
            >Crear</core-button
          >
          <core-button v-else @click="updateTutorial">Guardar</core-button>
        </div>
      </form>
    </template>
  </core-card>
</template>

<script>
import CoreCard from "@/components/atoms/CoreCard.vue";
import CoreIcon from "@/components/atoms/CoreIcon.vue";
import CoreInput from "@/components/atoms/CoreInput.vue";
import CoreRadio from "@/components/atoms/CoreRadio.vue";
import CoreButton from "@/components/atoms/CoreButton.vue";

export default {
  name: "TutorialForm",
  components: { CoreCard, CoreIcon, CoreInput, CoreRadio, CoreButton },
  props: {
    title: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: null,
    },
    tutorial: {
      type: {},
      default: null,
    },
  },
  methods: {
    createTutorial() {},
    updateTutorial() {},
    deleteTutorial() {},
  },
};
</script>

<style></style>
