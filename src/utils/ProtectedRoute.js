import { Route, Redirect } from 'react-router-dom';
const { REACT_APP_USER_TOKEN } = process.env;

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = () => {
        let user = localStorage.getItem(REACT_APP_USER_TOKEN);
        return user != null;
        // if (user != null) {
        //     if (JSON.parse(user).usuario[0].role !== '') return true;
        // }
        // return false;
        //return this.authenticated;
    };

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
                }
            }}
        />
    );
};

export default ProtectedRoute;
