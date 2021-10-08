import { FaAddressCard, FaArrowLeft, FaArrowRight, FaCartPlus, FaInfoCircle, FaRegCheckCircle } from '@meronex/icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, LayoutOne, Responsive, Steps, Table, Text } from 'upkit'
import TopBar from '../../components/TopBar'
import { useHistory } from 'react-router'

const IconWrapper = ({children}) => {
  return <div className="text-3xl flex justify-center">
   {children}
  </div>
}

const steps = [
  {
    label: 'Item', 
    icon: <IconWrapper><FaCartPlus/></IconWrapper> 
  },
  {
    label: 'Alamat', 
    icon: <IconWrapper><FaAddressCard/></IconWrapper> 
  }, 
  {
    label: 'Konfirmasi', 
    icon: <IconWrapper><FaInfoCircle/></IconWrapper> 
  }
];

const columns = [
  { 
    Header: 'Nama produk', 
    accessor: item => <div className="flex items-center">
      <img src={item.image_url} width={48} alt={item.name}/>
      {item.name}
    </div>
  },
  {
    Header: 'Jumlah', 
    accessor: 'qty'
  }, 
  {
    Header: 'Harga satuan', 
    id: 'price',
    accessor: item => <span> @ {item.price} </span>
  },
  { 
    Header: 'Harga total', 
    id: 'subtotal', 
    accessor: item => {
    return <div>
      { item.price * item.qty}
    </div>
    }
  }
];

const addressColumns = [
  {
    Header: 'Nama alamat',
    accessor: alamat => {
      return <div>
        {alamat.nama} <br/>
        <small>
          {alamat.provinsi}, {alamat.kabupaten}, {alamat.kecamatan}, {alamat.kelurahan} <br/> 
          {alamat.detail}
        </small>
      </div>
    } 
  }
];

export default function Checkout() {
  const [ activeStep, setActiveStep ] = React.useState(0);
  const [ selectedAddress, setSelectedAddress ] = React.useState(null);
  const history = useHistory();
  const items = [
    {name: 'Nasi Goreng Rendang', image_url: 'https://source.unsplash.com/400x300/?food' , id: 1, price: 32000, qty: 1},
    {name: 'Nasi Goreng Biasa', image_url: 'https://source.unsplash.com/400x300/?food' , id: 2, price: 32000, qty: 1},
  ];

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
    <LayoutOne>
      <TopBar />
      <Text as="h3">Checkout</Text>
      <br/>
      <Steps steps={steps} />

      {activeStep === 0 &&
        <div>
          <br/> <br/>
          <Table 
            items={items}
            columns={columns}
            perPage={0}
            showPagination={false}
          />
          <br/>
          <div className="text-right">
            <Text as="h4">
              Subtotal: {'Rp. 32.000'}
            </Text> 

            <br/>
            {/* {
              !auth.user ?
              <Button 
                onClick={_ => history.push('/login')}
                color="red"
                iconAfter={<FaUserAlt/>}
              > Login to Checkout</Button> :
              
            } */}

              <Button 
                onClick={_ => setActiveStep(activeStep + 1)}
                color="red"
                iconAfter={<FaArrowRight/>}
              > Selanjutnya </Button>
          </div>
        </div>
      }

      {activeStep === 1 &&
        <div>
        <Table
          items={data}
          columns={addressColumns}
          perPage={10}
          page={1}
          onPageChange={() => {}}
          totalItems={10}
          isLoading={false}
          selectable
          primaryKey={'_id'}
          selectedRow={selectedAddress}
          onSelectRow={ item => setSelectedAddress(item)}
        />

        {(!data.length) && 
          <div className="text-center my-10">
            <Link to="/alamat-pengiriman/tambah">
              Kamu belum memiliki alamat pengiriman <br/> <br />
              <Button> Tambah alamat </Button>
            </Link>
          </div>
        }

        <br/> <br/>
        <Responsive desktop={2} tablet={2} mobile={2}>

          <div>
            <Button 
              onClick={_ =>  setActiveStep(activeStep - 1)} 
              color="gray" 
              iconBefore={<FaArrowLeft/>}>

              Sebelumnya
            </Button>
          </div>

          <div className="text-right">
           <Button 
             onClick={_ => setActiveStep(activeStep + 1)} 
             disabled={!selectedAddress}
             color="red" 
             iconAfter={<FaArrowRight/>}>
              Selanjutnya
           </Button>
          </div>

        </Responsive>
        </div>
      }
      { activeStep === 2 &&
        <div>
         <Table
           columns={[
             {
               Header: '', 
               accessor: 'label',
             },
             {
               Header: '',
               accessor: 'value'
             }
           ]}
           items={[
             {label: 'Alamat', value: <div>
              {selectedAddress.nama} <br/> 
              {selectedAddress.provinsi}, {selectedAddress.kabupaten}, {selectedAddress.kecamatan}, {selectedAddress.kelurahan} <br/> 
              {selectedAddress.detail}

             </div>},
             {label: 'Subtotal', value: 'Rp. 32.000'}, 
             {label: 'Ongkir', value: 'Rp. 20.000'}, 
             {label: 'Total', value: <b>{'Rp. 42.000'}</b>}, 
           ]}
           showPagination={false}
         />
        <br />
        <Responsive desktop={2} tablet={2} mobile={2}>
         <div>
           <Button 
             onClick={_ =>  setActiveStep(activeStep - 1)} 
             color="gray" 
             iconBefore={<FaArrowLeft/>}>
             Sebelumnya
           </Button>
         </div>
         <div className="text-right">
           <Button 
             color="red"
             size="large"
             iconBefore={<FaRegCheckCircle/>}
             onClick={() => history.push('/invoice/615b280b007adecb044c7745')}
           >
              Bayar
           </Button>
         </div>
        </Responsive>
        </div>
      }  
    </LayoutOne>
  )
}
