<template>
  <div class="home">

    <div class="slider">
      <transition-group name="slide">
        <div class="slider-img" v-for="i in [page]" :key="i" :style="{ backgroundImage: `url(${require('@/assets/slider/' + curImage)})` }"></div>
      </transition-group>
      <button class="prev" @click="prev"><i class="material-icons">arrow_back_ios_new</i></button>
      <button class="next" @click="next"><i class="material-icons">arrow_forward_ios</i></button>
    </div>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    let timer = null
    const images = [
      'slider0.jpg',
      'slider1.jpg',
      'slider2.jpg',
      'slider3.jpg',
      'slider4.jpg',
      'slider5.jpg'
    ]
    const page = ref(0)
    const curImage = computed(() => images[Math.abs(page.value) % images.length])

    const startSlider = () => {
      timer = setInterval(next, 10000)
    }

    const next = () => {
      page.value += 1
    }

    const prev = () => {
      page.value -= 1
    }

    onMounted(() => startSlider())

    return { page, curImage, prev, next }
  }
}
</script>

 <style lang="scss" scoped>
.home {
  display: grid;
  grid-auto-rows: auto;

  .slider {
    display: inherit;
    grid-template-columns: 1fr minmax(auto, 130rem) 1fr;
    grid-row: 1 / 2;
    height: 46.0rem;

    .slider-img:nth-child(1) {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
      background-size: 100% 46.0rem;
    }

    .slider-img:nth-child(2) {
      grid-row: 1 / 3;
      grid-column: 3 / 4;
      width: 130rem;
      background-size: 130rem 46.0rem;
    }
  }

  button {
    color: var(--white);
    z-index: 1;
  }

  button:first-child {

  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 2.0s ease;
}

.slide-enter-to {
  transform: translateX(-200%);
}

.slide-leave-to {
  transform: translateX(-200%);
}
 </style>