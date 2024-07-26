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
    padding-top: 60px;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  