<script>
import CustomCaptcha from '../components/VueCaptcha.vue'

export default {
  components: {
    CustomCaptcha,
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
      isEmailValid: true,
      isCaptchaValid: false // Flag to track CAPTCHA validation state
    };
  },
  computed: {
    isFormValid() {
      return this.isEmailValid && this.isCaptchaValid && this.form.firstName && this.form.lastName && this.form.email && this.form.subject && this.form.message;
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        // Form submission logic here
        console.log('Form submitted:', this.form);

        // Set submitted to true to show the thank you message
        this.submitted = true;

        // Reset the form
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.email = '';
        this.form.subject = '';
        this.form.message = '';
        this.isCaptchaValid = false; // Reset CAPTCHA validation
      } else {
        // Handle form validation errors or incomplete form submission
        console.error('Form validation failed.');
      }
    },
    validateEmail() {
      // Basic email format validation using regex
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isEmailValid = regex.test(this.form.email);
    },
    handleCaptchaValidation(isValid) {
      this.isCaptchaValid = isValid;
    }
  }
};
</script>

<template>
  <section class="contactFormTitle">
    <h1>Drop us a line at Chacha!</h1>
    <p>Your questions, feedback, and hellos brighten our day. Let's chat and make your bubble tea dreams a delightful reality!</p>
  </section>
  <form @submit.prevent="submitForm">
    <div class="formDiv">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="form.firstName" required />
    </div>
    <div class="formDiv">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="form.lastName" required />
    </div>
    <div class="formDiv">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" @blur="validateEmail" required />
      <span v-if="!isEmailValid && form.email !== ''" class="error">Please enter a valid email address.</span>
    </div>
    <div class="formDiv">
      <label for="subject">Subject:</label>
      <select id="subject" v-model="form.subject" required>
        <option disabled value="">Please Select One</option>
        <option>General Inquiry</option>
        <option>Support</option>
        <option>Product Feedback</option>
        <option>Store Visit Feedback</option>
      </select>
    </div>
    <div class="formDiv">
      <label for="message">Spill the Tea:</label>
      <textarea id="message" v-model="form.message" required></textarea>
    </div>
    <CustomCaptcha @captcha-validated="handleCaptchaValidation" />
    <button type="submit" :disabled="!isFormValid">Submit</button>
  </form>
  <p v-if="submitted">Thank you for your message! We will get back to you soon.</p>
</template>

<style scoped>
.contactFormTitle {
  width: 50%;
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
