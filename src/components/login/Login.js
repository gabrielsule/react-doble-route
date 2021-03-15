import React from 'react';

const Login = ({ history }) => {

    const handleLogin = () => {
        history.replace('/');
    }

    return (<div className='container'>
        <h3>Login</h3>

        <button className='btn btn-primary' onClick={handleLogin}>Ingresar</button>
    </div>);
}

export default Login;