<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import '~/assets/css/style.css'

const title = 'Kampus Hybernská | Projekty'
const description = 'Projekty pro studenty vysokých škol.'
const ogImage = 'jagu-template-og-image.png'

useSEOHead({
  title,
  description,
  ogImage
})

</script>
