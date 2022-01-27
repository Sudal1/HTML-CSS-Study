<template>
  <div id="nav" @mouseleave="isActive = false">

    <div class="nav-header">
      <button class="menu"><i class="material-icons">menu</i></button>
      <nav class="label">
        <ul v-for="menu in menus" :key="menu.key">
          <li @mouseover="isActive = true; activeMenu = menu.key">{{ menu.label }}</li>
        </ul>
      </nav>
      <button class="search"><i class="material-icons">search</i></button>
    </div>

    <div class="nav-dropdown" v-show="isActive">
      <div class="wrapper">

        <nav class="list">
          <div class="item" v-for="(sub, i) in dropdownMenus" :key="sub.key" :ref="el => { if (el) items[i] = el }">
            <div class="content">
              <h2>{{ sub.label }}</h2>
              <ul v-for="link in sub.link" :key="link">
                <li>{{ link }}</li>
              </ul>
            </div>
          </div>
        </nav>

        <nav class="shortcut">
          <ul class="imgs">
            <li><img src="../assets/shortcut.png"></li>
            <li><img src="../assets/shortcut02.png"></li>
          </ul>
          <div class="btns">
            <button>인터넷 진료예약</button>
            <button>예약확인 / 취소</button>
          </div>
          <span class="phone">대표전화 <em>1588 - 5700</em></span>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
import { inject, ref, computed, watchEffect, onBeforeUpdate } from 'vue'

export default {
  name: 'navigation',
  setup() {
    const menus = inject('menus')

    const items = ref([])
    const isActive = ref(false)
    const activeMenu = ref(null)
    const dropdownMenus = computed(() => menus.find(menu => menu.key === activeMenu.value)?.sub)

    function resizeGridItem(item) {
      const grid = document.getElementsByClassName('list')[0];
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('row-gap'));
      const rowSpan = Math.ceil((item.querySelector('.content')?.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = 'span ' + rowSpan;
    }

    function resizeAllGridItems() {
      for (let x = 0; x < items.value.length; x++) {
        resizeGridItem(items.value[x]);
      }
    }

    const toggleIsActive = () => {
      isActive.value != isActive.value
    }

    window.addEventListener('resize', resizeAllGridItems)

    onBeforeUpdate(() => { items.value = [] })

    watchEffect(() => {
      if (dropdownMenus.value?.length) { resizeAllGridItems() }
    })

    return { menus, items, isActive, activeMenu, dropdownMenus }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 110rem) 1fr;
  grid-template-rows: minmax(7.2rem, 1fr) 1fr;
  position: sticky;
  top: 0rem;
  height: 7.2rem;
  z-index: 10;
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
        grid-auto-rows: 1.0rem;
        grid-column: 1 / 2;
        row-gap: 0rem;
        padding: 2.0rem;
        line-height: 3.6rem;
        border-right: 1px solid #ddd;

        .item {
          margin-left: 5.0rem;
        }

        div > h2 {
          font-size: 1.6rem;
          font-weight: bold;
          letter-spacing: 0.01em;
        }

        ul > li {
          font-size: 1.4rem;
          color: rgb(110, 110, 110);
        }
      }

      .shortcut {
        display: inherit;
        grid-template-rows: repeat(auto-fit, minmax(0, auto));
        grid-column: 2 / 3;
        place-items: center center;
        padding: 4.0rem 4.0rem 2.0rem 4.0rem;
        font-size: 1.4rem;

        .imgs img {
          width: 36.0rem;
          margin-bottom: 1.6rem;
        }

        .btns {
          width: 100%;
          height: 4.0rem;
          display: inherit;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 1.0rem;
          margin-bottom: 1.6rem;

          button {
            border: 1px solid #ddd;
            font-weight: bold;
          }

          button:first-child {
            grid-column: 1 / 2;
            color: var(--white);
            background: var(--secondary);
          }

          button:last-child {
            color: var(--secondary);
            background: var(--white);
          }
        }

        .phone {
          align-self: center;
          justify-self: start;
          color: rgb(110, 110, 110);

          em {
            color: var(--black);
            font-size: 2.4rem;
            font-weight: bold;
          }
        }
      }
    }

  }
}
</style>