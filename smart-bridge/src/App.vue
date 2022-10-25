<script setup>
import { ref, onMounted, reactive } from 'vue'
const authUsers = reactive([{ login: 'Admin' }, { login: 'mmwhh' }])
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
  if (!email.value || !password.value) {
    error.value = !error.value
  }
  const auth = authUsers.find(({ login }) => login === email.value)
  if (!auth && password != 'Admin') {
  } else {
    console.log('You are welcome')
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
<script>
export default {
  data() {
    return {}
  },
}
</script>
<template>
  <main class="app">
    <header class="app_header">
      <div class="app_header_logo">
        <img
          src="./assets/smartBRIDGE_HH_Logo_pos.png"
          alt=""
          class="app_header_logo_img"
        />
      </div>
    </header>
    <section class="app_center">
      <div class="app_center_header">
        <h4 class="app_center_heading">
          Login to your <br />
          smartBRIDGE account
        </h4>
      </div>
      <div class="app_center_content">
        <form>
          <fieldset
            class="app_center_content_wrapper"
            :class="[error ? 'app_center_content_alert' : '']"
          >
            <input
              type="email"
              placeholder="E-mail"
              v-model="email"
              novalidate
              ref="username"
              class="app_center_content_wrapper_input"
            />
            <div class="app_center_content_icon-wrapper"></div>
          </fieldset>
          <fieldset
            class="app_center_content_wrapper"
            :class="error ? 'app_center_content_alert' : ''"
          >
            <input
              :type="passwordType"
              placeholder="password"
              v-model="password"
              class="app_center_content_wrapper_input"
            />
            <div class="app_center_content_icon-wrapper">
              <font-awesome-icon
                :icon="icon"
                @click="showPassword"
                class="app_center_content_icon-wrapper_icon"
              />
            </div>
          </fieldset>
          <button
            class="app_center_content_submit_btn"
            @click.prevent="submitHandler"
          >
            Login
          </button>
        </form>
      </div>
      <div class="app_center_error" v-if="error">
        <font-awesome-icon
          icon="fa-regular fa-circle-xmark"
          @click="handleError"
          class="app_center_error_icon"
        />
        <p class="app_center_error_text">Invalid Username or Password</p>
      </div>
      <div class="app_center_password_reset">
        <a href="#" class="app_center_password_reset_link">Forget Password ?</a>
      </div>
      <div class="app_center_form_footer">
        <h5>Are you new to smartBRIDGE</h5>
        <a href="#" class="app_center_form_footer_register-link"> Register</a>
      </div>
    </section>
  </main>
</template>
