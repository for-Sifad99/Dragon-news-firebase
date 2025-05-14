import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { setUser, createUser, userSignout, SentEmailVerification, updateUser } = use(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        //Naruto uzumaki.
        const photo = e.target.photo.value;
        //https://i.postimg.cc/B6fPfY7G/png-transparent-naruto-uzumaki-naruto-shipp-den-kakashi-hatake-itachi-uchiha-naruto-hand-fictional-c.png
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.checkbox.checked;

        const validatePassword = (password) => {
            if (!password) return "Password is required!";
            if (password.length < 6) return "Password must be at least 6 characters!";
            if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter!";
            if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter!";
            if (!/[0-9]/.test(password)) return "Password must include at least one number!";
            if (!/[!@#$%^&*]/.test(password)) return "Password must include at least one special character!";
            return null;
        };

        let hasError = false;

        // Name Validation
        if (name.length < 5) {
            setErrorName('Name must be at least 5 characters!!');
            hasError = true;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            setErrorName('Name can only contain letters and spaces!');
            hasError = true;
        } else {
            setErrorName('');
        }

        // Password Validation
        const passwordError = validatePassword(password);
        if (passwordError) {
            setErrorPassword(passwordError);
            hasError = true;
        } else {
            setErrorPassword('');
        }

        if (hasError) return;
        if (!terms) return; // now it only blocks if terms is NOT checked


        createUser(email, password)
            .then((result) => {
                const user = result.user;
                SentEmailVerification()
                    .then(() => {
                        setSuccess(true);
                    });

                return userSignout().then(() => user); // pass user forward
            })
            .then((user) => {
                setTimeout(() => {
                    navigate('/auth/login');
                    updateUser({ displayName: name, photoURL: photo })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: photo });
                        })
                        .catch(error => {
                            setError(error.message)
                            setUser(user);
                        });
                }, 1000);
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    return (
        <>
            <Helmet>
                <title>Register | Dragon News</title>
                <meta name="description" content="Create your Dragon News account and stay updated with top stories." />
            </Helmet>
            <div className="relative bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-13">
                {/* Success Overlay: Visible when registration is successful */}
                {success && (
                    <div className="absolute bg-opacity-50 w-full top-30 left-0 z-50 p-6 rounded-xl text-center animate-bounce scale-100 transition-all duration-100">
                        <h1 className="text-5xl font-bold text-green-600 mb-4">🎉 Congratulations!</h1>
                    </div>
                )}

                {/* Form */}
                <div className={`card-body w-full ${success ? 'blur-sm pointer-events-none' : ''}`}>
                    <h1 className="text-2xl text-center text-primary font-semibold my-4">Register Your Account!</h1>
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo Url" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={showPassword ? 'text' : 'password'} name='password' className="input w-full" placeholder="Password" />
                            <button className='absolute top-7 right-4' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}</button>
                        </div>
                        <div className='flex gap-2 items-center text-primary mt-1'>
                            <input type="checkbox" name='checkbox' className="checkbox w-5 h-5" />Accept
                            <span className='font-bold'>Term & Conditions</span>
                        </div>
                        {errorName && <p className='items-center text-secondary'>{errorName}</p>}
                        {errorPassword && <p className='items-center text-secondary'>{errorPassword}</p>}
                        {error && <p className='items-center text-secondary'>{error}</p>}
                        <button type='submit' className="btn btn-neutral">Register</button>
                    </form>
                    <h1 className="text-xs text-center font-semibold mt-4">
                        Already have an Account?
                        <Link to='/auth/login' className='text-secondary underline'> Login! </Link>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Register;