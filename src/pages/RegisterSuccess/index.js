import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, LayoutOne, Text } from 'upkit'
import StoreLogo from '../../components/StoreLogo'

export default function RegisterSuccess() {
  return (
    <div style={{marginTop: '100px'}}>
      <LayoutOne size="small">
        <Card color="white">
          <div className="text-center mb-5">
            <StoreLogo/>
          </div>
          <Text as="h3">
            Pendaftaran Berhasil
          </Text>
          <Text>
            Silahkan mendaftar kembali
          </Text>
          <br />
          <Link to="/login">
            <Button fitContainer>Masuk</Button>
          </Link>
        </Card>
      </LayoutOne>
    </div>
  )
}
