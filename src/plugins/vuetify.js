// src/plugins/vuetify.js
import 'vuetify/styles'; // Global CSS has to be imported
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Optional: use Material Design Icons

const vuetify = createVuetify({
  theme: {
    dark: false
  }
});


export default vuetify;
