/**
 * Configures and exports the vue-i18n instance used across the application.
 * Supports English (`en`) and Spanish (`es`) locales, defaulting to English.
 *
 * @module i18n
 */
import en from './locales/en.json';
import es from './locales/es.json';
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        es
    }
});

export default i18n;