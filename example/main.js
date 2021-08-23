import { createApp } from "vue"
import App from "./App.vue"
import SimpleVueGrid from "../src/install.js"

const options = {
  breakpoints: {
    xl: 1400,
    xxl: "1920px"
  }
}

createApp(App)
  .use(SimpleVueGrid, options)
  .mount("#app")
