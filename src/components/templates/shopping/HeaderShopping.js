import BackRoute from '@/components/modules/BackRoute'
import React from 'react'

export default function HeaderShopping() {
  return (
    <div className='w-full flex items-center justify-between'>
      <BackRoute/>
      <h1 className='font-serif text-xl'>Your Cart</h1>

    </div>
  )
}
