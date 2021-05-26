import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const getLang = localStorage.getItem('Lang');
if (!getLang) {
    localStorage.setItem('Lang', 'es');
}

i18n.use(initReactI18next).init({
    fallbackLng: ['es', 'en'],
    lng: getLang,
    resources: {
        en: {
            translations: require('./locales/en/translations.json'),
        },
        es: {
            translations: require('./locales/es/translations.json'),
        },
    },
    ns: ['translations'],
    defaultNS: 'translations',
});

i18n.languages = ['en', 'es'];

export default i18n;
