import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Text } from 'upkit';
import { LayoutOne, Table } from 'upkit/dist';
import TopBar from '../../components/TopBar';

const columns = [
  { Header: 'Nama', accessor: 'nama'}, 
  { Header: 'Detail', accessor: alamat => {
     return <div>
      {alamat.provinsi}, {alamat.kabupaten}, {alamat.kecamatan}, {alamat.kelurahan} <br/>
      {alamat.detail}
     </div> 
  }}
];

export default function UserAddress() {
  const data = [
    {
      "_id": "615aece526f5dccb18fd47de",
      "nama": "Edi Hartono",
      "kelurahan": "KARANGSONO",
      "kecamatan": "MRANGGEN",
      "kabupaten": "KABUPATEN DEMAK",
      "provinsi": "JAWA TENGAH",
      "detail": "depan sd karangsono 3",
      "user": "615a97b213e3a8ef341b4cf8",
      "createdAt": "2021-10-04T12:00:37.963Z",
      "updatedAt": "2021-10-04T12:00:37.963Z",
      "__v": 0
    }
  ]
  return (
    <LayoutOne size="large">
      <div>
        <TopBar />
        <Text>Alamat Pengiriman</Text>
        <br/>
        <div>
          <Link to="alamat-pengiriman/tambah">
            <Button>
              Tambah baru
            </Button>
          </Link>
          <br/>
          <br/>
          <Table
            items={data}
            columns={columns}
            totalItems={10}
            page={1}
            isLoading={false}
            perPage={3}
            onPageChange={_ => {}}
          />
        </div>

          {
            !data.length ? <div className="text-center p-10">
              Kamu belum menambahkan alamat pengiriman. <br/>
              <Link to="/alamat-pengiriman/tambah">
                <Button> Tambah Baru </Button>
              </Link>
            </div> : null
         }
      </div>
    </LayoutOne>
  )
}
