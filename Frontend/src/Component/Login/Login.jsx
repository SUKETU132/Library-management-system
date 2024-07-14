import React, { useState } from 'react';
import Input from '../Inputfield'; // Assuming this is a custom input component
import { ArrowRight } from 'lucide-react'; // Assuming this is an icon component
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authService from '../../Mongo/auth'; // Replace with actual authentication service
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [wantVerification, setWantVerification] = useState(false);
    const [otpVerification, setOtpVerification] = useState(false);

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        background: '#f3f4f6',
    };

    const formContainerStyle = {
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333333',
        margin: '0',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const subtextStyle = {
        fontSize: '14px',
        color: '#666666',
        margin: '0',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const linkStyle = {
        fontWeight: 'bold',
        color: '#000000',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            textDecoration: 'underline',
        },
    };

    const inputFieldStyle = {
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '1px solid #cccccc',
        marginTop: '10px',
        paddingLeft: '10px',
        fontSize: '14px',
        outline: 'none',
    };

    const errorTextStyle = {
        color: 'red',
        marginTop: '5px',
        marginBottom: '10px',
        fontSize: '12px',
    };

    const buttonStyle = {
        width: '100%',
        height: '40px',
        backgroundColor: '#f37a5d',
        color: '#ffffff',
        borderRadius: '5px',
        border: 'none',
        marginTop: '20px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#e55e3d',
        },
    };

    const forgotPasswordStyle = {
        fontSize: '14px',
        color: '#000000',
        textDecoration: 'underline',
        cursor: 'pointer',
        textAlign: 'right',
        marginTop: '10px',
    };

    const login = async (data) => {
        setError('');
        setMsg('');
        setIsLoading(true);
        try {
            setEmail(data.email);
            const user = await authService.login(data); // Assuming authService has a login method
            if (user) {
                setMsg('Login successful');
                // dispatch(LoginUser(data)); // Assuming you handle this elsewhere
                navigate('/');
            } else {
                setError('Please verify your email first and then login again.');
                setWantVerification(true);
                return;
            }
        } catch (error) {
            setError('Password is not valid');
            return;
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        setMsg('');
        setError('');
        try {
            const { email } = getValues();
            // Replace with your actual logic for password reset
            // const result = await authService.requestPasswordReset({ email });
            const result = { success: true, message: 'Password reset email sent.' }; // Mock data
            if (result.success) {
                setMsg(result.message);
                setError(null);
            } else {
                setMsg(null);
                setError(result.message);
            }
        } catch (err) {
            setMsg(null);
            setError(err.message);
        }
    };

    const handleVerifyOTP = () => {
        setOtpVerification(true);
    };

    return (
        <section style={containerStyle}>
            <div style={formContainerStyle}>
                <h2 style={headingStyle}>Sign in to your account</h2>
                <p style={subtextStyle}>
                    Don't have an account?{' '}
                    <a href="/signup" style={linkStyle}>
                        Create a free account
                    </a>
                </p>
                <form onSubmit={handleSubmit(login)} style={{ marginTop: '20px' }}>
                    <div>
                        <label htmlFor="email" style={{ fontSize: '16px', color: '#333333' }}>
                            Email address
                        </label>
                        <div>
                            {errors.email && <p style={errorTextStyle}>{errors.email.message}</p>}
                            <Input
                                id="email"
                                type="email"
                                style={inputFieldStyle}
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <label htmlFor="password" style={{ fontSize: '16px', color: '#333333' }}>
                            Password
                        </label>
                        <div>
                            {errors.password && <p style={errorTextStyle}>{errors.password.message}</p>}
                            <Input
                                id="password"
                                type="password"
                                style={inputFieldStyle}
                                placeholder="Enter your password"
                                {...register('password', { required: 'Password is required' })}
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button type="submit" style={buttonStyle}>
                            Login <ArrowRight style={{ marginLeft: '5px' }} size={16} />
                        </button>
                        <p style={forgotPasswordStyle} onClick={handleForgotPassword}>
                            Forgot password?
                        </p>
                    </div>
                </form>
                {msg && <div style={{ color: '#4caf50', marginTop: '20px', textAlign: 'center' }}>{msg}</div>}
                {error && <div style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}>{error}</div>}
            </div>
        </section>
    );
};

export default LoginForm;
