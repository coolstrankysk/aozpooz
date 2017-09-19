import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en'
import sk from './locales/sk'

Vue.use(VueI18n)

const locale = 'en'

const messages = {
  en,
  sk
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
