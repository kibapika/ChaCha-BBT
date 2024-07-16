<script>
export default {
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
      isHuman: false // This will be true once reCAPTCHA is verified
    }
  },
  methods: {
    submitForm() {
      if (this.isHuman) {
        // Here you would typically handle the form submission, e.g., send the data to a server
        console.log('Form submitted:', this.form)

        // Set submitted to true to show the thank you message
        this.submitted = true

        // Reset the form
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.email = ''
        this.form.subject = ''
        this.form.message = ''

        // Reset reCAPTCHA
        this.$refs.recaptcha.reset()
        this.isHuman = false
      }
    },
    onVerify(response) {
      console.log('Verified:', response)
      this.isHuman = true
    },
    onExpired() {
      console.log('Expired')
      this.isHuman = false
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
    <div class="formDiv">
      <label for="name">First Name:</label>
      <input type="text" id="name" v-model="form.firstName" required />
      <label for="name">Last Name:</label>
      <input type="text" id="name" v-model="form.lastName" required />
    </div>
    <div class="formDiv">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    <div class="formDiv">
      <label for="subject">Subject:</label>
      <select id="subject" v-model="form.subject" required>
        <option disabled value="">Please Select Nne</option>
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
    <vue-recaptcha v-if="!submitted" @verify="onVerify" @expired="onExpired"></vue-recaptcha>
    <button type="submit" :disabled="!isHuman">Submit</button>
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

.required {
  color: red;
  margin-left: 5px;
}
</style>
