import React from 'react'
import { Button, Card, FormControl, InputPassword, InputText, LayoutOne } from 'upkit'
import { Link } from 'react-router-dom';
import StoreLogo from '../../components/StoreLogo';

// const statusList = {
//   idle: 'idle',
//   process: 'process',
//   success: 'success',
//   error: 'error',
// }

export default function Register() {

  return (
    <div style={{marginTop: '100px'}}>
      <LayoutOne size="small">
      <Card color="white">
        <div className="text-center mb-5">
          <StoreLogo/>
        </div>
        <form onSubmit={() => {}}>
          <FormControl errorMessage={'Nama tidak boleh kosong'}>
            <InputText placeholder="Nama Lengkap" fitContainer  />
          </FormControl>
          <FormControl errorMessage={''}>
            <InputText placeholder="Email" fitContainer />
          </FormControl>
          <FormControl errorMessage={''}>
            <InputPassword placeholder="Password" fitContainer />
          </FormControl>
          <FormControl errorMessage={''}>
            <InputPassword placeholder="Konfirmasi Password" fitContainer />
          </FormControl>
          <Button 
            size="large" 
            fitContainer
            disabled={false}
          >{false ? "Sedang memproses...": "Mendaftar"}</Button>
        </form>
        <div className="text-center mt-2">
          Sudah punya akun? <Link to="/login"> <b style={{textDecoration: 'underline'}}> Masuk Sekarang. </b> </Link>
        </div>
      </Card>
    </LayoutOne>
    </div>
  )
}
