import React from 'react';
import AcountSettings from './AccountSettings';
import AccessSettings from './AccessSettings';
import { useTranslation } from 'react-i18next';

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Settings() {
    const [value, setValue] = React.useState(0);
    const { t } = useTranslation();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <AcountSettings />
            <AccessSettings />
        </div>
    );
}
