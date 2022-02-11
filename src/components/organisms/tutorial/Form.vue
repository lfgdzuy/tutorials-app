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
              v-model="form.title"
            ></core-input>
          </div>
          <div>
            <core-input
              type="text"
              label="Descripción"
              placeholder="Ingrese la descripción del tutorial aquí"
              v-model="form.description"
            ></core-input>
          </div>

          <div class="flex mt-2">
            <core-radios-group
              label="Cómo quiere mantener el tutorial?"
              :options="statusOptions"
              v-model="form.published"
            ></core-radios-group>
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
import CoreRadiosGroup from "@/components/atoms/CoreRadiosGroup.vue";
import CoreButton from "@/components/atoms/CoreButton.vue";
import tutorialsService from "@/services/tutorials";
import { TrashIcon } from "@heroicons/vue/solid";

export default {
  name: "TutorialForm",
  components: { CoreCard, CoreInput, CoreRadiosGroup, CoreButton, TrashIcon },
  props: {
    title: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: null,
    },
    tutorial: null,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        published: false,
        video_url: "",
      },
      statusOptions: [
        {
          value: false,
          text: "Oculto",
        },
        {
          value: true,
          text: "Público",
        },
      ],
    };
  },
  methods: {
    createTutorial() {
      this.form.published = this.form.published === "true";
      tutorialsService.create(this.form).then((res) => {
        console.log("Tutorial has been created:", res.data);
        this.$emit("newCreated");
      });
    },
    updateTutorial() {
      this.form.published = this.form.published === "true";
      tutorialsService.update(this.form).then((res) => {
        console.log("Tutorial has been updated:", res.data);
      });
    },
    deleteTutorial() {
      tutorialsService.delete(this.tutorial.id).then((res) => {
        console.log("Tutorial has been deleted:", res.data);
      });
    },
  },
  mounted() {
    this.form = this.tutorial;
  },
};
</script>

<style></style>
