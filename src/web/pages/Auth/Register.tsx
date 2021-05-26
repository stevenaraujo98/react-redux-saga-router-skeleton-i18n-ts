import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Copyright() {
    return (
        <p>
            {'Copyright © '}
            <Link to="https://material-ui.com/">First Love Yourself</Link> {new Date().getFullYear()}
            {'.'}
        </p>
    );
}

interface State {
    username: string;
    password: string;
    confirmPassword: string;
    cellphone: string;
}

const Register = () => {
    const [values, setValues] = React.useState<State>({
        username: '',
        password: '',
        confirmPassword: '',
        cellphone: '(  )    -    ',
    });
    let history = useHistory();

    const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeInput = (key: string, val: string) => {
        setValues({ ...values, [key]: val });
    };

    const submit = () => {
        console.log(values);
        history.push('/signin');
    };

    return (
        <div>
            <h1>Registrarse</h1>
            <div>
                <input id="username" placeholder={'username'} onChange={handleChange('username')} />
            </div>
            <div>
                <input id="email" type="email" placeholder="Correo electrónico" onChange={handleChange('email')} />
            </div>
            <div>
                <input id="date" type="date" placeholder="date" onChange={handleChange('date')} />
            </div>
            <div>
                <input type="password" id="password" placeholder="Contraseña" onChange={handleChange('password')} />
            </div>
            <div>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirmar contraseña"
                    onChange={handleChange('password')}
                />
            </div>
            <button onClick={submit}>Registrarse</button>
            <div>
                <Link to="/recuperar">Olvidó su contraseña?</Link>
            </div>
            <div>
                <Link to="/signin">{'Ya posee cuenta? Login'}</Link>
            </div>
        </div>
    );
};

export default Register;
