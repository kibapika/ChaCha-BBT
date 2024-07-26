<script>
export default {
  data() {
    return {
      captcha: '',
      userInput: '',
      captchaMatch: false,
      showResult: false
    };
  },
  mounted() {
    this.refreshCaptcha();
  },
  methods: {
    refreshCaptcha() {
      this.captcha = this.generateCaptcha();
      this.userInput = '';
      this.showResult = false;
      this.captchaMatch = false;
      this.$emit('captcha-validated', false);
    },
    generateCaptcha() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let captcha = '';
      for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return captcha;
    },
    checkCaptcha() {
      this.captchaMatch = this.userInput.toLowerCase() === this.captcha.toLowerCase();
      this.showResult = true;
      this.$emit('captcha-validated', this.captchaMatch);
    }
  }
};
</script>

<template>
  <div class="captchaDiv">
    <section>
      <label for="captchaInput">Enter the text you see below:</label>
      <div class="captcha-box">{{ captcha }}</div>
    </section>
    <section>
      <input type="text" id="captchaInput" v-model="userInput" @input="checkCaptcha" />
      <button type="button" @click="refreshCaptcha">Refresh</button>
    </section>
    <span v-if="showResult" class="captcha-result">{{
      captchaMatch ? 'CAPTCHA correct!' : 'CAPTCHA incorrect. Please try again.'
    }}</span>
  </div>
</template>

<style scoped>
.captchaDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  background-color: #ccc5b9;
  box-shadow:
  0 4px 6px -1px rgb(0 0 0 / 0.1),
  0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.captcha-box {
  display: inline-block;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 18px;
  margin-bottom: 10px;
}

.captcha-result {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}
</style>
