<template>
  <div class="container mx-auto pt-10">
    <div class="mx-auto w-96 max-w-full p-8 bg-black text-white rounded-3xl my-8">
      <h2>Přidat projekt</h2>
      <div class="flex flex-col gap-3">
        <input placeholder="Zadavatel" class="py-2 px-4 rounded-full w-96 max-w-full" v-model="creator" type="text" />
        <input placeholder="Název" class="py-2 px-4 rounded-full w-96 max-w-full" v-model="name" type="text" />
        <textarea placeholder="Popis" class="py-2 px-4 rounded-xl w-96 max-w-full" v-model="description" type="text" />
        <input placeholder="Adresa obrázku" class="py-2 px-4 rounded-full w-96 max-w-full" v-model="name" type="text" />
        <select class="text-black py-2 px-4 rounded-full w-96 max-w-full" v-model="state">
          <option disabled selected value="">Vyberte stav projektu</option>
          <option :value="States.TOBE">{{ States.TOBE }}</option>
          <option :value="States.RUNNING">{{ States.RUNNING }}</option>
          <option :value="States.DONE">{{ States.DONE }}</option>
        </select>
        <div class="bg-green-600 text-white py-2 px-4 w-96 max-w-full rounded-full text-center">Přidat projekt</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
enum States {
  DONE = "Dokončený",
  TOBE = "Čeká na schválení",
  RUNNING = "Probíhající"
}

const creator = ref('')
const name = ref('')
const description = ref('')
const state = ref('')
</script>