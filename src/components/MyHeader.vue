<template>
  <div id="header">

    <div class="header-wrapper">

        <img src="../assets/logo01.png" id="logo">
        <img src="../assets/title01.png" id="title">

        <ul class="header-nav">
          <li>원격</li>
          <li>로그인</li>
          <li>회원가입</li>
          <li><button>Language <i class="material-icons">expand_circle_down</i></button></li>
        </ul>

    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
#header {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 110rem) 1fr;
  height: 6.0rem;
  background: var(--white);
  border-bottom: 1px solid rgb(233, 233, 233);
  
  .header-wrapper {
    display: inherit;
    grid-column: 2 / 3;
    grid-template-columns: 1fr 3fr auto;
    align-items: center;

    #logo {
      grid-column: 1 / 2;
    }

    #title {
      grid-column: 2 / 3;
      justify-self: center;
    }

    .header-nav {
      display: grid;
      grid-column: 3 / 4;
      grid-template-columns: repeat(4, auto);
      column-gap: 1.4rem;
      justify-items: end;
      align-items: center;
      font-size: 1.4rem;

      i {
        position: relative;
        top: 0.15rem;
        font-size: 1.4rem;
        color: var(--black);
      }
    }
  }
}
</style>