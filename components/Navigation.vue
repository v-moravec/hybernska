<template>
  <div>
    <div class="container mx-auto">
      <div>
        <div
            class="max-h-14 flex items-center justify-between z-10 p-8 pt-12 rounded-xl"
        >
          <NuxtLink
              class="animate-slide-down logo group"
              style="display: flex; align-items: center"
              :to="{path: '/'}"
          >
            <img class="w-12" src="~assets/svg/hybernska-logo.svg">
          </NuxtLink>
          <div class="hidden md:flex">
            <NuxtLink
                v-for="link in links"
                :key="link.hash"
                ref="linksRef"
                class="nav-link group transition duration-300"
                :to="{path: link.path, hash: link.hash}"
            >
              {{ link.text }}
              <span :id="link.ref + 'Span'" class="relative -top-1.5 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            </NuxtLink>
          </div>
          <MenuIcon ref="menuIconRef" v-model="menu" class="z-10" />
        </div>
      </div>
    </div>
    <MobileNavigation v-model:menu="menu" />
  </div>
</template>

<script setup>
const menu = ref(false)

const links = [
  {
    path: '/projekty',
    text: 'Projekty',
    ref: 'projekty'
  },
  {
    path: '/prostory',
    text: 'Prostory',
    ref: 'prostory'
  },
  {
    path: '/zapojit-se',
    text: 'Zapojit se',
    ref: 'zapojit-se'
  },
]
</script>

<style lang="scss" scoped>

$n: 6;

.nav-link {
  animation: fade-in 1s ease-in-out forwards;
  opacity: 0;

  @for $x from 1 through ($n - 1) {
    &:nth-child(#{$x}) {
      animation-delay: ($n - $x) * 100ms;
    }
  }

  cursor: pointer;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

#nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  padding: 10px 0;
  justify-content: center;
  width: 100%;

  .nav-inner {
    border-radius: 25px;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    @apply text-jagu-orange hover:text-jagu-blue font-semibold
  }
}

.contact {
  background: var(--primary);
  padding: 4px 15px;
  color: white !important;
  border-radius: 24px;
  margin-right: 0 !important;

  &:hover {
    background: var(--blue);
  }
}

.logo-text {
  margin-right: 5px;

  @media (max-width: 1200px) {
    display: none;
  }
}

#logoTopBar {
  fill: #F89815;
  height: 25px;
  width: 40px;
}

.router-link-active {
  span {
    @apply max-w-full;
  }
}
</style>
