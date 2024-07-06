import React from 'react'

function ItemHeader ({ title, href }: { title: string, href: string }) {
  return (
    <li className='hover:font-bold hover:border-b'><a href={href}>{title}</a> </li>
  )
}

export default ItemHeader
