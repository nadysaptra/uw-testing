import React from 'react';
import LoginForm from '../SignUp/index';
import ChatPage from '../Chat/index';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
    const isLogged = useSelector((state: any) => {
        return state.login.isLogged;
    });

    return (
        <React.Fragment>
            {isLogged ? (<ChatPage />) : (<LoginForm />)}
            <ChatPage />
        </React.Fragment>
    );
};

export default App;