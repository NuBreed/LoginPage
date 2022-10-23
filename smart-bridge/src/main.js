import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import './asset.scss'

library.add(faEyeSlash, faEye, faCircleXmark)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
