import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}.json`,
    },
    react: {
      useSuspense: false,
    },
    fallbackLng: 'ru',
    preload: ['ru'],
    keySeparator: false,
    interpolation: { escapeValue: false },
  })

export { default } from 'i18next'
