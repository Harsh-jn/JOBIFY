import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../../utils/customFetch';

export const action = async({request}) =>{
  const formData = await request.formData();
  const file = formData.get('avatar')
  if(file && file.size > 5000000){
    toast.error('Image Size too large')
    return null;
  }

  try {
    await customFetch.patch('/users/update-user',formData);
    toast.success('Profile Updated Successfully')
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
}

const Profile = () => {
  const {user} = useOutletContext();
  const {name,lastName,email,location} = user;


 return (
  <Wrapper>
    <Form method='post' className='form' encType='multipart/form-data'>
      <h4 className='form-title'>
        Profile
      </h4>
      <div className="form-center">
        <div className="form-row">
          <label htmlFor='avatar' className='form-label'>
            Select an image file (max 0.5 MB)
          </label>
          <input type='file' id='avatar' name='avatar' className='form-input' accept='image/*'></input>
        </div>
        <FormRow type={'text'} name={'name'}  />
        <FormRow type={'text'} name={'lastName'} labelText={'last name'} />
        <FormRow type={'email'} name={'email'}  />
        <FormRow type={'text'} name={'location'}  />

        <SubmitBtn formBtn />

      </div>

    </Form>
  </Wrapper>
  )
}

export default Profile