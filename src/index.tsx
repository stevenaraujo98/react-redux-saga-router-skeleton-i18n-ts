import ReactDOM from 'react-dom';
import App from './web/App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import './i18n/config';
import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
