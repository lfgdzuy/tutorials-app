<template>
  <nav class="bg-white shadow px-12">
    <div class="container mx-auto md:flex">
      <div class="flex items-center justify-between">
        <div>
          <a
            class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700"
            href="#"
            >Tutos.com</a
          >
        </div>
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="w-full md:flex md:items-center md:justify-between">
        <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
          <a
            href="#"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >Tutoriales</a
          >
          <a
            href="/tutorials/new"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >Agregar</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style></style>
