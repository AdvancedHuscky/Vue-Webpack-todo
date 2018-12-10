import vue from 'vue'
import App from './app.vue'

import './assets/styles/test-stylus.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => {
        h(app)
    }
}).$mount()