import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import validator from 'validator'
import { startRegisterWithEmailPassword } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
//import { startGoogleLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
export const RegisterScreen = () => {
    const user = {
        name: 'Hernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456',

    }

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui);

    
    //console.log(msgError)
    

    const [value, handleInputChange] = useForm(user);

    const {name, email, password, password2} = value;
    const handleRegister = (e) => {
        e.preventDefault()
        //console.log(name, email, password, password2)
        //dispatch(startGoogleLogin(name, email, password, password2))

        if ( isFormValid() ) {
            dispatch(startRegisterWithEmailPassword(email, password, name ))
        }  
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            //console.log('Name is required');
            dispatch(setError('Name is required'))
            return false;
        }else if (!validator.isEmail( email )){
            //console.log('Email is not valid');
            dispatch(setError('email is not valid'))
            return false;
        }else if (password !== password2 || password.length < 5) {
            //console.log('Contrase debe tener menos mas de 5 caracteres')
            dispatch(setError('Contrase debe tener menos mas de 5 caracteres'))
            return false;
        }

        dispatch(removeError());
        return true;
    }
  return (
    <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                {
                    msgError && (
                    <div className='auth__alert-error' >
                        {msgError}
                    </div>
                    )
                }

                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />  
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    placeholder='Confirm password'
                    name='password2'
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                    /* disabled={true} */
                >
                    Login
                </button>
                 
                <Link 
                    to='/auth/login'
                    className='link '
                >
                    Already register
                </Link>
            </form>
        </>
  )
}
