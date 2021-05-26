import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SelectLanguage() {
    const { t, i18n } = useTranslation();
    const lang = localStorage.getItem('Lang');
    const [language, setLanguage] = React.useState(lang ? lang : 'es');

    const handleChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('Lang', event.target.value);
    };

    return (
        <select id="demo-customized-select" value={language} onChange={handleChange}>
            <option value={'es'} name={t('spanish')}>
                {t('spanish')}
            </option>
            <option value={'en'} name={t('english')}>
                {t('english')}
            </option>
        </select>
    );
}
