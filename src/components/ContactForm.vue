<script>
import CustomCaptcha from '../components/VueCaptcha.vue'
import Modal from '../components/PopupBox.vue'

export default {
  components: {
    CustomCaptcha,
    Modal
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      },
      submitted: false,
      isCaptchaValid: false
    }
  },
  computed: {
    isFormValid() {
      return this.isEmailValid && this.isCaptchaValid && this.isAllFieldsValid
    },
    isEmailValid() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(this.form.email)
    },
    isAllFieldsValid() {
      return this.form.firstName && this.form.lastName && this.form.subject && this.form.message
    },
    firstNameError() {
      return this.form.firstName === ''
    },
    lastNameError() {
      return this.form.lastName === ''
    },
    subjectError() {
      return this.form.subject === ''
    },
    messageError() {
      return this.form.message === ''
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        console.log('Form submitted:', this.form)
        this.submitted = true
        this.resetForm()
      } else {
        console.error('Form validation failed.')
      }
    },
    resetForm() {
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''
      this.isCaptchaValid = false
      this.$refs.captcha.refreshCaptcha() // Call the refresh method on the CAPTCHA component
    },
    handleCaptchaValidation(isValid) {
      this.isCaptchaValid = isValid
    },
    closeModal() {
      this.submitted = false
    }
  }
}
</script>

<template>
  <section class="contactFormTitle">
    <h1>Drop us a line at Chacha!</h1>
    <p>
      Your questions, feedback, and hellos brighten our day. Let's chat and make your bubble tea
      dreams a delightful reality!
    </p>
  </section>
  <form @submit.prevent="submitForm">
    <div class="formDiv" :class="{ error: firstNameError }">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="form.firstName" required />
      <span v-if="firstNameError" class="error">First name is required.</span>
    </div>
    <div class="formDiv" :class="{ error: lastNameError }">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="form.lastName" required />
      <span v-if="lastNameError" class="error">Last name is required.</span>
    </div>
    <div class="formDiv" :class="{ error: !isEmailValid }">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
      <span v-if="!isEmailValid" class="error">Please enter a valid email address.</span>
    </div>
    <div class="formDiv" :class="{ error: subjectError }">
      <label for="subject">Subject:</label>
      <select id="subject" v-model="form.subject" required>
        <option disabled value="">Please Select One</option>
        <option>General Inquiry</option>
        <option>Support</option>
        <option>Product Feedback</option>
        <option>Store Visit Feedback</option>
      </select>
      <span v-if="subjectError" class="error">Subject is required.</span>
    </div>
    <div class="formDiv" :class="{ error: messageError }">
      <label for="message">Spill the Tea:</label>
      <textarea id="message" v-model="form.message" required></textarea>
      <span v-if="messageError" class="error">Message is required.</span>
    </div>
    <CustomCaptcha ref="captcha" @captcha-validated="handleCaptchaValidation" />
    <span v-if="!isCaptchaValid" class="error">Please complete the CAPTCHA.</span>
    <button type="submit" :disabled="!isFormValid">Submit</button>
  </form>
  <Modal :visible="submitted" @close="closeModal">
    <p>Thank you for your message! We will get back to you soon.</p>
  </Modal>
</template>

<style scoped>
.contactFormTitle {
  width: 50%;
}

.contactFormTitle h1 {
  font-size: 33px;
  letter-spacing: 0.5px;
  text-decoration: underline #eb5e28;
  text-underline-offset: 10px;
  text-decoration-thickness: 7px;
  border-radius: 5px;
}

.contactFormTitle p {
  font-size: 18px;
  letter-spacing: 0.5px;
  margin-top: 10px;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  width: 50%;
}

.formDiv {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369c6e;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
