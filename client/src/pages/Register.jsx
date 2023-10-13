import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo , FormRow, SubmitBtn } from '../components'
import { Form, redirect, Link, useNavigation } from 'react-router-dom';
import customFetch from '../../../utils/customFetch';
import {toast} from 'react-toastify'

export const action = async ({request}) =>{
const formData = await request.formData();
const data = Object.fromEntries(formData);
  //  console.log(data);

  try {
    await customFetch.post('/auth/register',data);
    toast.success('Registration Successful')
     return redirect('/login');

  } catch (error) {
    toast.error(error ?.response ?.data?.msg);
    return error
  }
}


const Register = () => {

  return (
    <div>
      <Wrapper>
        <Form method='post' className='form'>
            <Logo/>
            <h4>Register</h4>
            <FormRow type={'text'} name='name' />
            <FormRow type={'text'} name='lastName' labelText={'Last Name'} />
            <FormRow type={'text'} name='location' />
            <FormRow type={'email'} name='email' />
            <FormRow type={'password'} name='password' />
            <SubmitBtn />
            <p>Already a Member!?
              <Link to={'/login'} className='member-btn'>Login</Link></p>
            
        </Form>
      </Wrapper>



      <Link to="/login" >Login Page</Link>

    </div>
  )
}

export default Register