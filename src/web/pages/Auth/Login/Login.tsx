import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { REACT_APP_USER_TOKEN } = process.env;
let keyStorage: string = REACT_APP_USER_TOKEN || '';

interface State {
    username: string;
    password: string;
}

interface Props {
    loginHandler(user: string, password: string): void;
    token: string;
    isLoading: boolean;
}

const Login: FunctionComponent<Props> = (props) => {
    const { loginHandler, token, isLoading } = props;
    const [values, setValues] = useState<State>({
        username: '',
        password: '',
    });
    let history = useHistory();
    const { t } = useTranslation();

    useEffect(() => {
        if (localStorage.getItem(keyStorage)) {
            history.push('/');
        }
    }, [token]);

    const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const changePassword = (key: string, val: string) => {
        setValues({ ...values, [key]: val });
    };

    const submit = () => {
        loginHandler(values.username, values.password);
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input id="username" placeholder={t('username')} onChange={handleChange('username')} />
            </div>
            <div>
                <input type="password" id="password" placeholder={t('password')} onChange={handleChange('password')} />
            </div>
            <button onClick={submit}>{isLoading ? t('charging') : t('login')}</button>
            <div>
                <Link to="/signup">{'¿Eres nuevo? Crearme una cuenta'}</Link>
            </div>
        </div>
    );
};

export default Login;
