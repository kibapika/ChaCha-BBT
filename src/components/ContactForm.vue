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
      isCaptchaValid: false,
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        subject: false,
        message: false
      }
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
      return this.touched.firstName && this.form.firstName === ''
    },
    lastNameError() {
      return this.touched.lastName && this.form.lastName === ''
    },
    subjectError() {
      return this.touched.subject && this.form.subject === ''
    },
    messageError() {
      return this.touched.message && this.form.message === ''
    }
  },
  methods: {
    submitForm() {
      // Mark all fields as touched before validation
      this.touched.firstName = true
      this.touched.lastName = true
      this.touched.email = true
      this.touched.subject = true
      this.touched.message = true

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
      this.$refs.captcha.refreshCaptcha() // Reset CAPTCHA

      // Reset touched state
      this.touched = {
        firstName: false,
        lastName: false,
        email: false,
        subject: false,
        message: false
      }
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
      <label for="firstName">First Name </label>
      <span v-if="firstNameError" class="error">(First name is required!)</span>
      <input
        type="text"
        id="firstName"
        v-model="form.firstName"
        @focus="touched.firstName = true"
        required
      />
    </div>
    <div class="formDiv" :class="{ error: lastNameError }">
      <label for="lastName">Last Name </label>
      <span v-if="lastNameError" class="error">(Last name is required!)</span>
      <input
        type="text"
        id="lastName"
        v-model="form.lastName"
        @focus="touched.lastName = true"
        required
      />
    </div>
    <div class="formDiv" :class="{ error: !isEmailValid && touched.email }">
      <label for="email">Email </label>
      <span v-if="!isEmailValid && touched.email" class="error"
        >(Please enter a valid email address.)</span
      >
      <input type="email" id="email" v-model="form.email" @focus="touched.email = true" required />
    </div>
    <div class="formDiv" :class="{ error: subjectError }">
      <label for="subject">Subject </label>
      <span v-if="subjectError" class="error">(Subject is required!)</span>
      <select id="subject" v-model="form.subject" @focus="touched.subject = true" required>
        <option disabled value="">Please Select One</option>
        <option>General Inquiry</option>
        <option>Support</option>
        <option>Product Feedback</option>
        <option>Store Visit Feedback</option>
      </select>
    </div>
    <div class="formDiv" :class="{ error: messageError }">
      <label for="message">Spill the Tea </label>
      <span v-if="messageError" class="error">(Message is required!)</span>
      <textarea
        id="message"
        v-model="form.message"
        @focus="touched.message = true"
        required
      ></textarea>
    </div>
    <div class="formDiv">
      <CustomCaptcha ref="captcha" @captcha-validated="handleCaptchaValidation" />
      <span v-if="!isCaptchaValid" class="error">Please complete the CAPTCHA.</span>
    </div>
    <button type="submit" :disabled="!isFormValid">
      <div>
        <v-icon id="icon" class="icon" scale="2" name="bi-send-fill" />
      </div>
      <span>Submit Form</span>
    </button>
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

.formDiv label {
  color: #403d39;
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
  font-size: 20px;
  background: royalblue;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button:hover div {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover #icon {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(5em);
}

button:active {
  transform: scale(0.95);
}

#icon {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}
@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

.error {
  font-weight: bold;
  color: red;
}
</style>
