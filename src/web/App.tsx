import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import LoginContainer from './pages/Auth/Login/LoginContainer';
import StartContainer from './pages/StartContainer';
import ProtectedLogin from '../utils/ProtectedLogin';
import ProtectedRoute from '../utils/ProtectedRoute';

function App() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getTheme = localStorage.getItem('Theme');
    const condition = getTheme === 'dark' || getTheme === 'light' ? getTheme === 'dark' : prefersDarkMode;
    if (condition) {
        document.body.classList.add('dark-mode');
    }

    return (
        <div className="App">
            {/* <ThemeProvider theme={theme(condition)}> */}
            <BrowserRouter>
                <Switch>
                    <ProtectedLogin path="/signin" exact component={LoginContainer} />
                    <ProtectedLogin path="/signup" exact component={Register} />
                    {/* <ProtectedRoute path="/" component={StartContainer} /> */}
                    <Route path="/" component={StartContainer} />
                </Switch>
            </BrowserRouter>
            {/* </ThemeProvider> */}
        </div>
    );
}

export default App;
