<template>
  <div class="container mx-auto pt-10">
    <div class="p-8 bg-black text-white rounded-3xl sm:flex items-center justify-between mb-8">
      <h2 class="mb-0">Seznam projektů</h2>
      <NuxtLink class="bg-white text-black py-2 px-4 h-min rounded-full" to="/projekty/pridat">Přidat projekt</NuxtLink>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 w-fit gap-4 mx-auto">
      <NuxtLink v-for="project in projects" :key="project.id" :to="`projekty/${project.id}`" class="w-full max-h-80 relative overflow-hidden rounded-xl">
        <img class="w-full object-cover object-top" :src="project.image">
        <div class="flex justify-between absolute bottom-0 left-0 bg-black w-full min-h-1/4 text-white p-2 z-20">
          <div class="flex flex-col">
            <p>{{ project.name }}</p>
            <p>{{ project.creator }}</p>
          </div>
          <div class="text-right">
            <p>{{ project.state }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Project {
  id: number,
  name: string,
  creator: string,
  state: string,
  image: string
}

const { data } = await useFetch<Project[]>('/api/projects')

const projects = data.value
</script>

<style lang="scss" scoped>

</style>
