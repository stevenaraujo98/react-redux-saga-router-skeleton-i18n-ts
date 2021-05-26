import React, { useState, useEffect } from 'react';
import './ThemeChanger.scss';

type Props2 = {
    /** color to use for the background */
    checkedB?: boolean;
    /** callback function passed to the onClick handler*/
    setCheckedB: (event: boolean) => void;
};

const ThemeChanger: React.FC<Props2> = ({ checkedB, setCheckedB }) => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [themeState, setThemeState] = useState(prefersDarkMode); //porque empezamos con light WbSunnyIcon a la izquierda

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedB(event.target.checked);
        setThemeState(!themeState); // es asincronico por eso al if va con true

        if (event.target.checked) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    };

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        const condition = getTheme === 'dark' || getTheme === 'light' ? getTheme === 'dark' : prefersDarkMode;
        if (condition) {
            // esta en modo dark
            // checked inicia en false osea a la izquierda el checked
            setCheckedB(true); //porque WbSunnyIcon(sol) a la izquierda  y Brightness2Icon(luna) a la derecha(el activo)
            document.body.classList.add('dark-mode');
        }
    });

    return (
        <div>
            Sol {/* <IOSSwitch checked={checkedB} onChange={handleChange} name="checkedB" /> */}
            <label className="switch">
                <input type="checkbox" checked={checkedB} onChange={handleChange} />
                <span className="slider round"></span>
            </label>{' '}
            Luna
        </div>
    );
};

export default ThemeChanger;
