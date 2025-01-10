<script setup></script>

<template>
  <div>
    <v-icon class="icon" hover scale="1.3" animation="float" name="bi-facebook" />
    <v-icon class="icon" hover scale="1.3" animation="float" name="bi-twitter" />
    <v-icon class="icon" hover scale="1.3" animation="float" name="bi-instagram" />
    <v-icon class="icon" hover scale="1.3" animation="float" name="bi-tiktok" />
    <v-icon class="icon" hover scale="1.3" animation="float" name="hi-mail" />
  </div>
</template>

<style scoped>
.icon {
  cursor: pointer;
  color: #403d39;  
  margin: 0 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: transparent;
  transition: color 0.3s ease, transform 0.3s ease;
}

.icon:hover {
  background-color: rgba(235, 94, 40, 0.2); /* Light background on hover */
  color: #eb5e28;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .icon {
    margin: 0 5px;
    padding: 5px;
    font-size: 1.2rem; /* Adjust icon size */
  }
}
</style>
