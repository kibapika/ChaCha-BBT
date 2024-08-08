<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<template>
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    padding-top: 200px;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 8px 16px;
    border: 1px solid #ccc5b9;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
  
  .close {
    color: #aaa;
    font-size: 40px;
    font-weight: bold;
  }
  
  .close:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .close:active {
    color: #eb5e28;
  }
  </style>
  