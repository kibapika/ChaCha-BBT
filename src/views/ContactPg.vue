<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
  <section class="titleBox">
    <h1 class="contactTitle">Contact</h1>
  </section>
  <section class="contactBox">
    <ContactForm />
  </section>
</template>

<style scoped>
.titleBox {
  background-image: url('../assets/driedTea.jpg');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.contactTitle {
  width: 80%;
  height: 18dvh;
  font-size: 55px;
  display: flex;
  align-items: center;
  color: white;
}

.contactBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  width: 100%;
  border-radius: 5px;
  background-color: #ccc5b9;
}

@media (max-width: 768px) {
  .contactTitle {
    justify-content: center;
  }

  .contactBox {
    flex-direction: column;
    border-radius: 0px;
    padding: auto;
  }
}
</style>
