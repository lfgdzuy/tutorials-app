<template>
  <div class="flex flex-col items-center">
    <div
      class="w-full flex flex-col items-start"
      v-if="searchTerm.trim() !== '' && tutorials.length > 0"
    >
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Buscar"
          v-model="searchTerm"
          @change="searchTutorials"
        />
      </div>
      <core-button
        v-if="searchTerm !== ''"
        class="mt-4"
        @click="
          searchTerm = '';
          searchTutorials();
        "
        >Limpiar búsqueda</core-button
      >
    </div>
    <div class="w-full">
      <tutorials-empty-state
        v-if="searchTerm === '' && tutorials.length === 0"
      ></tutorials-empty-state>
      <tutorials-list
        v-else-if="tutorials.length > 0"
        :tutorials="tutorials"
        class="mt-6"
      ></tutorials-list>
      <tutorials-zero-results
        v-else
        :search-term="searchTerm"
      ></tutorials-zero-results>
    </div>
  </div>
</template>

<script>
import TutorialsEmptyState from "@/components/organisms/tutorial/EmptyState.vue";
import TutorialsZeroResults from "@/components/organisms/tutorial/ZeroResults.vue";
import TutorialsList from "@/components/organisms/tutorial/List.vue";
import CoreButton from "@/components/atoms/CoreButton.vue";
import tutorialsService from "@/services/tutorials";

export default {
  name: "TutorialsIndex",
  components: {
    TutorialsEmptyState,
    TutorialsZeroResults,
    TutorialsList,
    CoreButton,
  },
  data() {
    return {
      searchTerm: "",
      tutorials: [],
    };
  },
  methods: {
    searchTutorials() {
      console.log("perform search! >>> ", this.searchTerm);
      tutorialsService.find(this.searchTerm).then((res) => {
        this.tutorials = res.data;
      });
    },
  },
  mounted() {
    // this.searchTutorials();
  },
};
</script>

<style></style>
