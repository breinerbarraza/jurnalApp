import React from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
//import validator from 'validator'
import { login, startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
//import { setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
export const LoginScreen = () => {

    const initial = {
        email: 'nando@gmail.com',
        password: '123456'
    }

    const dispatch = useDispatch();

    const [value, handleInputChange] = useForm(initial);

    const {email, password} = value;

    //console.log(email)

    const handleLogin = (e) => {
        e.preventDefault();
      

            dispatch(startLoginEmailPassword(email, password))
            //console.log(email, password)
    }

    const handleGoogleLogin = () => {
        //e.preventDefault();
        dispatch(startGoogleLogin())
    }
    
    /* const isFormValid = () => {
        if (!validator.isEmail( email )){
            dispatch(setError('Email invalido'))
            return false;
        } 
        return true;
    } */
    return(
        <>
            <h3 className="auth__title">Login</h3>

            {/* {
                msgError &&(
                    <div className='auth__alert-error' >
                        {msgError}
                    </div>
                    )   
            } */}

            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={handleInputChange}
                />  
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className="auth__input"
                    value={ password }
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    /* disabled={true} */
                >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    to='/auth/register'
                    className='link'
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}