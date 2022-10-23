<script setup>
import { ref, onMounted } from 'vue'
const username = ref(null)
const email = ref('')
const password = ref('')
const error = ref(false)
const passwordType = ref('password')
const icon = ref('fa-solid fa-eye')

onMounted(() => {
  username.value.focus()
})

const showPassword = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
  if (passwordType.value != 'password') {
    icon.value = 'fa-solid fa-eye-slash'
  } else {
    return (icon.value = 'fa-solid fa-eye')
  }
}
const submitHandler = () => {
  if (
    !email.value ||
    !password.value ||
    (email.value != 'Admin' && password.value != 'Admin')
  ) {
    error.value = !error.value
  } else {
    welcome.value = `Welcome ${email.value}`
    //normally we post the details to be backend here using axios or fetch API
  }
  email.value = ''
  password.value = ''
}
const handleError = () => {
  console.log('to be closed')
  error.value = false
}
</script>
<template>
  <main class="main">
    <header class="header">
      <div class="logo">
        <img src="./assets/smartBRIDGE_HH_Logo_pos.png" alt="" />
      </div>
    </header>
    <section class="center">
      <div class="form-info">
        <h4>
          Login to your <br />
          smartBRIDGE account
        </h4>
      </div>
      <div class="form-wrapper">
        <form class="div">
          <fieldset class="inputBox" :class="[error ? 'alert' : '']">
            <input
              type="email"
              placeholder="E-mail"
              v-model="email"
              novalidate
              ref="username"
            />
            <div class="icon-wrapper"></div>
          </fieldset>
          <fieldset class="inputBox" :class="error ? 'alert' : ''">
            <input
              :type="passwordType"
              placeholder="password"
              v-model="password"
            />
            <div class="icon-wrapper">
              <font-awesome-icon
                :icon="icon"
                @click="showPassword"
                class="password-icon"
              />
            </div>
          </fieldset>
          <button class="submit-btn" @click.prevent="submitHandler">
            Login
          </button>
        </form>
      </div>
      <div class="error" v-if="error">
        <span class="icon">
          <font-awesome-icon
            icon="fa-regular fa-circle-xmark"
            @click="handleError"
            class="icon"
          />
        </span>
        <p>Invalid Username or Password</p>
      </div>
      <div class="password-reset">
        <a href="#">Forget Password ?</a>
      </div>
      <div class="form-footer">
        <h5>Are you new to smartBRIDGE</h5>
        <a href="#" class="register-link"> Register</a>
      </div>
    </section>
  </main>
</template>
