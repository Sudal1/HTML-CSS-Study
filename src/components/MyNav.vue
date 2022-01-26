<template>
  <div id="nav">

    <div class="nav-header">
      <button class="menu"><i class="material-icons">menu</i></button>
      <nav class="label">
        <ul v-for="menu in menus" :key="menu.key">
          <li @mouseover="isActive = true; activeMenu = menu.key">{{ menu.label }}</li>
        </ul>
      </nav>
      <button class="search"><i class="material-icons">search</i></button>
    </div>

    <div class="nav-dropdown" v-if="isActive">
      <div class="wrapper">
        <nav class="list">
          <ul v-for="sub in dropdownMenus" :key="sub.key" class="label">
            <li>{{ sub.label }}</li>
            <ul v-for="link in sub.link" :key="link" class="link">
              <li>{{ link }}</li>
            </ul>
          </ul>
        </nav>
        <nav class="shortcut">
          <ul class="imgs">
            <li><img src="../assets/health/health02.jpg"></li>
            <li><img src="../assets/health/health03.jpg"></li>
          </ul>
          <div class="btns">
            <button>인터넷 진료예약</button>
            <button>예약확인 / 취소</button>
          </div>
          <span class="phone">대표전화<em>1588 - 5700</em></span>
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

  .nav-header {
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

  .nav-dropdown {
    display: inherit;
    grid-template-columns: 1fr minmax(auto, 110rem) 1fr;
    grid-row: 2 / 3;
    grid-column: 1 / 4;
    background: var(--white);
    border-top: 1px solid #ddd;
    border-bottom: 2px solid var(--secondary);

    .wrapper {
      display: inherit;
      grid-template-columns: 3fr 2fr;
      grid-column: 2 / 3;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;

      .list {
        display: inherit;
        grid-template-columns: repeat(3, 1fr);
        grid-column: 1 / 2;
        gap: 1.0rem;
        padding: 2.0rem 4.0rem 2.0rem 4.0rem;
        line-height: 3.0rem;
        border-right: 1px solid #ddd;
      }

      .list > ul > li {
        margin-bottom: 0.8rem;
        font-size: 1.6rem;
        font-weight: bold;
        letter-spacing: 0.01em;
      }

      .list > ul > ul > li {
        font-size: 1.4rem;
        color: rgb(110, 110, 110);
      }

      .shortcut {
        display: inherit;
        grid-template-rows: repeat(auto-fill, minmax(0, auto));
        grid-column: 2 / 3;
        place-items: center center;
        padding: 4.0rem 0 4.0rem 0;

        .imgs img {
          width: 30.0rem;
          height: 8.0rem;
          margin-bottom: 1.0rem;
        }

        .btns {
          display: inherit;
          grid-template-columns: repeat(auto-fit, auto);
        }
        .btns:first-child {
          justify-items: start;
        }
      }
    }

  }
}
</style>