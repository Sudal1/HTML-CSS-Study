<template>
  <div class="home">
    <transition-group name="slide" tag="div" class="slider">
      <div
        class="image"
        v-for="i in [page]"
        :key="i"
        :style="{ backgroundImage: `url(${require('@/assets/slider/' + curImage)})` }"
      ></div>
    </transition-group>
    <button class="prev" @click="prev"><i class="material-icons">arrow_back_ios_new</i></button>
    <button class="next" @click="next"><i class="material-icons">arrow_forward_ios</i></button>
  </div>
</template>

<script>
import {  ref, computed, onMounted } from 'vue'

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
  .slider {
    overflow: hidden;
    width: 100%;
    height: 46.0rem;

    .image {
      position: absolute;
      top: 12.4rem;
      width: 100%;
      height: 46.0rem;
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
  transition: all 1.0s ease;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
 </style>