<template>
  <div class="container mx-auto pt-10">
    <h2>{{ project?.name }}</h2>
    <div class="flex gap-10">
      <div>
        <section class="py-10">
          <h3>O projektu</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at justo id ex faucibus viverra. Aenean consectetur massa at ultrices pellentesque. Nam id erat erat. Fusce a maximus risus. Duis mi neque, rutrum sit amet magna nec, convallis sagittis felis. Pellentesque mi tellus, aliquet vitae euismod in, vehicula in dui. Donec eu leo ligula. Suspendisse vitae diam ullamcorper, fermentum tortor et, egestas purus. Aenean ultricies arcu a pretium porta. Sed hendrerit nibh a pretium tristique. Duis eget odio ut purus congue gravida.
          </p>
        </section>
        <section class="py-10">
          <h3>Průběh</h3>
          <p>
            Suspendisse dignissim diam quis ligula varius hendrerit. Proin ante mauris, blandit eget interdum nec, vestibulum ac metus. Duis in ante efficitur diam euismod sagittis. In at purus magna. Donec sit amet purus erat. Quisque ultrices accumsan eros, id tristique eros congue vitae. Proin ut ante non elit pretium tempor et et ex.
          </p>
        </section>
        <section class="py-10">
          <h3>Výsledky</h3>
          <p>
            Donec cursus lobortis augue non facilisis. Vivamus arcu ex, venenatis vitae tristique vel, pharetra vitae nisl. Pellentesque vel mauris quis ex tristique mattis. Aenean viverra mi ac urna mollis dapibus. Aenean id egestas dolor. Phasellus vitae congue turpis. Morbi tincidunt massa et diam euismod ullamcorper. Donec sagittis volutpat elit id tempus. Suspendisse id ex non lectus auctor porttitor.
          </p>
        </section>
      </div>
      <div class="bg-black text-white p-4 rounded-3xl h-fit">
        <h3>Účastníci</h3>
        <div>
          <img class="rounded-xl mb-2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80">
          <div class="flex items-end">
            <p class="leading-5 font-medium">
              Radka Havranová
            </p>
            <p>ČZU</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()

const { data: project } = await useFetch(`/api/projects/${route.params.id}`)

</script>

<style lang="scss" scoped>

</style>
