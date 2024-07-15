<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form)

      this.submitted = true

      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>

<template>
    <section class="contactFormTitle">
      <h1>Drop us a line at Chacha! </h1>
      <p>
        Your questions, feedback, and hellos brighten our day. Let's chat and
        make your bubble tea dreams a delightful reality!
      </p>
    </section>
    <form @submit.prevent="submitForm">
      <div class="formDiv">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="formDiv">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="formDiv">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
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
textarea {
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
</style>
