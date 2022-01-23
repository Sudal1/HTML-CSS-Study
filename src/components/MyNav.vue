<template>
  <div id="nav">

    <div class="nav-wrapper">
      <button class="menu"><i class="material-icons">menu</i></button>
      <nav class="label">
        <ul v-for="menu in menus" :key="menu.key" class="list">
          <li>{{ menu.label }}</li>
        </ul>
      </nav>
      <button class="search"><i class="material-icons">search</i></button>
    </div>

  </div>
</template>

<script>
import { inject } from "vue"

export default {
  name: 'navigation',
  setup() {
    const menus = inject('menus')

    return { menus }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 110rem) 1fr;
  position: sticky;
  top: -0.1rem;
  height: 6.4rem;
  background: var(--white);
  border-bottom: 1px solid #ddd;

  .nav-wrapper {
    display: inherit;
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
}

</style>