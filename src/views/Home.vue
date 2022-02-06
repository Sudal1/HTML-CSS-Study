<template>
  <div class="home">

    <div class="slider">
      <transition-group tag="div" class="imgs" :name="back ? 'slide-back' : 'slide'">
        <div v-for="num in [page]" :key="num">
          <img :src="`${require('@/assets/slider/' + curImage)}`">
        </div>
      </transition-group>
      <div class="btns">
        <button class="prev" @click="prev"><i class="material-icons">arrow_back_ios_new</i></button>
        <button class="next" @click="next"><i class="material-icons">arrow_forward_ios</i></button>
      </div>
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
    const back = ref(false)
    const curImage = computed(() => images[Math.abs(page.value) % images.length])

    const startSlider = () => {
      timer = setInterval(next, 10000)
    }

    const next = () => {
      back.value = false
      page.value += 1
    }

    const prev = () => {
      back.value = true
      page.value -= 1
    }

    onMounted(() => startSlider())

    return { page, back, curImage, prev, next }
  }
}
</script>

 <style lang="scss" scoped>
.home {
  display: grid;
  grid-auto-rows: auto;

  .slider {
    display: inherit;
    position: relative;
    grid-template-columns: 1fr minmax(auto, 8fr) 1fr;
    place-items: center;
    height: 46.0rem;
    
    .imgs {
      grid-column: 2 / 3;
      height: inherit;

      div, img {
        height: 46.0rem;
      }
    }

    .btns {
      display: inherit;
      position: absolute;
      grid-template-columns: repeat(2, 1fr);
      z-index: 1;
      width: 110rem;
      color: var(--white);

      button:first-child {
        justify-self: start;
      }

      button:last-child {
        justify-self: end;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active,
.slide-back-leave-active,
.slide-back-enter-active {
  transition: all 1s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}

.slide-back-enter-to {
  position: absolute;
  left: 0;
}

.slide-back-enter-from {
  position: absolute;
  left: -100%;
}

.slide-back-leave-to {
  position: absolute;
  right: -100%;
}

.slide-back-leave-from {
  position: absolute;
  right: 0;
}
 </style>