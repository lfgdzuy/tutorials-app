<template>
  <core-card :title="title" :action-icon="action">
    <template v-slot:header-action>
      <TrashIcon
        class="h-6 w-6 text-red-600 cursor-pointer"
        @click="deleteTutorial"
      />
    </template>
    <template v-slot:body>
      <form
        @submit.prevent="
          action == 'create' ? createTutorial() : updateTutorial()
        "
      >
        <div class="grid grid-cols-1 gap-6 mt-4">
          <div>
            <core-input
              type="text"
              label="Título"
              placeholder="Ingrese el títuto del tutorial aquí"
              v-model="tutorial.title"
            ></core-input>
          </div>
          <div>
            <core-input
              type="text"
              label="Descripción"
              placeholder="Ingrese la descripción del tutorial aquí"
              v-model="tutorial.description"
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
          <core-button>{{
            action === "create" ? "Crear" : "Guardar"
          }}</core-button>
        </div>
      </form>
    </template>
  </core-card>
</template>

<script>
import CoreCard from "@/components/atoms/CoreCard.vue";
import CoreInput from "@/components/atoms/CoreInput.vue";
import CoreRadio from "@/components/atoms/CoreRadio.vue";
import CoreButton from "@/components/atoms/CoreButton.vue";
import tutorialsService from "@/services/tutorials";
import { TrashIcon } from "@heroicons/vue/solid";

export default {
  name: "TutorialForm",
  components: { CoreCard, CoreInput, CoreRadio, CoreButton, TrashIcon },
  props: {
    title: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      tutorial: {
        title: "",
        description: "",
        published: false,
        videoUrl: "",
      },
    };
  },
  methods: {
    createTutorial() {
      tutorialsService.create(this.tutorial).then((res) => {
        console.log("Tutorial has been created:", res.data);
        this.$emit("newCreated");
      });
    },
    updateTutorial() {
      tutorialsService.update(this.tutorial).then((res) => {
        console.log("Tutorial has been updated:", res.data);
      });
    },
    deleteTutorial() {
      tutorialsService.delete(this.tutorial.id).then((res) => {
        console.log("Tutorial has been deleted:", res.data);
      });
    },
  },
};
</script>

<style></style>
