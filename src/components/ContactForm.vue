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
      <span v-if="!isCaptchaValid" class="error">Please complete the CAPTCHA.</span>
      <CustomCaptcha ref="captcha" @captcha-validated="handleCaptchaValidation" />
    </div>
    <button type="submit" :disabled="!isFormValid">
      <div>
        <v-icon id="icon" class="icon" scale="1.5" name="bi-send-fill" />
      </div>
      <span>Submit</span>
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
  align-items: center;
}

.formDiv {
  margin-bottom: 1rem;
  width: 100%;
}

.formDiv label {
  color: #403d39;
  font-weight: bold;
}

input,
textarea,
select {
  background-color: white;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
  font-size: 13.4px;
  border: none;
  border-bottom: 1.25px solid #ccc5b9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

input:hover, textarea:hover, select:hover {
  transition: box-shadow ease-in-out 0.3s;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  border-color: #ccc5b9;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border: 1px solid #ccc5b9;
  transition: box-shadow ease-in-out 0.3s;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
}

button {
  font-size: 18px;
  background: #fcca46;
  color: #403d39;
  padding: 10px 15px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

button span {
  display: block;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
}

button:hover div {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover #icon {
  transform: translateX(1em) rotate(45deg) scale(1.1);
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

@media (max-width: 768px) {
 .contactFormTitle, form{
  width: 96%;
 }

 .contactFormTitle h1, p {
  text-align: center;
 }

 .contactFormTitle p {
  margin-bottom: 10px;
 }

 input {
  font-size: 18px;
 }

}
</style>
