import React from 'react'
import { Table, Text } from 'upkit';
import { LayoutOne } from 'upkit/dist';
import StatusLabel from '../../components/StatusLabel';
import TopBar from '../../components/TopBar';

export default function Invoice() {
  const invoice = {
    "delivery_address": {
      "provinsi": "JAWA TENGAH",
      "kabupaten": "KABUPATEN DEMAK",
      "kecamatan": "MRANGGEN",
      "kelurahan": "KARANGSONO",
      "detail": "depan sd karangsono 3"
    },
    "_id": "615b280b007adecb044c774e",
    "sub_total": 12000,
    "delivery_fee": 20000,
    "total": 32000,
    "payment_status": "waiting_payment",
    "user": {
      "_id": "615a97b213e3a8ef341b4cf8",
      "full_name": "Edi hartono",
      "email": "edi@gmail.com",
      "password": "$2b$10$idF0c79Y/J/Cp2V5ggJLR.79D2L051bIOd691ttZn6KE3fFdX9ysS",
      "role": "user",
      "token": [
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVhOTdiMjEzZTNhOGVmMzQxYjRjZjgiLCJmdWxsX25hbWUiOiJFZGkgaGFydG9ubyIsImVtYWlsIjoiZWRpQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJfaWQiOjgsImlhdCI6MTYzMzMyNzA0N30.NOOFAlvOUODiVxgEFsgibjDCNWedZPxpz5VoAPMernA",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVhOTdiMjEzZTNhOGVmMzQxYjRjZjgiLCJmdWxsX25hbWUiOiJFZGkgaGFydG9ubyIsImVtYWlsIjoiZWRpQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJfaWQiOjgsImlhdCI6MTYzMzMzMzIxOH0.NSepMgrXmd11elFm9UJqhu17AkfGWfNgPDglIZ-_9W0",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVhOTdiMjEzZTNhOGVmMzQxYjRjZjgiLCJmdWxsX25hbWUiOiJFZGkgaGFydG9ubyIsImVtYWlsIjoiZWRpQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJfaWQiOjgsImlhdCI6MTYzMzM2Mzk1OX0.9mPspTfGmvk_uljEUZjnIuLGhkUM_4c39cl7c7WR5Sc",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVhOTdiMjEzZTNhOGVmMzQxYjRjZjgiLCJmdWxsX25hbWUiOiJFZGkgaGFydG9ubyIsImVtYWlsIjoiZWRpQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJfaWQiOjgsImlhdCI6MTYzMzUyOTUxNX0.WICgs6U82nG8Z3amhN6aL6-_x1odgZ8W0WUivkfGaqo"
      ],
      "createdAt": "2021-10-04T05:57:06.050Z",
      "updatedAt": "2021-10-06T14:11:55.937Z",
      "customer_id": 8,
      "__v": 0
    },
    "order": {
      "delivery_address": {
        "provinsi": "JAWA TENGAH",
        "kabupaten": "KABUPATEN DEMAK",
        "kecamatan": "MRANGGEN",
        "kelurahan": "KARANGSONO",
        "detail": "depan sd karangsono 3"
      },
      "_id": "615b280b007adecb044c7745",
      "status": "waiting_payment",
      "delivery_fee": 20000,
      "user": "615a97b213e3a8ef341b4cf8",
      "order_items": [
        "615b280b007adecb044c7747"
      ],
      "createdAt": "2021-10-04T16:12:59.513Z",
      "updatedAt": "2021-10-04T16:12:59.513Z",
      "order_number": 3,
      "__v": 0
    },
    "createdAt": "2021-10-04T16:12:59.570Z",
    "updatedAt": "2021-10-04T16:12:59.570Z",
    "__v": 0
  }

  // if(status === 'process'){
  //   return <LayoutOne>
  //       <div className="text-center py-10">
  //           <div className="inline-block">
  //               <BounceLoader color="red"/>
  //           </div>
  //       </div>
  //   </LayoutOne>
  // }

  return (
    <LayoutOne>
      <TopBar />
      <Text as="h3">Invoice</Text>
      <br />
      {
        invoice && 
        <Table
          showPagination={false}
          items={[
              { label: 'Status', value: <StatusLabel status={invoice?.payment_status}/>}, 
              { label: 'Order ID', value: '#' + invoice?.order?.order_number}, 
              { label: 'Total amount', value: 'Rp. 100.000'}, 
              { label: 'Billed to', value: <div>
                  <b>{invoice?.user?.full_name} </b> <br/>
                      {invoice?.user?.email} <br/> <br/>
                      {invoice?.delivery_address?.detail} <br/>
                      {invoice?.delivery_address?.kelurahan},
                      {invoice?.delivery_address?.kecamatan} <br/>
                      {invoice?.delivery_address?.kabupaten} <br/>
                      {invoice?.delivery_address?.provinsi}
              </div>}, 
              { label: 'Payment to', value: <div>
                  {'Edi Hartono'} <br/>
                  {'edyh221@gmail.com'} <br/> 
                  {'xxxx-xxxxx-xxxxx-x'} <br/> 
                  {'BI'}
              </div>}
          ]}
          columns={[
              { Header: 'Invoice', accessor: 'label'},
              { Header: '', accessor: 'value'},
          ]}
        />
      }
    </LayoutOne>
  )
}
