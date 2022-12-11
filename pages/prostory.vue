<template>
  <div class="container mx-auto pt-10">
    <div class="p-8 mb-8 bg-black text-white rounded-3xl">
      <h2>Prostory</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at justo id ex faucibus viverra. Aenean consectetur massa at ultrices pellentesque. Nam id erat erat. Fusce a maximus risus. Duis mi neque, rutrum sit amet magna nec, convallis sagittis felis. Pellentesque mi tellus, aliquet vitae euismod in, vehicula in dui. Donec eu leo ligula. Suspendisse vitae diam ullamcorper, fermentum tortor et, egestas purus. Aenean ultricies arcu a pretium porta. Sed hendrerit nibh a pretium tristique. Duis eget odio ut purus congue gravida.
      </p>
    </div>
    <div>
      <input class="bg-black text-white rounded-full w-72 mb-2 py-2 px-4" type="date"/>
      <div class="bg-green-600 text-white py-2 px-4 w-72 max-w-full rounded-full text-center">Rezervovat</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
</style>
