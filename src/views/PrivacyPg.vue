<script setup>
import { ref } from 'vue'
import privacySec from '../components/PrivacySec.vue'

const contact = 'inquiries@chachausa.com'

const paras = ref([
  {
    id: 1,
    privacyTitle: 'Update 1',
    privacyPara:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim expedita dicta recusandaeexcepturi ut? Veritatis laboriosam dolorum aliquam? Consectetur quidem nostrum voluptatem officiis optio blanditiis facere ratione magnam, dolore beatae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, accusamus. Vitae totam ducimus dicta nisi debitis sunt temporibus quas natus, cupiditate necessitatibus, deserunt doloribus. Ipsa quas rerum iusto numquam obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam a iusto molestias officia, quae nobis voluptatem rem cumque dolores, tenetur, ab ipsa? Quo enim impedit asperiores obcaecati blanditiis repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates nemo accusamus modi molestias repudiandae ipsam assumenda cupiditate ratione nobis unde reprehenderit, exercitationem deleniti laboriosam commodi est officiis cum praesentium?'
  },
  {
    id: 2,
    privacyTitle: 'Information',
    privacyPara:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus. Duis at tellus at urna condimentum mattis. Porttitor massa id neque aliquam. Mi quis hendrerit dolor magna eget est lorem. Viverra suspendisse potenti nullam ac tortor vitae. Laoreet suspendisse interdum consectetur libero id faucibus. Lobortis scelerisque fermentum dui faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus. Amet tellus cras adipiscing enim eu turpis egestas. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Ut pharetra sit amet aliquam.'
  },
  {
    id: 3,
    privacyTitle: 'Social Media',
    privacyPara:
      'Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Mauris nunc congue nisi vitae suscipit tellus mauris. Maecenas sed enim ut sem. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Euismod in pellentesque massa placerat duis ultricies. Sit amet nisl purus in mollis nunc sed. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Feugiat scelerisque varius morbi enim. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Bibendum enim facilisis gravida neque. Diam quis enim lobortis scelerisque fermentum dui faucibus. Amet nulla facilisi morbi tempus iaculis urna. Ac turpis egestas integer eget aliquet nibh praesent tristique magna.'
  }
])
</script>

<template>
  <section class="titleBox">
    <h1 id="privacyTitle">Privacy Policy</h1>
  </section>
  <section class="pBox">
    <privacySec
      v-for="para in paras"
      :key="para.id"
      :privacyTitle="para.privacyTitle"
      :privacyPara="para.privacyPara"
    />
    <h2 class="contactTitle">Contact</h2>
    <p class="contactP">
      If you have any questions about this Privacy Policy, please contact us:
      <a :href="'mailto:' + contact">{{ contact }}</a>
    </p>
  </section>
</template>

<style scoped>
.titleBox {
  background-color: #baa898;
  display: flex;
  justify-content: center;
}

#privacyTitle {
  width: 80%;
  height: 25dvh;
  font-size: 50px;
  display: flex;
  align-items: center;
}

.pBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.contactTitle{
    font-size: 28px;
    margin-bottom: 5px;
    text-align: start;
}

.contactP{
    font-size: 16px;
    margin-bottom: 5px;
    text-align: start;
}

.contactP a {
    text-decoration: underline;
}
</style>
