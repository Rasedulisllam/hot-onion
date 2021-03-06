import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
import brand from '../../image/logo/logo2.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='login-main'>
      <div className="login text-start">
        <img width='300px' className='mb-4' src={brand} alt="" />
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className='my-3'>
            <input className={`input-field ${errors.email && 'invalid'}`} placeholder='Email' {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              type="email"
              onKeyUp={()=>trigger('email')}
              />
            {errors.email && <small className='text-danger'>{errors.email.message}</small>}
          </div>

          <div className='my-3'>
          <input className={`input-field ${errors.password && 'invalid'}`} {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Min length is 5"
            }
          })}
          placeholder='Password'
          type="password"
          onKeyUp={()=>trigger('password')} 
          />
          {errors.password && <small className='text-danger'>{errors.password.message}</small>}
          </div>          
          <Button className='input-field-btn bg-danger' type="submit">Sign In</Button>
        </form>
        <Link className='text-danger text-center' to='/register'>Create a new acount?</Link>
      </div>
    </div>
  );
};

export default Login;