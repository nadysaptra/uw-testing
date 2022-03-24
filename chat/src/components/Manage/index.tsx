import React from 'react';
import { useDispatch } from 'react-redux';
import { cleanState } from '../../modules/chat/actions/message';
import { login } from '../../modules/chat/actions/login';

const Manage: React.FC = () => {
    const dispatch = useDispatch();
    const resetData = () => { 
        dispatch(cleanState());
    }
    const logout = () => {
        dispatch(cleanState());
        dispatch(login(null,null));
        window.location.reload()
    }

    return (
        <div className="ml-auto">
                <button onClick={resetData} className='btn btn-danger'>Reset data</button>
                &nbsp;&nbsp;
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>
    );
};

export default Manage;