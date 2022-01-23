<template>
  <div class="container">
    <MyHeader />
    <MyNav />
    <br><br>
    <img src="./assets/issue/hot01.jpg">
    <img src="./assets/issue/hot01.jpg">
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyNav from '@/components/MyNav.vue'
import { provide } from 'vue'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyNav
  },
  setup() {
    const menus = [
      { 
        key: 'MInfo',
        label: '진료안내',
        sub: [
          {
            key: 'MD/D',
            label: '진료과/의료진',
            link: ['본원', '어린이병원', '암병원']
          },
          {
            key: 'OMA',
            label: '인터넷 진료예약',
            link: []
          },
          {
            key: 'RC/C',
            label: '예약확인/취소',
            link: ['진료예약확인', '검진예약확인', '진료이력조회']
          },
          {
            key: 'OTI',
            label: '외래진료안내',
            link: ['예약안내', '진료안내', '심층진찰안내', '대리처방안내', '비급여 진료비용', '지역채혈안내', '진료비 하이패스', '진료안내 FAQ']
          },
          {
            key: 'EMC',
            label: '응급의료센터',
            link: []
          },
          { 
            key: 'A/DI',
            label: '입/퇴원안내',
            link: ['입원절차', '퇴원절차', '입원생활안내', '입/퇴원절차 FAQ']
          },
          { 
            key: 'H/NG',
            label: '가정간호안내',
            link: ['가정간호 소개', '가정간호 내용', '가정간호 이용안내', '가정간호 FAQ']
          },
          {
            key: 'PHCR',
            label: '공단건강검진예약',
            link: []
          }
        ]
      },
      {
        key: 'IUse',
        label: '이용안내',
        sub: []
      },
      {
        key: 'HInfo',
        label: '건강정보',
        sub: []
      },
      {
        key: 'CEngage',
        label: '고객참여',
        sub: []
      },
      {
        key: 'HIntro',
        label: '병원소개',
        sub: []
      }
    ]

    provide('menus', menus)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto+Condensed:wght@700&family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

:root {
  --white: #fff;
  --black: #000;
  --primary: #008ace;
  --secondary: #2763ba;
  --third: #2ca48f;
  --forth:  #3298b7;
  --fifth: #627ad0;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  font: inherit;
  color: inherit;
  list-style: none;
  letter-spacing: 0.05em;
}

html {
  font-size: 62.5%;
  overflow-y: scroll;
  font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
}

.container {
  display: grid;
  margin: 0 auto;
}
</style>
