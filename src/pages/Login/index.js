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

export default function Login() {
  return (
    <div style={{marginTop: '100px'}}>
      <LayoutOne size="small">
      <Card color="white">
        <div className="text-center mb-5">
          <StoreLogo/>
        </div>
        <form onSubmit={() => {}}>
          <FormControl errorMessage={''}>
            <InputText placeholder="Email" fitContainer />
          </FormControl>
          <FormControl errorMessage={''}>
            <InputPassword placeholder="Password" fitContainer />
          </FormControl>
          <Button 
            size="large" 
            fitContainer
            disabled={false}
          >{false ? "Sedang memproses...": "Login"}</Button>
        </form>
        <div className="text-center mt-2">
          belum punya akun? <Link to="/register"> <b style={{textDecoration: 'underline'}}> Daftar Sekarang. </b> </Link>
        </div>
      </Card>
    </LayoutOne>
    </div>
  )
}
