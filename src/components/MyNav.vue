<template>
  <div id="nav">

    <div class="nav-wrapper">
      <button class="menu"><i class="material-icons">menu</i></button>
      <nav class="label">
        <ul v-for="menu in menus" :key="menu.key">
          <li @mouseover="isActive = true; activeMenu = menu.key">{{ menu.label }}</li>
        </ul>
      </nav>
      <button class="search"><i class="material-icons">search</i></button>
    </div>

    <div class="dropdown" v-show="isActive">
      <div class="content">
        <nav>
          <ul v-for="sub in dropdownMenus" :key="sub.key">
            <li>{{ sub.label }}</li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, inject, ref } from 'vue'

export default {
  name: 'navigation',
  setup() {
    const menus = inject('menus')

    const isActive = ref(false)
    const activeMenu = ref(null)
    const dropdownMenus = computed(() => menus.find(menu => menu.key === activeMenu.value)?.sub)

    return { menus, isActive, activeMenu, dropdownMenus }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 110rem) 1fr;
  grid-template-rows: minmax(6.4rem, auto) 1fr;
  position: sticky;
  top: -0.1rem;
  height: 6.4rem;
  background: var(--white);
  border-bottom: 1px solid #ddd;

  .nav-wrapper {
    display: inherit;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    grid-template-columns: 2fr 7fr 2fr;
    align-items: center;

    .menu {
      grid-column: 1 / 2;
      justify-self: start;
    }

    .label {
      display: inherit;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
      font-weight: bold;
      font-size: 1.8rem;
    }

    .search {
      grid-column: 3 / 4;
      justify-self: end;
    }
  }

  .dropdown {
    display: inherit;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    z-index: 1;
    background: var(--white);
    border: 1px solid #ddd;
  }
}



</style>