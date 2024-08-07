<script>
export default {
  data() {
    return {
      captcha: '',
      userInput: '',
      captchaMatch: false,
      showResult: false
    }
  },
  mounted() {
    this.refreshCaptcha()
  },
  methods: {
    refreshCaptcha() {
      this.captcha = this.generateCaptcha()
      this.userInput = ''
      this.showResult = false
      this.captchaMatch = false
      this.$emit('captcha-validated', false)
    },
    generateCaptcha() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let captcha = ''
      for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return captcha
    },
    checkCaptcha() {
      this.captchaMatch = this.userInput.toLowerCase() === this.captcha.toLowerCase()
      this.showResult = true
      this.$emit('captcha-validated', this.captchaMatch)
    }
  }
}
</script>

<template>
  <div class="captchaDiv">
    <section class="captchaSec1">
      <label for="captchaInput">Enter the text you see below:</label>
      <div class="captcha-box">{{ captcha }}</div>
    </section>
    <section class="captchaSec2">
      <div class="inputDiv">
        <input type="text" id="captchaInput" v-model="userInput" @input="checkCaptcha" />
      </div>
      <button type="button" @click="refreshCaptcha">Refresh</button>
    </section>
    <span v-if="showResult" class="captcha-result">{{
      captchaMatch ? 'CAPTCHA correct!' : 'CAPTCHA incorrect! Please try again.'
    }}</span>
  </div>
</template>

<style scoped>
.captchaDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #f9dec9, #fae1df);
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.captchaSec1 {
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
}

.captcha-box {
  display: inline-block;
  text-decoration: underline #eb5e28 2px;
  text-underline-offset: 6px;
  font-size: 20px;
}

.captchaSec2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
}

.captchaSec2 button {
  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 1.1em;
  cursor: pointer;
  padding: 9px 15px;
  background-color: #fffcf2;
  transition: box-shadow ease-in-out 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.captchaSec2 button:hover {
  box-shadow: var(--hover-shadows);
}

.captchaSec2 button:active {
  background-color: #fbd266;
  transform: scale(0.95);
}

.inputDiv {
  width: 65%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #fbd266, #8fb0a9);
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

#captchaInput {
  width: 95%;
  height: 25px;
  border: none;
  outline: none;
  caret-color: #eb5e28;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 15px;
  letter-spacing: 0.8px;
  font-size: 13.4px;
}

.captcha-result {
  margin-top: 10px;
  font-weight: bold;
}
</style>
