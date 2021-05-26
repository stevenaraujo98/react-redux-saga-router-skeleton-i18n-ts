import { useState } from 'react';
import ThemeMode from '../../components/ThemeChanger/ThemeChanger';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../../components/SelectLanguage';

const AccessSettings = () => {
    const [checkedB, setCheckedB] = useState(false); // inicia con el de izquierda activado
    const { t } = useTranslation();

    return (
        <div>
            <div className="mb-2">
                <h5>{t('settingsAccess')}</h5>
            </div>
            <br />
            <div className="my-2">
                <h6>{t('theme')}</h6>
                <ThemeMode checkedB={checkedB} setCheckedB={setCheckedB} />
            </div>
            <br />
            <div className="my-2">
                <h6>{t('language')}</h6>
                <SelectLanguage />
            </div>
        </div>
    );
};

export default AccessSettings;
