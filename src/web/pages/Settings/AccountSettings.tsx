import { useTranslation } from 'react-i18next';

const AcountSettings = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h5>{t('settingsAccount')}</h5>
            <h6>{t('welcomeUser', { username: 'Name LastName' })}</h6>
        </div>
    );
};

export default AcountSettings;
