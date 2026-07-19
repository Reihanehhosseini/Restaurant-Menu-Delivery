import React from 'react'
import ItemCart from './ItemCart';


export default function ShoppingItemCart({cart}) {


  return (
    <div className='w-full flex flex-col gap-3'>
        {cart.map(item => (
            <div key={item.id}>
                <ItemCart {...item} cart={cart}/>
            </div>
        ))}
      
    </div>
  )
}
