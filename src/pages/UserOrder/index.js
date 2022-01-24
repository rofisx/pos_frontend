import { FaFileInvoiceDollar } from '@meronex/icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, LayoutOne, Table, Text } from 'upkit'
import TopBar from '../../components/TopBar'
import { getOrders } from '../../app/api/order';
const columns = [
  {
    Header: '', 
    id: 'Status', 
    accessor: order => {
      return <div>
      #{order.order_number} <br/> 

      </div> 
    }
  },
  {
    Header: 'Items', 
    accessor: order => {
      return <div>
        {order.order_items.map(item => {
          return <div key={item._id}>
            {item.name} {item.qty}
          </div>
        })}
      </div>
    }
  },
  {
    Header: 'Total',
    accessor: order => {
      return <div>
        { order.delivery_fee}
      </div>
    }
  },
  {
    Header: 'Invoice',
    accessor: order => {
      return <div>
        <Link to={`/invoice/${order._id}`}>
          <Button color="gray" iconBefore={<FaFileInvoiceDollar/>}>
            Invoice
          </Button>
        </Link>
      </div>
    }
  }
]

export default function UserOrder() {
  // const pesanan = [
  //   {
  //     "delivery_address": {
  //       "provinsi": "JAWA TENGAH",
  //       "kabupaten": "KABUPATEN DEMAK",
  //       "kecamatan": "MRANGGEN",
  //       "kelurahan": "KARANGSONO",
  //       "detail": "depan sd karangsono 3"
  //     },
  //     "_id": "615b280b007adecb044c7745",
  //     "status": "waiting_payment",
  //     "delivery_fee": 20000,
  //     "user": "615a97b213e3a8ef341b4cf8",
  //     "order_items": [
  //       {
  //         "_id": "615b280b007adecb044c7747",
  //         "name": "Toast",
  //         "price": 12000,
  //         "qty": 1,
  //         "product": "5f085e29df3e9c52c34d5d2d",
  //         "order": "615b280b007adecb044c7745",
  //         "__v": 0,
  //         "id": "615b280b007adecb044c7747"
  //       }
  //     ],
  //     "createdAt": "2021-10-04T16:12:59.513Z",
  //     "updatedAt": "2021-10-04T16:12:59.513Z",
  //     "order_number": 3,
  //     "__v": 0,
  //     "items_count": 1,
  //     "id": "615b280b007adecb044c7745"
  //   },
  // ];
  
  let [pesanan, setPesanan] = React.useState([])
  let [count, setCount] = React.useState(0)
  let [status, setStatus] = React.useState('idle')
  let [page, setPage] = React.useState(1)
  let [limit,] = React.useState(0)

  const fetchPesanan = React.useCallback( async () => {
    setStatus('process');

    let { data } = await getOrders({limit, page});
    if(data.error){
      setStatus('error');
      return;
    }

    setStatus('success');
    setPesanan(data.data);
    setCount(data.count);
  }, [page, limit]);

  React.useEffect(() => {
    fetchPesanan();
  },[fetchPesanan]);


  return (
    <LayoutOne>
       <TopBar/>
       <Text as="h3"> Pesanan Anda </Text>
       <br />

       <Table
         items={pesanan}
         totalItems={count}
         columns={columns}
         onPageChange={page => setPage(page)}
         page={page}
         isLoading={status === 'process'}
       />

     </LayoutOne>
  )
}
