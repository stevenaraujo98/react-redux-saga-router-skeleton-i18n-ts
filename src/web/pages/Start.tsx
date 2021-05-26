import React from 'react';
import { Route } from 'react-router-dom';
import './start.scss';
import Settings from './Settings/Settings';
import HomeContainer from './Home/HomeContainer';

interface Props {
    logoutHandler(): void;
    token: string;
    isLoading: boolean;
}

const Start: React.FunctionComponent<Props> = (props) => {
    const { logoutHandler, token, isLoading } = props;

    return (
        <>
            <div className="contendero-headers">
                {/* <Route path="/" component={} exact /> */}
                <Route path="/" component={HomeContainer} exact />
                <Route path="/settings" component={Settings} exact />
            </div>
        </>
    );
};

export default Start;
