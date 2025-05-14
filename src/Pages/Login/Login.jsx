import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { use, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { signInUser, forgotPassword, setUser} = use(AuthContext);
    const [error, setError] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
    const [firstTry, setFirstTry] = useState(true);
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                if (result.user.emailVerified) {
                    setUser(result.user);
                    navigate(location.state || '/');
                } else {
                    if (firstTry) {
                        alert('Please verify your email first.');
                        setFirstTry(false); // Next time it'll allow login
                    } else {
                        alert("Email still not verified. Please check your inbox or spam folder.");
                    }
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleForgotPass = () => {
        const email = emailRef.current.value;

        forgotPassword(email)
            .then(() => {
                alert('reset password massage is sent your email!!')
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return (
      <>
            <Helmet>
                <title>Login | Dragon News</title>
                <meta name="description" content="Login to your Dragon News account to read and comment on latest articles." />
            </Helmet>
            <div onSubmit={handleLogin} className="bg-base-100 w-full max-w-[450px] shrink-0 shadow-2xl p-10">
                <h1 className="text-2xl text-center text-primary font-bold">Login Your Account!</h1>
                <div className="card-body w-full">
                    <form className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input ref={emailRef} type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        {/* password */}
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <div onClick={handleForgotPass}><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='items-center text-secondary'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <h1 className="text-xs text-center font-semibold">Don't have an account? <Link to='/auth/register' className='text-secondary underline'> Register! </Link></h1>
                </div>
            </div>
      </>
    );
};

export default Login;