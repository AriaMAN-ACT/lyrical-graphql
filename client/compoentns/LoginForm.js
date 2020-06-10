import React, {useState} from 'react';
import axios from 'axios';

window.axios = axios;

const LoginForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/signup', {email, password}).then().catch();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
                onChange={({target: {value}}) => setEmail(value)}
                value={email}
            />
            <label>Password</label>
            <input
                onChange={({target: {value}}) => setPassword(value)}
                value={password}
            />
            <button>Submit</button>
        </form>
    );
};

export default LoginForm;