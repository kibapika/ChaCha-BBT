<script setup>
// import specialTea from '../assets/specialTea.jpg'
import specialTea2 from '../assets/specialTea2.jpg'
import fruitTea from '../assets/fruitTea.jpg'
import milkTea from '../assets/milkTea.jpg'
</script>

<template>
  <div id="teaSecdiv">
    <h1 id="milkTeaTitle">Delicious Tea</h1>
    <div class="marquee">
      <div class="marquee-content">
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
      </div>
      <div class="marquee-content">
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
        <span class="wavy">&nbsp;</span>
        <span class="wavy">Y</span>
        <span class="wavy">U</span>
        <span class="wavy">M</span>
      </div>
    </div>
    <div id="milkSec">
      <section class="milkTeaBtn">
        <router-link to="/menu">
          <img alt="milkTeaPic" :src="milkTea" />
          <h1 class="teasH1">Milk Teas</h1>
        </router-link>
      </section>
      <section class="milkTeaBtn">
        <router-link to="/menu">
          <img alt="fruitTeaPic" :src="fruitTea" />
          <h1 class="teasH1">Fruit Teas</h1>
        </router-link>
      </section>
      <section class="milkTeaBtn">
        <router-link to="/menu">
          <img alt="specialTeaPic" :src="specialTea2" />
          <h1 class="teasH1">SpecialTeas</h1>
        </router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
#teaSecdiv {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100dvh;
}

#milkTeaTitle {
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
}

#milkSec {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.milkTeaBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.milkTeaBtn,
.milkTeaBtn img {
  position: relative;
}

.milkTeaBtn img {
  width: 225px;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition: transform 0.3s;
}

.milkTeaBtn img:hover {
  transform: scale(1.05);
}

.teasH1 {
  width: 80%;
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  position: absolute;
  top: 89%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 25px;
  background-color: #ccc7b9;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
}

.marquee-content span {
  display: inline-block;
  font-size: 10rem;
  opacity: 30%;
  font-weight: bold;
  animation: wave 3s ease-in-out infinite;
  animation-delay: calc(0.2s * var(--i));
}

.marquee-content:nth-child(2) {
  animation-delay: 0s;
}

.wavy:nth-child(1) {
  --i: 1;
}
.wavy:nth-child(2) {
  --i: 2;
}
.wavy:nth-child(3) {
  --i: 3;
}
.wavy:nth-child(4) {
  --i: 4;
}
.wavy:nth-child(5) {
  --i: 5;
}
.wavy:nth-child(6) {
  --i: 6;
}
.wavy:nth-child(7) {
  --i: 7;
}
.wavy:nth-child(8) {
  --i: 8;
}
.wavy:nth-child(9) {
  --i: 9;
}
.wavy:nth-child(10) {
  --i: 10;
}
.wavy:nth-child(11) {
  --i: 11;
}
.wavy:nth-child(12) {
  --i: 12;
}
.wavy:nth-child(13) {
  --i: 13;
}
.wavy:nth-child(14) {
  --i: 14;
}
.wavy:nth-child(15) {
  --i: 15;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-60px);
  }
}
</style>
