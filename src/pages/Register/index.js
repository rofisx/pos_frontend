import React, { useState } from 'react'
import { Button, Card, FormControl, InputPassword, InputText, LayoutOne } from 'upkit'
import { Link, useHistory } from 'react-router-dom';
import StoreLogo from '../../components/StoreLogo';
import { rules } from './validation';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../app/api/auth';

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

export default function Register() {

  const [status, setStatus] = useState(statusList.idle)
  const { register, handleSubmit, formState: {errors}, setError } = useForm();
  const history = useHistory()
  
  const onSubmit = async formData => {
        // alert(JSON.stringify(formData))
        const { password, password_confirmation } = formData;
        if( password !== password_confirmation) {
          setStatus(statusList.error);
          return setError('password_confirmation', {type: 'equality', message: 'Konfirmasi password tidak sama'});
        }
      
        setStatus(statusList.process);
        const {data} = await registerUser(formData);
        if(data.error) {
          let fields = Object.keys(data.fields);
          fields.forEach(field => {
            setError(field, {type: 'server', message: data.fields[field]?.properties?.message});
          });

          setStatus(statusList.error);
          return;
        }

        setStatus(statusList.success);
        history.push('/register-success')

  }

  return (
    <div style={{marginTop: '100px'}}>
      <LayoutOne size="small">
      <Card color="white">
        <div className="text-center mb-5">
          <StoreLogo/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl errorMessage={errors.full_name?.message}>
            <InputText {...register('full_name', rules.full_name)} placeholder="Nama Lengkap" fitContainer  />
          </FormControl>
          <FormControl errorMessage={errors.email?.message}>
            <InputText {...register('email', rules.email)} placeholder="Email" fitContainer />
          </FormControl>
          <FormControl errorMessage={errors.password?.message}>
            <InputPassword {...register('password', rules.password)} placeholder="Password" fitContainer />
          </FormControl>
          <FormControl errorMessage={errors.password_confirmation?.message}>
            <InputPassword {...register('password_confirmation', rules.password_confirmation)} placeholder="Konfirmasi Password" fitContainer />
          </FormControl>
          <Button 
            size="large" 
            fitContainer
            disabled={status === statusList.process}
          >{status === statusList.process ? "Sedang memproses...": "Mendaftar"}</Button>
        </form>
        <div className="text-center mt-2">
          Sudah punya akun? <Link to="/login"> <b style={{textDecoration: 'underline'}}> Masuk Sekarang. </b> </Link>
        </div>
      </Card>
    </LayoutOne>
    </div>
  )
}
