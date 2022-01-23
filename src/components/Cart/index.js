import React from 'react'
import PropTypes from 'prop-types'
import { Button, CardItem, Text } from 'upkit'
import { FaArrowRight, FaCartPlus } from '@meronex/icons/fa'
import { config } from '../../config'
import { formatRupiah, sumPrice } from '../../app/utils'

function Cart({items, onItemInc, onItemDec, onCheckout}) {
  return (
    <div>
      <div className="px-2 border-b mt-5 pb-5">
        <div className="text-3xl flex items-center text-red-700">
          <FaCartPlus/>
          <div className="ml-2">
            Keranjang 
          </div>
        </div>

        <Text as="h5">Total: {formatRupiah(sumPrice(items))}</Text>
        <Button 
          text="Checkout" 
          fitContainer 
          iconAfter={<FaArrowRight />} 
          disabled={false}
          onClick={onCheckout}
        />
      </div>
      {
        !(items.length > 0) 
        ? <div className="text-center text-sm text-red-900"> belum ada items di keranjang </div>
        : <div className="p-2">
          {
            items.map((item, i) => {
              return (
                <div className="mb-2" key={i}>
                  <CardItem 
                    imgUrl={`${config.api_host}/images/products/${item.image_url}`} 
                    name={item.name} 
                    qty={item.qty} 
                    color="orange"
                    onInc={_ => onItemInc(item)}
                    onDec={_ => onItemDec(item)}
                  />
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })),
  onItemInc: PropTypes.func,
  onItemDec: PropTypes.func,
  onCheckout: PropTypes.func,
}

export default Cart

